---
title: Tax rule
---

Boucle affichant les règles de taxe créées.
`{loop type="tax-rule" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#tax-arguments}

| Argument | Description                                                                    | Defaut | Exemple                    |
|----------|:-------------------------------------------------------------------------------|:------:|:---------------------------|
| exclude  | Un ou plusieurs ids règles de taxe à exclure                                   |        | exclude="2", exclude="1,4" |
| id       | Un ou plusieurs ids de règles de taxe                                          |        | id="2", id="1,4"           |
| order    | Une liste de valeurs see [sorting possible values](#tax-order-possible-values) | alpha  | order="random"             |

Ainsi que les [arguments communs](./global_arguments) 

## Sorties

| Variable       | Value                                   |
|:---------------|:----------------------------------------|
| $DESCRIPTION   | Description de la taxe                  |
| $ID            | l'id de la taxe                         |
| $IS_DEFAULT    | vérifie si la taxe est celle par défaut |
| $IS_TRANSLATED | vérifie si la taxe est traduite         |
| $LOCALE        | la locale utilisée pour cette recherche |
| $TITLE         | Titre de la taxe                        |

Plus les [paramètres de sorties communs](./global_outputs)

## Valeurs possibles de tri {#tax-order-possible-values}
[Arguments](#tax-arguments)

| Valeur croissante | Valeur décroissante | Champs triés |
|-------------------|---------------------|:-------------|
| alpha             | alpha_reverse       | title        |
| id                | id_reverse          | id           |