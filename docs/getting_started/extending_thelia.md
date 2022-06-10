---
title: Extending Thelia
sidebar_position: 2
toc_max_heading_level: 6
---

## Create a module

:::caution

We advise to create only one module for all your own logic, don't create one module by feature or something else.    
The only reason to create a separate module is if you want to share it with the community 😉

:::

To extend to Thelia you need to create a module in general for the main module we call it with the same name as the project.

A command can help you to create the base files :

```bash
php Thelia module:generate MyProject
```

This will generate this structure in the directory `local\modules`
```
\MyProject
  MyProject.php <- mandatory
  composer.json
  \Config
    config.xml   <- mandatory
    module.xml   <- mandatory
    routing.xml
    schema.xml
  ...
```

- `MyProject.php` is the base file of your module it will help you to set up some behaviour  
- `module.xml` contains information about module like version of the module, compatibility and dependencies with other modules, author, ...    
- `config.xml` to declare your services, event listener, loops, forms, commands or hooks. But thanks to symfony autowiring most of the time you won't need to do this.
- `routing.xml` to list your application's routes, like config.xml this file is not very useful anymore because we can put the routes directly in the controllers.
- `schema.xml` to describe the database table related to your module.
- `composer.json` help you to share your module with the community

Once the module is created you can go to your shop back-office and active it in the module list.

## Base file (MyProject.php)

This file must extend the `Thelia\Module\BaseModule` class (except for payments and deliveries modules)
During the lifecycle of a module theses function are called and allow you to apply your own logic by overwritting them :
- `install(ConnectionInterface $con = null);` This method is called when the plugin is installed for the first time.
- `preActivation(ConnectionInterface $con = null);` This method is called before the module activation, and may prevent it by returning false.
- `postActivation(ConnectionInterface $con = null);` This method is called after was successfully activated.
- `preDeactivation(ConnectionInterface $con = null);` This method is called before the module deactivation, and may prevent it by returning false.
- `postDeactivation(ConnectionInterface $con = null);` This method is called after was successfully deactivated.
- `update($currentVersion, $newVersion, ConnectionInterface $con = null);` This method is called on a module refresh if the previous version in module.xml is different than the current version

## Extend the database



### Describing schema

