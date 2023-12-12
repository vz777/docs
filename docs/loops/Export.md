---
title: Export
---

La boucle Export liste tous les exports définis
`{loop type="export" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#export-arguments}

| Argument | Description                                                                        | Defaut | Exemple                                                                        |
|----------|:-----------------------------------------------------------------------------------|:------:|:-------------------------------------------------------------------------------|
| category | Un ou plusieurs Ids de categorie export                                            |        | category="2", category="1,4"                                                   |
| id       | Un ou plusieurs export ids.                                                        |        | id="2", id="1,4,7"                                                             |
| order    | Une liste de valeurs voir [sorting possible values](#export-order-possible-values) | manual | order="alpha"                                                                  |
| ref      | Une ou plusieurs ref d'export.                                                     |        | ref="thelia.export.customer", id="thelia.export.customer,thelia.export.orders" |

Plus les [global arguments](./global_arguments)

## Sorties

| Variable      | Valeur                                                                 |
|:--------------|:-----------------------------------------------------------------------|
| $CATEGORY_ID  | L'ID de catégorie d'export                                             |
| $DESCRIPTION  | La description de l'exportation                                        |
| $HANDLE_CLASS | Le nom entièrement qualifié de la classe qui implémente cette export   |
| $ID           | L'ID d'export                                                          |
| $POSITION     | La position de l'export dans sa catégorie                              |
| $REF          | La ref d'exportation, telle que définie dans config.xml                |
| $TITLE        | Le titre de l'export                                                   |
| $URL          | L'URL pour démarrer cette exportation dans la page d'admin des exports |

Plus les [global Sorties](./global_Sorties)

## Valeurs possibles de tri {#export-order-possible-values}
[Arguments](#export-arguments)

| Valeur croissante | Valeur décroissante | Champs triés |
|-------------------|---------------------|:-------------|
| alpha             | alpha-reverse       | title        |
| id                | id_reverse          | id           |
| manual            | manual-reverse      | position     |
| ref               | ref_reverse         | reference    |
