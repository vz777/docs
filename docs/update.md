---
title: Update
sidebar_position: 14
---

## Mettre à jour les composants
Pour mettre à jour les composants de Thelia, exécutez simplement cette commande

```
composer update thelia/thelia-skeleton 2.5.0
```

## Mettre à jour la base de données
Ensuite, vous pouvez mettre à jour votre base de données avec ce script

```bash
php local/setup/update.php
```

## Migrer de Thelia < 2.4 to 2.5
Les modules conçus pour Thelia <= 2.4 ne sont pas compatibles avec la nouvelle version de Thelia, mais il n'y a pas beaucoup de changements à apporter pour les rendre compatibles

### Module
- Certaines méthodes dans BaseModule ont eu leur type de retour défini, car vous les écrasez, vous devez également définir leur type de retour.
- Si vous souhaitez activer l'autowiring dans votre module, vous devez ajouter cette fonction dans votre classe de base :
```php
public static function configureServices(ServicesConfigurator $servicesConfigurator): void
{
    $servicesConfigurator->load(self::getModuleCode().'\\', __DIR__)
        ->exclude([THELIA_MODULE_DIR . ucfirst(self::getModuleCode()). "/I18n/*"])
        ->autowire(true)
        ->autoconfigure(true);
}
```

### Propel
- Dans `schema.xml` changer le nom de la base de données de `Thelia` à `TheliaMain`
- Si certains modèles ont été générés par Propel dans `Model/Base` et `Model/Map`, supprimez ces deux dossiers, ils sont maintenant générés dans le cache.

### Formulaires
- Le nom d'alias du type de formulaire ne fonctionne plus, vous devez utiliser le nom de classe entièrement qualifié, comme `TextType::class` au lieu de `text`
- Pour le paramètre `choices` dans le type de choix, inversez les `label` et `value`
- La méthode `getName()` doit être statique
- Le nom du formulaire ne doit pas contenir de point `.` remplacez-le par un underscore `_` (n'oubliez pas de le remplacer dans vos modèles)
- La structure des contraintes de rappel a changé
- Dans les contrôleurs, n'appelez pas `new MyForm();` pour créer votre formulaire mais `createForm(FormClassName::getName())`

### Dispatcher
- Les arguments dans la fonction de dispatch sont inversés, l'`objet d'événement ` est le premier argument et le `nom de l'événement name` est le second.

### Smarty
- Si vous essayez d'accéder à une variable non définie dans Smarty, cela générera désormais une erreur. Vous devez soit effectuer une vérification avant de l'utiliser, soit ajouter une valeur par défaut comme ceci ` {$var|default:null} `.

