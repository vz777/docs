---
title: Document
---

La boucle Document traite, met en cache et affiche les documents associés aux produits, catégories, contenus et dossiers.
`{loop type="document" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#document-arguments}

| Argument    | Description                                                                                                | Default | Exemple               |
|-------------|:-----------------------------------------------------------------------------------------------------------|:-------:|:----------------------|
| brand **    | Un id de marque. La boucle retournera les documents de cette marque.                                       |   yes   | current="false"       |
| category ** | Un id de catégorie. La boucle retournera les documents de cette catégorie.                                 |         | category="2"          |
| content **  | Un id de contenu. La boucle retournera les documents de ce contenu.                                        |         | content="2"           |
| exclude     | Un ou plusieurs IDs de documents à exclure, séparés par des virgules .                                     |         | exclude="456,123"     |
| folder **   | Un id de dossier. La boucle retournera les documents de ce dossier.                                        |         | folder="2"            |
| id          | Un ou plusieurs IDs de document                                                                            |         | id="2", id="1,4,7"    |
| lang        | Un id de langue, pour spécifier la langue dans laquelle les informations sur le document seront retournées |         |                       |
| order       | Une liste de valeurs voir [sorting possible values](#document-order-possible-values)                       | manual  | order="alpha_reverse" |
| product **  | Un id de produit. La boucle retournera les documents de ce produit.                                        |         | product="2"           |
| source **   | voir [Valeurs attendues](#document-source-expected-values)                                                 |         | source="category"     |
| source_id   | L'id de l'objet fourni dans le paramètre "source". Seulement considéré si l'argument "source" est présent  |         | source_id="2"         |
| visible     | Booléen.                                                                                                   |   yes   | visible="no"          |

Ainsi que les [arguments communs](./global_arguments)

## Sorties

| Variable                | Value                                                                                     |
|:------------------------|:------------------------------------------------------------------------------------------|
| $CHAPO                  | le chapo du document                                                                      |
| $DESCRIPTION            | la description du document                                                                |
| $DOCUMENT_PATH          | Le chemin absolu du fichier de document généré                                            |
| $DOCUMENT_URL           | L'URL absolue du document généré                                                          |
| $ID                     | l'id du document                                                                          |
| $LOCALE                 | la locale                                                                                 |
| $OBJECT_ID              | The object ID                                                                             |
| $OBJECT_TYPE            | The object type (e.g., produc, category, etc. see 'source' parameter for possible values) |
| $ORIGINAL_DOCUMENT_PATH | Le chemin absolu du fichier de document original                                          |
| $POSITION               | La position de ce document dans la liste des documents de l'objet                         |
| $POSTSCRIPTUM           | le postscriptum du document                                                               |
| $TITLE                  | le titre du document                                                                      |
| $VISIBLE                | vrai si le document est visible. Faux sinon                                               |

Plus les [paramètres de sorties communs](./global_outputs)

## Valeurs possibles de tri {#document-order-possible-values}
[Arguments](#document-arguments)

| Valeur croissante | Valeur décroissante | Champs triés        |
|-------------------|---------------------|:--------------------|
| alpha             | alpha-reverse       | title               |
| manual            | manual-reverse      | position            |
| random            |                     | pseudo-random order |

## Souce Valeurs attendues {#document-source-expected-values}
[Arguments](#document-arguments)

| value    |
|----------|
| brand    |
| category |
| content  |
| folder   |
| product  |


