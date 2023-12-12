---
title: Module
---

La boucle du module récupère les informations du module
`{loop type="module" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#module-arguments}

| Argument    | Description                                                                                                                                         | Defaut | Exemple                      |
|-------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|:------:|:-----------------------------|
| active      | Booléen.                                                                                                                                            |        | active="no"                  |
| area        | Un ou plusieurs ids de zones. Seuls les modules assignés à cette zone seront renvoyés.                                                              |        | area="5", profile="3,2,17"   |
| code        | Module code                                                                                                                                         |        | code="Foo"                   |
| exclude     | Un ou plusieurs ids de module à exclure.                                                                                                            |        | exclude="2", exclude="1,4,7" |
| id          | Un ou plusieurs ids de module.                                                                                                                      |        | id="2", id="1,4,7"           |
| module_type | Type de module (classic, payment or delivery) <br/> Valeurs attendues : <br/> 1 : classic module <br/> 2 : delivery module <br/> 3 : payment module |        | module_type="1"              |
| order       | Une liste de valeurs see [sorting possible values](#module-order-possible-values)                                                                   | manual | order="alpha_reverse"        |
| profile     | Un ou plusieurs ids de profile.                                                                                                                     |        | profile="2", profile="1,4,7" |

Plus les [global arguments](./global_arguments)

## Sorties

| Variable       | Value                                       |
|:---------------|:--------------------------------------------|
| $ACTIVE        | vérifie si le module est activé ou non      |
| $CHAPO         | le chapo du module                          |
| $CLASS         | le namespace complet de la classe du module |
| $CODE          | le code du module                           |
| $DESCRIPTION   | la description du module                    |
| $ID            | l'ID du module                              |
| $IS_TRANSLATED | renvoie true si le module est traduit       |
| $LOCALE        | la locale utilisée pour cette recherche     |
| $POSITION      | la position de ce module                    |
| $POSTSCRIPTUM  | le postscriptum du module                   |
| $TITLE         | le titre du module                          |
| $TYPE          | le type du module                           |

Plus les [global Sorties](./global_Sorties)

## Valeurs possibles de tri {#module-order-possible-values}
[Arguments](#module-arguments)

| Valeur croissante | Valeur décroissante | Champs triés   |
|-------------------|---------------------|:---------------|
| code              | code_reverse        | code           |
| enabled           | enabled_reverse     | enabled status |
| id                | id_reverse          | Id             |
| manual            | manual_reverse      | position       |
| title             | title_reverse       | title          |
| type              | type_reverse        | type           |
