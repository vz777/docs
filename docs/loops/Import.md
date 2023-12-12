---
title: Import
---

La boucle Import répertorie toutes les importations définies.
`{loop type="import" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#import-arguments}

| Argument | Description                                                                        | Default | Exemple                                                                 |
|----------|:-----------------------------------------------------------------------------------|:-------:|:------------------------------------------------------------------------|
| category | Un ou plusieurs ids de categorie d'import.                                         |         | category="2", category="1,4"                                            |
| id       | Un ou plusieurs ids d'import.                                                      |         | id="2", id="1,4,7"                                                      |
| order    | Une liste de valeurs voir [sorting possible values](#import-order-possible-values) | manual  | order="alpha"                                                           |
| ref      | Un ou plusieurs refs d'import.                                                     |         | ref="thelia.import.price", id="thelia.import.price,thelia.import.stock" |

Ainsi que les [arguments communs](./global_arguments)

## Sorties

| Variable      | Value                                                                     |
|:--------------|:--------------------------------------------------------------------------|
| $CATEGORY_ID  | l'id de la catégorie de l'import                                          |
| $DESCRIPTION  | la description de l'importation                                           |
| $HANDLE_CLASS | Le nom entièrement qualifié de la classe qui implémente cette importation |
| $ID           | l'id de l'importation                                                     |
| $POSITION     | la position de l'importation dans sa catégorie                            |
| $REF          | La ref d'importation, telle que définie dans un fichier config.xml        |
| $TITLE        | le titre de l'importation                                                 |
| $URL          | l'URL pour démarrer cette importation dans la page d'importation d'admin  |

Plus les [paramètres de sorties communs](./global_outputs)

## Valeurs possibles de tri {#import-order-possible-values}
[Arguments](#import-arguments)

| Valeur croissante | Valeur décroissante | Champs triés |
|-------------------|---------------------|:-------------|
| alpha             | alpha_reverse       | title        |
| id                | id_reverse          | Id           |
| manual            | manual_reverse      | position     |
| ref               | ref_reverse         | reference    |
