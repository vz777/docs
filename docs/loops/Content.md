---
title: Content
---

La boucle Content liste les contenus de votre boutique.
`{loop type="content" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#content-arguments}

| Argument            | Description                                                                                                                                                                                                                                                                                           | Default | Exemple                                    |
|---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------:|:-------------------------------------------|
| current             | Booléen, permet soit d'exclure le contenu actuel des résultats, soit de correspondre uniquement à ce contenu                                                                                                                                                                                          |         | current="yes"                              |
| current_folder      | Booléen, permet soit d'exclure les contenus du dossier actuel des résultats, soit de correspondre uniquement aux contenus du dossier actuel. Si un contenu est dans plusieurs dossiers dont l'un est actuel, il ne sera pas exclu si current_folder="false", mais sera inclus si current_folder="yes" |         | current_folder="yes"                       |
| depth               | Un int positif qui précise le nombre de niveaux de sous-dossiers à parcourir. Ne sera pas pris en compte si le paramètre du dossier n'est pas défini.                                                                                                                                                 |    1    | depth="2"                                  |
| exclude             | Un ou plusieurs ids de contenus.                                                                                                                                                                                                                                                                      |         | exclude="2", exclude="1,4,7"               |
| exclude_folder      | Un ou plusieurs ids de dossiers. Si un contenu est dans plusieurs dossiers dont l'un n'est pas exclu, il ne sera pas exclu.                                                                                                                                                                           |         | exclude_folder="2", exclude_folder="1,4,7" |
| folder              | Un ou plusieurs ids de dossiers.                                                                                                                                                                                                                                                                      |         | folder="3", folder="2,5,8"                 |
| folder_default      | Un ou plusieurs ids de dossiers permettant de récupérer tous les contenus ayant ce paramètre comme dossier par défaut.                                                                                                                                                                                |         | folder_default="2", folder_default="1,4,7" |
| id                  | Un ou plusieurs ids de contenus.                                                                                                                                                                                                                                                                      |         | id="2", id="1,4,7"                         |
| lang                | Un id de langue                                                                                                                                                                                                                                                                                       |         | lang="1"                                   |
| order               | Une liste de valeurs <br/> [Valeurs attendues](#content-order-possible-values)                                                                                                                                                                                                                        |  alpha  | order="random"                             |
| return_url          | Booléen qui permet la génération d'URL.                                                                                                                                                                                                                                                               |   yes   | return_url="no"                            |
| title               | Une chaîne de titre                                                                                                                                                                                                                                                                                   |         | title="foo"                                |
| visible             | Booléen.                                                                                                                                                                                                                                                                                              |   yes   | visible="no"                               |
| with_prev_next_info | Booléen. Si définie sur true, les arguments de sortie `$PREVIOUS` et `$NEXT` sont disponibles.                                                                                                                                                                                                        |  false  | with_prev_next_info="yes"                  |

Ainsi que les [arguments communs](./global_arguments) and [arguments de recherche](./search_arguments)

## Sorties

| Variable          | Value                                                                                                                              | If with_prev_next_info='true' | If with_prev_next_info='false' |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------|:-----------------------------:|:------------------------------:|
| $CHAPO            | le chapo du contenu                                                                                                                |               ✅               |               ✅                |
| $DEFAULT_FOLDER   | l'id du dossier par défaut pour le contenu actuel                                                                                  |               ✅               |               ✅                |
| $DESCRIPTION      | la description du contenu                                                                                                          |               ✅               |               ✅                |
| $HAS_NEXT         | true si un contenu existe après celui-ci dans le dossier actuel, en suivant les positions des contenus.                            |               ✅               |               🚫               |
| $HAS_PREVIOUS     | true si un contenu existe avant celui-ci dans le dossier actuel, en suivant les positions des contenus.                            |               ✅               |               🚫               |
| $ID               | l'id du contenu                                                                                                                    |               ✅               |               ✅                |
| $IS_TRANSLATED    | vérifie si le contenu est traduit                                                                                                  |               ✅               |               ✅                |
| $LOCALE           | la locale utilisée pour cette recherche                                                                                            |               ✅               |               ✅                |
| $META_DESCRIPTION | la meta description du contenu                                                                                                     |               ✅               |               ✅                |
| $META_KEYWORDS    | la meta keywords du contenu                                                                                                        |               ✅               |               ✅                |
| $META_TITLE       | la meta title du contenu                                                                                                           |               ✅               |               ✅                |
| $NEXT             | L'id du contenu après celui-ci dans le dossier actuel, en suivant les positions des contenus, ou null s'il n'existe aucun contenu. |               ✅               |               🚫               |
| $POSITION         | la position du contenu                                                                                                             |               ✅               |               ✅                |
| $POSTSCRIPTUM     | le postscriptum du contenu                                                                                                         |               ✅               |               ✅                |
| $PREVIOUS         | L'id du contenu avant celui-ci dans le dossier actuel, en suivant les positions des contenus, ou null s'il n'existe aucun contenu. |               ✅               |               🚫               |
| $TITLE            | le titre du contenu                                                                                                                |               ✅               |               ✅                |
| $URL              | l'URL du contenu                                                                                                                   |               ✅               |               ✅                |

Plus les [paramètres de sorties communs](./global_outputs)

## Valeurs possibles de tri {#content-order-possible-values}
[Arguments](#content-arguments)

| Valeur croissante | Valeur décroissante | Champs triés                                                               |
|-------------------|---------------------|:---------------------------------------------------------------------------|
| alpha             | alpha_reverse       | title                                                                      |
| created           | created_reverse     | date of content creation                                                   |
| given_id          |                     | eturn the same order received in `id` argument which therefore must be set |
| id                | id_reverse          | ID                                                                         |
| manual            | manual_reverse      | position, considering a given folder. `folder` argument must be set        |
| position          | position_reverse    | position, without considering a parent folder                              |
| random            |                     |                                                                            |
| updated           | updated_reverse     | date of content update                                                     |
| visible           | visible_reverse     | online/offline items firts                                                 |
