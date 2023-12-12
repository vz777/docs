---
title: Import Category
---

La boucle Import category répertorie toutes les catégories d'importation définies.
`{loop type="import-category" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#import-arguments}

| Argument | Description                                                                       | Defaut | Exemple                                                                         |
|----------|:----------------------------------------------------------------------------------|:------:|:--------------------------------------------------------------------------------|
| id       | Un ou plusieurs ids de categorie d'import.                                        |        | id="2", id="1,4,7"                                                              |
| order    | Une liste de valeurs see [sorting possible values](#import-order-possible-values) | manual | order="alpha"                                                                   |
| ref      | Une ou plusieurs refs de categorie d'import.                                      |        | ref="thelia.import.products", id="thelia.import.products,thelia.import.modules" |

Ainsi que les [arguments communs](./global_arguments)

## Sorties

| Variable  | Value                                                              |
|:----------|:-------------------------------------------------------------------|
| $ID       | l'id de la catégorie de l'import                                   |
| $POSITION | la position de la catégorie de l'import                            |
| $REF      | La ref d'importation, telle que définie dans un fichier config.xml |
| $TITLE    | le titre de la catégorie d'importation                             |

Plus les [paramètres de sorties communs](./global_outputs)

## Valeurs possibles de tri {#import-order-possible-values}
[Arguments](#import-arguments)

| Valeur croissante | Valeur décroissante | Champs triés |
|-------------------|---------------------|:-------------|
| alpha             | alpha_reverse       | title        |
| id                | id_reverse          | Id           |
| manual            | manual_reverse      | position     |
| ref               | ref_reverse         | reference    |
