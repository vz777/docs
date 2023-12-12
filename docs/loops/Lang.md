---
title: Lang
---

Boucle Lang.
`{loop type="lang" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#lang-arguments}

| Argument        | Description                                                                      | Default  | Exemple                          |
|-----------------|:---------------------------------------------------------------------------------|:--------:|:---------------------------------|
| code            | Un ou plusieurs code de langue.                                                  |          | code="fr", code="fr,en"          |
| default_only    | Retourne uniquement la langue par défaut.                                        |  false   | default_only="true"              |
| exclude         | Un ou plusieurs ids de langue.                                                   |          | exclude="2", exclude="1,3"       |
| exclude_default | Exclut la langue par défaut des résultats.                                       |  false   | exclude_default="true"           |
| id              | Un ou plusieurs code de langue.                                                  |          | id="2"                           |
| locale          | Une ou plusieurs locale.                                                         |          | code="fr_FR", code="fr_FR,fr_CA" |
| order           | Une liste de valeurs voir [sorting possible values](#lang-order-possible-values) | position | order="alpha_reverse"            |

Ainsi que les [arguments communs](./global_arguments)

## Sorties

| Variable             | Value                                                                               |
|:---------------------|:------------------------------------------------------------------------------------|
| $CODE                | le code de la langue, Exemple : fr                                                  |
| $DATE_FORMAT         | format de date de la langue                                                         |
| $DECIMAL_COUNT       | le nombre de chiffres après le séparateur décimal                                   |
| $DECIMAL_SEPARATOR   | le séparateur décimal de la langue, tel que , ou .                                  |
| $ID                  | l'id de la langue                                                                   |
| $IS_DEFAULT          | vérifie si le résultat actuel est la langue par défaut                              |
| $LOCALE              | la locale, Exemple : fr_FR                                                          |
| $POSITION            | la position de la langue                                                            |
| $THOUSANDS_SEPARATOR | le séparateur de milliers de la langue                                              |
| $TIME_FORMAT         | format de l'heure de la langue                                                      |
| $TITLE               | le titre de la langue                                                               |
| $URL                 | l'URL de la langue, uniquement si une URL spécifique est définie pour chaque langue |

Plus les [paramètres de sorties communs](./global_outputs)

## Valeurs possibles de tri {#lang-order-possible-values}
[Arguments](#lang-arguments)

| Valeur croissante | Valeur décroissante | Champs triés |
|-------------------|---------------------|:-------------|
| alpha             | alpha_reverse       | title        |
| id                | id_reverse          | Id           |
| position          | position_reverse    | position     |
