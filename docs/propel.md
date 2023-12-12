---
title: Propel
sidebar_position: 4
---

Thelia utilise [Propel 2](http://propelorm.org/) orm pour interagir avec la base de données.

## Décrire le schema

Pour ajouter une nouvelle table dans Thelia, vous devez la décrire dans votre schéma qui se trouve ici `MyModule/Config/schema.xml` veuillez regarder la [propel documentation](http://propelorm.org/documentation/reference/schema.html) pour savoir comment faire.

## Génerer Sql / Model à partir du schema

Pour générer une requête SQL et la classe de modèle associée à partir du schéma, utilisez la commande suivante

```bash
php Thelia module:generate:model --generate-sql MyProject
```

Cette commande va générer un fichier TheliaMain.sql dans `local/modules/MyProject/Confif/TheliaMain.sql` ne le modifiez pas, il sera écrsé à chaque fois que la commande sera éxecutée.
Cela va aussi générer les fichiers [Model](http://propelorm.org/documentation/reference/active-record.html) et [ModelQuery](http://propelorm.org/documentation/reference/model-criteria.html) pour chaque table,  dans ces fichiers, vous pouvez ajouter vos propres fonctions ou propriétés, elles ne seront pas effacées car ce ne sont que des classes vides qui étendent le véritable modèle Propel situé dans le cache Propel.

## Executer Sql

### A l'initialization du module
Si vous voulez éxecuter le sql à la première activation du module, ajouter cette méthode dans le fichier php à la racine du module

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

### A la mise à jour du module
Si votre module a déjà été activé, vous devez passer par le système de mise à jour.
Pour l'instant il n'y a pas de moyen d'obtenir directement la requête sql nécessaire à la mise à jour de votre base de données, vous devez l'extraire du fichier TheliaMain.sql généré.

Par exemple, si lors de l'initialisation du module vous avez généré ce sql :

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

Et plus tard, vous voulez ajouter une nouvelle colonne booléenne nommée "visible" à votre table, vous l'ajouterez à votre shema.xml et vous obtiendrez ce code SQL :

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

Il faut donc extraire uniquement la différence comme suit

```sql
ALTER TABLE `block_group` ADD `visible` TINYINT DEFAULT 0 NOT NULL;
```

Puis mettez ces requêtes extraites dans un nouveau fichier situé ici `local/modules/MyProject/Config/update/` le nom du fichier doit être la prochaine version de votre module. Par exemple, si la version de votre module est `1.0.6` et que la prochaine version est `1.1.0`, créez ce fichier `local/modules/MyProject/Config/update/1.1.0.sql` et mettez-y le sql et changez le `<version></version>` dans module.xml.
Assurez-vous que vous avez cette méthode dans votre fichier de base :

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

Si ce n'est pas le cas, vous devrez l'ajouter.
Cette fonction est appelée lorsque Thelia rafraîchit la liste des modules (soit dans la page d'administration, soit par commande) et détecte que la prochaine version de votre module est différente de la version actuelle.
Elle recherchera et exécutera tous les fichiers sql entre les deux versions.


## Ajouter une colonne à la table native de Thelia

Dans Thelia, il n'est **pas** possible de modifier les tables natives.
La meilleure pratique pour ajouter des colonnes est de créer une nouvelle table avec une clé étrangère attachée à la table de base.

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
