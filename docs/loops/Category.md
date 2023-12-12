---
title: Category
---

La boucle Catégorie liste les catégories de votre boutique.
`{loop type="category" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#category-arguments}

| Argument            | Description                                                                                                                                                                      | Default | Exemple                      |
|---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------:|:-----------------------------|
| content             | Un ou plusieurs ID de contenu. Lorsque ce paramètre est défini, la boucle renvoie les catégories liées aux ID de contenus spécifiés.                                             |         | content="3"                  |
| current             | Booléen permet soit d'exclure la catégorie actuelle des résultats, soit de ne correspondre qu'à cette catégorie.                                                                 |         | current="yes"                |
| exclude             | Un ou plusieurs ID de catégorie.                                                                                                                                                 |         | exclude="2", exclude="1,4,7" |
| exclude_parent      | Un ou plusieurs IDs de catégories parentes à exclure.                                                                                                                            |         | exclude_parent="12,22"       |
| exclude_product     | Un ou plusieurs IDs de produits à exclure.                                                                                                                                       |         | exclude_product="3"          |
| id                  | Un ou plusieurs IDs de catégories.                                                                                                                                               |         | id="2", id="1,4,7"           |
| lang                | Un id de langue                                                                                                                                                                  |         | lang="1"                     |
| need_count_child    | Booléen. Si défini sur true, compte le nombre de sous-catégories contenues dans la catégorie actuelle.                                                                           |  false  | need_count_child="yes"       |
| need_product_count  | Booléen. Si définie sur true, compte le nombre de produits contenus dans la catégorie actuelle.                                                                                  |  false  | need_product_count="yes"     |
| not_empty           | (**not implemented yet**) Booléen. Si défini sur true, seules les catégories qui contiennent au moins un produit visible (directement ou via une sous-catégorie) sont renvoyées. |   no    | not_empty="yes"              |
| order               | Une liste de valeurs <br/> [Expected values](#category-order-possible-values)                                                                                                    | manual  | order="random"               |
| parent              | Un ou plusieurs IDs de catégories parentes.                                                                                                                                      |         | parent="3", parent="2,5,8"   |
| product             | Un ou plusieurs IDs de produits.                                                                                                                                                 |         | product="3"                  |
| return_url          | Booléen qui permet la génération des URL.                                                                                                                                        |   yes   | return_url="no"              |
| visible             | Booléen                                                                                                                                                                          |   yes   | visible="no"                 |
| with_prev_next_info | Booléen. Si définie sur true, les arguments de sortie $PREVIOUS et $NEXT sont disponibles.                                                                                       |  false  | with_prev_next_info="yes"    |

Plus les [global arguments](./global_arguments) and [search arguments](./search_arguments)

## Sorties

| Variable          | Value                                                                                                                                                                                                                                  |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| $ID               | l'id de la catégorie                                                                                                                                                                                                                   |
| $TITLE            | le titre de la catégorie                                                                                                                                                                                                               |
| $CHAPO            | le chapo de la catégorie                                                                                                                                                                                                               |
| $CREATE_DATE      | la date de création de la catégorie                                                                                                                                                                                                    |
| $DESCRIPTION      | la description de la catégorie                                                                                                                                                                                                         |
| $IS_TRANSLATED    | vérifie si la catégorie est traduite ou not                                                                                                                                                                                            |
| $LOCALE           | la locale utilisée pour cette boucle                                                                                                                                                                                                   |
| $META_DESCRIPTION | la meta description de la catégorie                                                                                                                                                                                                    |
| $META_KEYWORD     | la meta keyword de la catégorie                                                                                                                                                                                                        |
| $META_TITLE       | la meta title de la catégorie                                                                                                                                                                                                          |
| $PARENT           | la catégorie parente                                                                                                                                                                                                                   |
| $POSITION         | la position de la catégorie                                                                                                                                                                                                            |
| $POSTSCRIPTUM     | le post-scriptum de la catégorie                                                                                                                                                                                                       |
| $TEMPLATE         | l'id du template associé à cette catégorie                                                                                                                                                                                             |
| $UPDATE_DATE      | la date de mise à jour de la catégorie                                                                                                                                                                                                 |
| $URL              | l'URL de la catégorie                                                                                                                                                                                                                  |
| $VERSION          | la version de la catégorie                                                                                                                                                                                                             |
| $VERSION_AUTHOR   | l'auteur de la version de la catégorie                                                                                                                                                                                                 |
| $VERSION_DATE     | la date de la version de la catégorie                                                                                                                                                                                                  |
| $VISIBLE          | Renvoi si la catégorie est visible ou non                                                                                                                                                                                              |
| $PRODUCT_COUNT    | Le nombre de produits visibles contenus par la catégorie actuelle.  <br/> ** Uniquement disponible si "need_product_child" est défini sur true **                                                                                      |
| $CHILD_COUNT      | Le nombre de sous-catégories contenues par la catégorie actuelle.<br/> ** Uniquement disponible si "need_count_child" est défini sur true **                                                                                           |
| $HAS_NEXT         | true si une catégorie existe après celle-ci dans la catégorie parente actuelle, suivant les positions des catégories. <br/> ** Uniquement disponible si "with_prev_next_info" est défini sur true **                                   |
| $NEXT             | L'identifiant de la catégorie après celle-ci dans la catégorie parente actuelle, suivant les positions des catégories, ou null s'il n'en existe aucune.<br/> ** Uniquement disponible si "with_prev_next_info" est défini sur true **  |
| $HAS_PREVIOUS     | true si une catégorie existe avant celle-ci dans la catégorie parente actuelle, suivant les positions des catégories. <br/> ** Uniquement disponible si "with_prev_next_info" est défini sur true **                                   |
| $PREVIOUS         | L'identifiant de la catégorie avant celle-ci dans la catégorie parente actuelle, suivant les positions des catégories, ou null s'il n'en existe aucune. <br/> ** Uniquement disponible si "with_prev_next_info" est défini sur true ** |

Plus les [global Sorties](./global_Sorties)

## Valeurs possibles de tri {#category-order-possible-values}
[Arguments](#category-arguments)

| Valeur croissante | Valeur décroissante | Champs triés             |
|-------------------|---------------------|:-------------------------|
| alpha             | alpha_reverse       | title                    |
| created           | created_reverse     | date of content creation |
| id                | id_reverse          | Order ID                 |
| manual            | manual_reverse      | position                 |
| random            |                     |                          |
| updated           | updated_reverse     | date of content update   |
| visible           | visible_reverse     | online items             |