To describe your schema please refer to [propel documentation](http://propelorm.org/documentation/reference/schema.html).


#### Add a column to native Thelia table

In Thelia it is **not** possible to modify the native tables.    
The best practice to add columns is to create a new table with a foreign key attached to the base table.

```xml
    <table name="extend_customer_data" namespace="MyProject\Model">
        <column name="id" primaryKey="true" required="true" type="INTEGER" />
        <column name="additional_column" type="VARCHAR" size="255" />
        <foreign-key foreignTable="customer" name="fk_extend_customer_data_customer_id" onDelete="CASCADE" onUpdate="CASCADE">
            <reference foreign="id" local="id" />
        </foreign-key>
        ...
    </table>
```

### Generate Sql / Model from schema

To generate Sql request and associated model class from schema use this command

```bash
php Thelia module:generate:model --generate-sql MyProject 
```

This command will generate a TheliaMain.sql file at `local/modules/MyProject/Confif/TheliaMain.sql` don't modify it, it will be erased each time this command is executed.  
It will also generate [Model](http://propelorm.org/documentation/reference/active-record.html) and [ModelQuery](http://propelorm.org/documentation/reference/model-criteria.html) file for each table, in these files you and add your own function or property, they will not be erased as they are just empty class that extend the real propel Model located in propel cache. 

### Execute Sql

#### At module initialization
If you want to execute the sql at the first module activation add this function to your module's base file :

```php
    public function postActivation(ConnectionInterface $con = null): void
    {
        // Look if module has already been activated 
        if (!self::getConfigValue('is_initialized', false)) {
            $database = new Database($con);
            // Insert generated file
            $database->insertSql(null, [__DIR__.'/Config/TheliaMain.sql']);
            
            // Set module as initialized
            self::setConfigValue('is_initialized', true);
        }
    }
```

#### On module update
If your module has already been activated you must go through the update system.
For now there is no way to get directly the sql request needed to update your database, you need to extract it from the generated TheliaMain.sql.

For example if at module initialization you have this sql generated :

```sql
DROP TABLE IF EXISTS `block_group`;

CREATE TABLE `block_group`
(
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slug` VARCHAR(50),
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `slug_unique` (`slug`)
) ENGINE=InnoDB;
``` 

And later you want to add a new boolean column named "visible" to you table you will add it to your shema.xml and get this sql :

```sql
DROP TABLE IF EXISTS `block_group`;

CREATE TABLE `block_group`
(
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slug` VARCHAR(50),
    `visible` TINYINT DEFAULT 0 NOT NULL,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `slug_unique` (`slug`)
) ENGINE=InnoDB;
``` 

So you have to extract only the difference like this 

```sql
ALTER TABLE `block_group` ADD `visible` TINYINT DEFAULT 0 NOT NULL;
```

Then put this extracted requests on a new file located here `local/modules/MyProject/Config/update/` the name of the file must be the next version of your module for example if the version of your module is `1.0.6` and the next version is `1.1.0` create this file `local/modules/MyProject/Config/update/1.1.0.sql` and put the sql in it and change the `<version></version>` in module.xml.   
Check that you have this function in your base file : 

```php
    /**
     * Execute sql files in Config/update/ folder named with module version (ex: 1.0.1.sql).
     *
     * @param $currentVersion
     * @param $newVersion
     * @param ConnectionInterface $con
     */
    public function update($currentVersion, $newVersion, ConnectionInterface $con = null): void
    {
        $finder = Finder::create()
            ->name('*.sql')
            ->depth(0)
            ->sortByName()
            ->in(__DIR__.DS.'Config'.DS.'update');

        $database = new Database($con);

        /** @var \SplFileInfo $file */
        foreach ($finder as $file) {
            if (version_compare($currentVersion, $file->getBasename('.sql'), '<')) {
                $database->insertSql(null, [$file->getPathname()]);
            }
        }
    }
```

if not you will have to add it.
This function is called when Thelia refresh module list (either in the admin page oy by command) and detect that the next version of your module is different than the current.
And she will search and execute all sql files between two versions.

## Routing

Routing in Thelia work like [Symfony routing](https://symfony.com/doc/current/routing.html#creating-routes).
A specificity in Thelia is that there is 2 types of Controller :
- Front controllers which extends `BaseFrontController` and when you call a render in it Thelia will search template in frontOffice directory
- Admin controllers which extend `BaseAdminController`  when you call a render in it Thelia will search template in backOffice directory, and all routes in these controllers are automatically secured and only logged admins can call them. 

## Templating

The template engine used in Thelia is [Smarty](https://smarty-php.github.io/smarty/).
There is 4 types of templates :
- frontOffice : for templates rendered from a controller that extent `BaseFrontController`
- backOffice : for templates rendered from a controller that extent `BaseAdminController`
- pdf : for pdf documents like invoices
- mail : for mail sent by Thelia

For each of this types you can choose an active template. Either by the configuration page in back office or by these environment variables: 
```
ACTIVE_FRONT_TEMPLATE    
ACTIVE_ADMIN_TEMPLATE    
ACTIVE_MAIL_TEMPLATE   
ACTIVE_PDF_TEMPLATE   
``` 
:::caution
We advised to never modify the defaults templates but copy and rename it with the name of your project.    
Like this you can always update Thelia and the defaults templates without loosing your changes
:::

### Templates structure

Thelia Smarty templates are located in the templates sub-directory.

```
\templates
  \frontOffice
    \default
    \myTemplate
  \backOffice
    \default
    ...  
  \pdf
    \default
    ...  
  \mail
    \default
    ...
```

This is the structure of all Thelia templates, it can be located either at the root of your project or in each module folder.
If same file are in multiple templates location Thelia apply this priority to know which as to be rendered (the first file found is the file rendered)
1. In the active template in root templates directory
2. In the active template in each module subdirectory located in root templates directory
3. In the active template in each module templates directory
4. In the default template in root templates directory
5. In the default template in each module subdirectory located in root templates directory
6. In the default template in each module templates directory

For example if you have this structure :
```
\local
    \modules
        \MyProject
            \templates
                \frontOffice
                    \default
                        template.html
\templates
  \frontOffice
    \default
        template.html
    \myTemplate
        template.html
        \modules
            \myproject
                template.html
```

It will check all these directories in this order :
1. `\templates\frontOffice\myTemplate\`
2. `\templates\frontOffice\myTemplate\modules\myproject` * this for each activated modules
3. `\local\modules\MyProject\templates\frontOffice\myTemplate` * this for each activated modules
4. `\templates\frontOffice\default\`
5. `\templates\frontOffice\default\modules\myproject` * this for each activated modules
6. `\local\modules\MyProject\templates\frontOffice\default` * this for each activated modules

### Features

#### Loops

Loops allow to get data from your shop back-end and display them in your front view. More documentation can be found [here](../loops).

#### Smarty plugins

Smarty plugins are used to execute some function from templates