---
title: Feature
---

La boucle Feature répertorie les caractéristiques.
`{loop type="feature" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#feature-arguments}

| Argument         | Description                                                                                                | Default | Exemple               |
|------------------|:-----------------------------------------------------------------------------------------------------------|:-------:|:----------------------|
| exclude          | Un ou plusieurs ids de feature à exclure.                                                                  |         | exclude="456,123"     |
| exclude_template | Un ou plusieurs ids de template. Seules les caractéristiques NON attachées à ces modèles seront renvoyées. |         | id="2", id="1,4,7"    |
| id               | Un ou plusieurs ids de feature.                                                                            |         | id="2", id="1,4,7"    |
| lang             | Un id de langue                                                                                            |         | lang="1"              |
| order            | Une liste de valeurs voir [sorting possible values](#feature-order-possible-values)                        | manual  | order="alpha_reverse" |
| product          | Un ou plusieurs ids de produit.                                                                            |         | id="2", id="1,4,7"    |
| template         | Un ou plusieurs ids de template. Seules les caractéristiques NON attachées à ces modèles seront renvoyées. |         | id="2", id="1,4,7"    |
| title            | Une chaîne de caractères titre                                                                             |         | title="foo"           |
| visible          | Booléen                                                                                                    |   yes   | visible="no"          |

Plus les [global arguments](./global_arguments)

## Sorties

| Variable       | Value                                                                                                                                                                                                                          |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| $CHAPO         | Le chapo de la caractéristique                                                                                                                                                                                                 |
| $DESCRIPTION   | La description de la caractéristique                                                                                                                                                                                           |
| $ID            | L'id de la caractéristique                                                                                                                                                                                                     |
| $IS_TRANSLATED | Vérifie si la caractéristique est traduite                                                                                                                                                                                     |
| $LOCALE        | la locale utilisée pour cette recherche                                                                                                                                                                                        |
| $POSITION      | Si aucun des paramètres product, template ou exclude_template n'est présent, $POSITION contient la position de la caractéristique. Sinon, il contient la position de la caractéristique dans le contexte du modèle de produit. |
| $POSTSCRIPTUM  | Le postscriptum de la caractéristique                                                                                                                                                                                          |
| $TITLE         | Le titre de la caractéristique                                                                                                                                                                                                 |

Plus les [global Sorties](./global_Sorties)

## Valeurs possibles de tri {#feature-order-possible-values}
[Arguments](#feature-arguments)

| Valeur croissante | Valeur décroissante | Champs triés |
|-------------------|---------------------|:-------------|
| alpha             | alpha-reverse       | title        |
| manual            | manual_reverse      | position     |
