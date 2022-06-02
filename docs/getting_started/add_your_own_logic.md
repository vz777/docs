---
title: Add your own logic
sidebar_position: 2
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

### Create your tables

### Update your table