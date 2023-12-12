---
title: Folder tree
---

La boucle Folder tree, pour obtenir une arborescence de dossiers d'un dossier donné à une profondeur donnée.
`{loop type="folder-tree" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#folder-arguments}

| Argument   | Description                                                | Default | Exemple             |
|------------|:-----------------------------------------------------------|:-------:|:--------------------|
| depth      | La profondeur maximale.                                    |         | Exemple : depth="5" |
| exclude    | Un ou plusieurs ids de catégories à exclure des résultats. |         | exclude="5,72"      |
| folder *   | A single folder id.                                        |         | folder="2"          |
| return_url | Booléen qui permet la génération d'URL.                    |   yes   | return_url="no"     |
| visible    | Afficher ou non les dossiers masquées.                     |  true   | visible="false"     |

## Sorties

| Variable     | Value                            |
|:-------------|:---------------------------------|
| $CHILD_COUNT |                                  |
| $ID          | l'id du dossier                  |
| $LEVEL       |                                  |
| $PARENT      | le dossier parent                |
| $TITLE       | le titre du dossier              |
| $URL         | l'URL du dossier                 |
| $VISIBLE     | si le dossier est visible ou non |

Plus les [paramètres de sorties communs](./global_outputs)