---
title: State
---

La boucle State répertorie les États.
`{loop type="state" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#sale-arguments}

| Argument | Description                                                                                   | Defaut | Exemple                        |
|----------|:----------------------------------------------------------------------------------------------|:------:|:-------------------------------|
| country  | Un ou plusieurs ids de pays                                                                   |        | country="10,9", country: "500" |
| exclude  | Un ou plusieurs ids de pays à exclure des résultats.                                          |        | exclude="2", exclude="1,4,7"   |
| id       | Un ou plusieurs ids d'états.                                                                  |        | id="2", id="1,4,7"             |
| lang     | Un id de langue                                                                               |        | lang="1"                       |
| order    | Une liste de valeurs see [sorting possible values](#sale-order-possible-values)               |   id   | order="alpha_reverse"          |
| visible  | Booléen pour retourner les États visibles ou non visibles (valeurs possibles : yes, no ou *). |  yes   | visible="no"                   |

Ainsi que les [arguments communs](./global_arguments) 

## Sorties

| Variable       | Value                                   |
|:---------------|:----------------------------------------|
| $COUNTRY       | le pays auquel l'État appartient        |
| $ID            | l'id de l'État                          |
| $ISOCODE       | le code ISO de l'État                   |
| $IS_TRANSLATED | vérifie si l'État est traduit           |
| $LOCALE        | la locale utilisée pour cette recherche |
| $TITLE         | le titre de l'État                      |
| $VISIBLE       | true si l'État est visible. False sinon |

Plus les [paramètres de sorties communs](./global_outputs)

## Valeurs possibles de tri {#sale-order-possible-values}
[Arguments](#sale-arguments)

| Valeur croissante | Valeur décroissante | Champs triés        |
|-------------------|---------------------|:--------------------|
| alpha             | alpha_reverse       | title               |
| id                | id_reverse          | id                  |
| random            |                     | pseudo-random order |
| visible           | visible_reverse     | visibility          |