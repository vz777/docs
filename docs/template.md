---
title: Template
sidebar_position: 5
---

Le moteur de template utilisé dans Thelia est [Smarty](https://smarty-php.github.io/smarty/).
Il existe 4 types de modèles :
- frontOffice : pour les modèles générés à partir d'un contrôleur qui étend `BaseFrontController`
- backOffice : pour les modèles générés à partir d'un contrôleur qui étend `BaseAdminController`
- pdf : pour les documents PDF tels que les factures
- mail : pour les courriers envoyés par Thelia

Pour chacun de ces types, vous pouvez choisir un modèle actif, soit par la page de configuration dans le back-office, soit par ces variables d'environnement :
```
ACTIVE_FRONT_TEMPLATE
ACTIVE_ADMIN_TEMPLATE
ACTIVE_MAIL_TEMPLATE
ACTIVE_PDF_TEMPLATE
```
:::attention
Il est fortement recommandé de ne jamais modifier les modèles par défaut, mais de les copier et de les renommer avec le nom de votre projet.
Ainsi, vous pouvez toujours mettre à jour Thelia et les modèles par défaut sans perdre vos modifications.
:::

### Structure des modèles

Les modèles Smarty de Thelia se trouvent dans le sous-répertoire "templates".

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

C'est la structure de tous les modèles Thelia, elle peut être située soit à la racine de votre projet, soit dans le dossier de chaque module.
Si un même fichier se trouve dans plusieurs emplacements de modèles, Thelia applique cette priorité pour déterminer lequel doit être rendu (le premier fichier trouvé est le fichier rendu) :
1. Dans le modèle "actif" du répertoire de modèles principal
2. Dans le modèle "actif" de chaque sous-répertoire de module situé dans le répertoire principal des templates
3. Dans le modèle "actif" de chaque répertoire de templates de module
4. Dans le modèle "par défaut" du répertoire principal des templates
5. Dans le modèle "par défaut" de chaque sous-répertoire de module situé dans le répertoire principal des templates
6. Dans le modèle "par défaut" de chaque répertoire de templates de module

Par exemple, si vous avez cette structure :
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

Il vérifiera tous ces répertoires dans cet ordre :
1. `\templates\frontOffice\myTemplate\`
2. `\templates\frontOffice\myTemplate\modules\myproject` * this for each activated modules
3. `\local\modules\MyProject\templates\frontOffice\myTemplate` * this for each activated modules
4. `\templates\frontOffice\default\`
5. `\templates\frontOffice\default\modules\myproject` * this for each activated modules
6. `\local\modules\MyProject\templates\frontOffice\default` * this for each activated modules

### Fonctionnalités

#### Boucles

Les boucles permettent d'obtenir des données à partir de votre backend de boutique et de les afficher dans votre vue frontale. Vous trouverez plus de documentation [ici](/loops/index.md).

#### Smarty plugins

Les plugins Smarty sont utilisés pour exécuter des fonctions depuis les template. Vous trouverez plus de documentation [ici](/smarty_plugins/index.md).
