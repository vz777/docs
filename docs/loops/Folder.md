---
title: Folder
---

La boucle Folder répertorie les dossiers de votre boutique.
`{loop type="folder" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#folder-arguments}

| Argument              | Description                                                                                                                                                                      |              Defaut               | Exemple                      |
|-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------:|:-----------------------------|
| content               | L'ID d'un seul contenu.                                                                                                                                                          |                                   | content="3"                  |
| content_count_visible | This parameter controls how content is counted. If 'yes' (the default) only visible contents are counted, 'no': only hidden contents are counted, '*': all contents are counted. |                yes                | content_count_visible="*"    |
| current               | A boolean value which allows either to exclude current folder from results either to match only this folder                                                                      |                                   | current="yes"                |
| exclude               | Un ou plusieurs ids de dossier.                                                                                                                                                  |                                   | exclude="2", exclude="1,4,7" |
| id                    | Un ou plusieurs ids de dossier.                                                                                                                                                  |                                   | id="2", id="1,4,7"           |
| lang                  | Un id de langue                                                                                                                                                                  |                                   | lang="1"                     |
| need_content_count    | Booléen. Si défini sur true, la boucle renverra le nombre de contenus dans chaque dossier et ses sous-dossiers                                                                   | true (pour la rétrocompatibilité) | need_content_count="yes"     |
| need_count_child      | Booléen. Si défini sur true, la boucle renverra le nombre de sous-dossiers de chaque dossier                                                                                     | true (pour la rétrocompatibilité) | need_count_child="yes"       |
| not_empty             | (**not implemented yet**) Booléen. Si vrai, seuls les dossiers contenant au moins un contenu visible (soit directement, soit via un sous-dossier) sont renvoyés                  |                no                 | not_empty="yes"              |
| order                 | Une liste de valeurs see [sorting possible values](#folder-order-possible-values)                                                                                                |              manual               | order="random"               |
| parent                | L'ID d'un seul dossier.                                                                                                                                                          |                                   | folder="3"                   |
| return_url            | Booléen qui permet la génération d'URL.                                                                                                                                          |                yes                | return_url="no"              |
| visible               | Booléen.                                                                                                                                                                         |                yes                | visible="no"                 |
| with_prev_next_info   | Booléen. Si définie sur true, les arguments de sortie `$PREVIOUS` et `$NEXT` sont disponibles.                                                                                   |               false               | with_prev_next_info="yes"    |

Plus les [global arguments](./global_arguments) and [search arguments](./search_arguments)

## Sorties

| Variable          | Value                                                                                                                                 | If with_prev_next_info='true' | If with_prev_next_info='false' | other                                                                                         |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------:|:------------------------------:|-----------------------------------------------------------------------------------------------|
| $CHAPO            | le chapo du dossier                                                                                                                   |               ✅               |               ✅                |                                                                                               |
| $CHILD_COUNT      | le nombre de sous-dossiers contenus dans le dossier actuel.                                                                           |               ✅               |               ✅                | Uniquement disponible si le paramètre <strong>need_count_child</strong> est défini sur true   |
| $CONTENT_COUNT    | le nombre de contenus visibles pour ce dossier.                                                                                       |               ✅               |               ✅                | Uniquement disponible si le paramètre <strong>need_content_count</strong> est défini sur true |
| $CREATE_DATE      | la date de création du dossier                                                                                                        |               ✅               |               ✅                |                                                                                               |
| $DESCRIPTION      | la description po du dossier                                                                                                          |               ✅               |               ✅                |                                                                                               |
| $HAS_NEXT         | vrai si un dossier existe après celui-ci dans le dossier parent actuel, suivant les positions des dossiers.                           |               ✅               |               🚫               |                                                                                               |
| $HAS_PREVIOUS     | vrai si un dossier existe avant celui-ci dans le dossier parent actuel, suivant les positions des dossiers.                           |               ✅               |               🚫               |                                                                                               |
| $ID               | l'id du dossier                                                                                                                       |               ✅               |               ✅                |                                                                                               |
| $IS_TRANSLATED    | vérifie si le dossier est traduit                                                                                                     |               ✅               |               ✅                |                                                                                               |
| $LOCALE           | la locale utilisée pour cette recherche                                                                                               |               ✅               |               ✅                |                                                                                               |
| $META_DESCRIPTION | la meta description du dossier                                                                                                        |               ✅               |               ✅                |                                                                                               |
| $META_KEYWORDS    | la meta keywords du dossier                                                                                                           |               ✅               |               ✅                |                                                                                               |
| $META_TITLE       | la meta title du dossier                                                                                                              |               ✅               |               ✅                |                                                                                               |
| $NEXT             | l'identifiant du dossier précédent dans le dossier parent actuel, suivant les positions des dossiers, ou null s'il n'en existe aucun. |               ✅               |               🚫               |                                                                                               |
| $PARENT           | le dossier parent                                                                                                                     |               ✅               |               ✅                |                                                                                               |
| $POSITION         | la position du dossier                                                                                                                |               ✅               |               ✅                |                                                                                               |
| $POSTSCRIPTUM     | le postscriptum du dossier                                                                                                            |               ✅               |               ✅                |                                                                                               |
| $PREVIOUS         | l'identifiant du dossier précédent dans le dossier parent actuel, suivant les positions des dossiers, ou null s'il n'en existe aucun. |               ✅               |               🚫               |                                                                                               |
| $TITLE            | le titre du dossier                                                                                                                   |               ✅               |               ✅                |                                                                                               |
| $UPDATE_DATE      | la date de mise à jour du dossier                                                                                                     |               ✅               |               ✅                |                                                                                               |
| $URL              | l'URL du dossier                                                                                                                      |               ✅               |               ✅                |                                                                                               |
| $VERSION          | la version du dossier                                                                                                                 |               ✅               |               ✅                |                                                                                               |
| $VERSION_AUTHOR   | l'auteur de la version du dossier                                                                                                     |               ✅               |               ✅                |                                                                                               |
| $VERSION_DATE     | la date de la version du dossier                                                                                                      |               ✅               |               ✅                |                                                                                               |
| $VISIBLE          | la visibilité du dossier                                                                                                              |               ✅               |               ✅                |                                                                                               |

Plus les [global Sorties](./global_Sorties)

## Valeurs possibles de tri {#folder-order-possible-values}
[Arguments](#folder-arguments)

| Valeur croissante | Valeur décroissante | Champs triés             |
|-------------------|---------------------|:-------------------------|
| alpha             | alpha_reverse       | title                    |
| created           | created_reverse     | date of content creation |
| id                | id_reverse          | id                       |
| manual            | manual_reverse      | position                 |
| random            |                     | folders in random order  |
| updated           | updated_reverse     | date of content update   |
| visible           | visible_reverse     | items                    |
