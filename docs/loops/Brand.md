---
title: Brand
---

La boucle Brand répertorie les marques définies dans votre boutique.
`{loop type="brand" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#brand-arguments}

| Argument            | Description                                                                                                   | Defaut | Exemple                   |
|---------------------|:--------------------------------------------------------------------------------------------------------------|:------:|:--------------------------|
| current             | Booléen qui permet soit d'exclure la marque actuelle des résultats, soit de ne correspondre qu'à cette marque |        | current="yes"             |
| id                  | Un id de marque unique ou une liste d'ids de marques.                                                         |        | id="2", id="1,4,7"        |
| order               | Une liste de valeurs <br/> [Expected values](#brand-order-possible-values)                                    | manual | order="random"            |
| product             | L'ID d'un seul produit.                                                                                       |        | product="2"               |
| return_url          | Booléen qui permet la génération des URL.                                                                     |  yes   | return_url="no"           |
| title               | Une chaîne de caractères représentant le titre de la marque                                                   |        | title="foo"               |
| visible             | Booléen.                                                                                                      |  yes   | visible="no"              |
| with_prev_next_info | Booléen. Si elle est définie sur true, les arguments de sortie $PREVIOUS et $NEXT sont disponibles.           | false  | with_prev_next_info="yes" |

Plus les [global arguments](./global_arguments) and [search arguments](./search_arguments)

## Sorties

| Variable          | Valeur                                                                                            | SI with_prev_next_info='true' | Si with_prev_next_info='false' |
|:------------------|:--------------------------------------------------------------------------------------------------|:-----------------------------:|:------------------------------:|
| $CHAPO            | le chapo de la marque                                                                             |               ✅               |               ✅                |
| $DESCRIPTION      | la description de la marque                                                                       |               ✅               |               ✅                |
| $HAS_NEXT         | vrai si une marque existe après celle-ci, en suivant les positions des marques.                   |               ✅               |               🚫               |
| $HAS_PREVIOUS     | vrai si une marque existe avant celle-ci en suivant les positions des marques                     |               ✅               |               🚫               |
| $ID               | id de la marque                                                                                   |               ✅               |               ✅                |
| $IS_TRANSLATED    | vérifie si la marque est traduite                                                                 |               ✅               |               ✅                |
| $LOCALE           | la locale utilisée pour cette recherche                                                           |               ✅               |               ✅                |
| $LOGO_IMAGE_ID    | ID de l'image du logo de la marque, parmi les images de la marque                                 |               ✅               |               ✅                |
| $META_DESCRIPTION | la meta-description de la marque                                                                  |               ✅               |               ✅                |
| $META_KEYWORDS    | la meta keywords de la marque                                                                     |               ✅               |               ✅                |
| $META_TITLE       | la meta title de la marque                                                                        |               ✅               |               ✅                |
| $NEXT             | l'ID de la marque suivante, en suivant les positions des marques, ou null s'il n'y en a aucune    |               ✅               |               🚫               |
| $POSITION         | la position de la marque                                                                          |               ✅               |               ✅                |
| $POSTSCRIPTUM     | le postscriptum de la marque                                                                      |               ✅               |               ✅                |
| $PREVIOUS         | L'ID de la marque précédente, en suivant les positions des marques, ou null s'il n'y en a aucune. |               ✅               |               🚫               |
| $TITLE            | le title de la marque                                                                             |               ✅               |               ✅                |
| $URL              | l'URL de la marque                                                                                |               ✅               |               ✅                |
| $VISIBLE          | vrai si la marque est visible, sinon faux                                                         |               ✅               |               ✅                |

Plus les [global Sorties](./global_Sorties)

## Valeurs possibles de tri {#brand-order-possible-values}
[Arguments](#brand-arguments)

| Valeur croissante | Valeur décroissante | Champs triés                  |
|-------------------|---------------------|:------------------------------|
| alpha             | alpha-reverse       | title                         |
| created           | created-reverse     | date of brand creation        |
| id                | id-reverse          | ID order                      |
| manual            | manual-reverse      | order position                |
| random            |                     |                               |
| updated           | updated-reverse     | order on date of brand update |
