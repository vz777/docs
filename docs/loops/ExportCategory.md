---
title: Export Category
---

La boucle Exportation de Catégorie répertorie toutes les catégories d'exportation définies.
`{loop type="export-category" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#export-arguments}

| Argument | Description                                                                        | Defaut | Exemple                                                                          |
|----------|:-----------------------------------------------------------------------------------|:------:|:---------------------------------------------------------------------------------|
| id       | Un ou plusieurs ids export category.                                               |        | id="2", id="1,4,7"                                                               |
| order    | Une liste de valeurs voir [sorting possible values](#export-order-possible-values) | manual | order="alpha"                                                                    |
| ref      | Une ou plusieurs ref d'export category.                                            |        | ref="thelia.export.customer", id="thelia.export.customer,thelia.export.products" |

Ainsi que les [arguments communs](./global_arguments)

## Sorties

| Variable  | Value                                                                   |
|:----------|:------------------------------------------------------------------------|
| $ID       | L'ID de catégorie d'exportation                                         |
| $POSITION | la position de catégorie d'exportation                                  |
| $REF      | La ref de la catégorie d'exportation, telle que définie dans config.xml |
| $TITLE    | Le titre de catégorie d'exportation                                     |

Plus les [paramètres de sorties communs](./global_outputs)

## Valeurs possibles de tri {#export-order-possible-values}
[Arguments](#export-arguments)

| Valeur croissante | Valeur décroissante | Champs triés |
|-------------------|---------------------|:-------------|
| alpha             | alpha-reverse       | title        |
| id                | id_reverse          | id           |
| manual            | manual_reverse      | position     |
| ref               | ref_reverse         | reference    |
