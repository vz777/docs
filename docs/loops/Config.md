---
title: Config
---

La boucle config permet d'accéder aux variables de configuration.
`{loop type="config" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#conf-arguments}

| Argument | Description                                                               | Defaut | Exemple                      |
|----------|:--------------------------------------------------------------------------|:------:|:-----------------------------|
| exclude  | Un ou plusieurs IDs de configs.                                           |        | exclude="2", exclude="1,4,7" |
| hidden   | Booléen                                                                   |        | hidden="no"                  |
| id       | Un seul id de config.                                                     |        | id="2"                       |
| order    | Une liste de valeurs <br/> [Expected values](#conf-order-possible-values) | manual | order="id_reverse"           |
| secured  | Booléen                                                                   |        | secured="no"                 |
| variable | Nom d'une variable de config                                              |        | variable="rewriting_enable"  |

Plus les [global arguments](./global_arguments)

## Sorties

| Variable       | Valeur                                         |
|:---------------|:-----------------------------------------------|
| $CHAPO         | Le chapo de la variable de config              |
| $DESCRIPTION   | Le description de la variable de config        |
| $HIDDEN        | Vérifie si la variable de config est cachée    |
| $ID            | L'id de la variable de config                  |
| $IS_TRANSLATED | Vérifie si la variable de config est traduite  |
| $LOCALE        | la locale utilisée pour cette recherche        |
| $NAME          | Le nom de la variable de config                |
| $POSTSCRIPTUM  | Le postscriptum de la variable de config       |
| $SECURED       | Vérifie si la variable de config est sécurisée |
| $TITLE         | Le titre de la variable de config              |
| $VALUE         | La valeur de la variable de config             |

Plus les [global Sorties](./global_Sorties)

## Valeurs possibles de tri {#conf-order-possible-values}
[Arguments](#conf-arguments)

| Valeur croissante | Valeur décroissante | Champs triés |
|-------------------|---------------------|:-------------|
| id                | id_reverse          | ID           |
| name              | name_reverse        | Name         |
| title             | title_reverse       | Title        |
| value             | value_reverse       | Value        |
