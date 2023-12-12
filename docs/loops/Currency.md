---
title: Currency
---

La boucle Currency retourne la liste des devises.
`{loop type="currency" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#currency-arguments}

| Argument     | Description                                                                          | Default | Exemple                      |
|--------------|:-------------------------------------------------------------------------------------|:-------:|:-----------------------------|
| default_only | Booléen pour afficher uniquement la devise par défaut.                               |         | default_only="true"          |
| exclude      | Un ou plusieurs ids de devise.                                                       |         | exclude="2", exclude="1,4,7" |
| id           | Un ou plusieurs ids de devise.                                                       |         | id="2", id="1,4,7"           |
| lang         | Un id de langue                                                                      |         | lang="1"                     |
| order        | Une liste de valeurs voir [sorting possible values](#currency-order-possible-values) | manual  | order="id_reverse"           |

Plus les [global arguments](./global_arguments)

## Sorties

| Variable       | Value                                         |
|:---------------|:----------------------------------------------|
| $ID            | L'ID de la devise                             |
| $ISOCODE       | Le code de devise numérique ISO               |
| $IS_DEFAULT    | renvoie si la devise est la devise par défaut |
| $IS_TRANSLATED | Vérifiez si la devise est traduite            |
| $LOCALE        | La locale utilisé pour cette recherche        |
| $NAME          | le nom de la devise                           |
| $POSITION      | la position de la devise                      |
| $RATE          | le taux de change de devise                   |
| $SYMBOL        | Le symbole de devise numérique ISO            |

Plus les [global Sorties](./global_Sorties)

## Valeurs possibles de tri {#currency-order-possible-values}
[Arguments](#currency-arguments)

| Valeur croissante | Valeur décroissante | Champs triés  |
|-------------------|---------------------|:--------------|
| code              | code-reverse        | currency code |
| id                | id_reverse          | id            |
| name              | name_reverse        | name          |
