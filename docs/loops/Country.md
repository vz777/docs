---
title: Country
---

La boucle Country liste les pays.
`{loop type="country" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#country-arguments}

| Argument     | Description                                                                                  | Defaut | Exemple                                   |
|--------------|:---------------------------------------------------------------------------------------------|:------:|:------------------------------------------|
| area         | Un ou plusieurs IDs de zone.                                                                 |        | area="10,9", area: "500"                  |
| exclude      | Un ou plusieurs IDs de pays à exclure.                                                       |        | exclude="2", exclude="1,4,7"              |
| exclude_area | Un ou plusieurs IDs de zone. Les pays appartenant à ces zones sont exclus des résultats.     |        | exclude_area="7", exclude_area="3,102,14" |
| has_states   | Booléen pour retourner les pays qui ont des États ou non (valeurs possibles : yes, no or *). |   *    | has_states="no"                           |
| id           | Un ou plusieurs IDs de pays                                                                  |        | id="2", id="1,4,7"                        |
| lang         | Un id de langue                                                                              |        | lang="1"                                  |
| order        | Une liste de valeurs voir [sorting possible values](#country-order-possible-values)          |   id   | order="alpha_reverse"                     |
| visible      | Booléen pour retourner les pays visibles ou non visibles (valeurs possibles : yes, no or *). |  yes   | visible="no"                              |
| with_area    | Booléen pour retourner soit les pays dont la zone est définie, soit tous les autres.         |        | with_area="true"                          |

Ainsi que les [arguments communs](./global_arguments)

## Sorties

| Variable         | Value                                                                                               |
|:-----------------|:----------------------------------------------------------------------------------------------------|
| $AREA            | la zone à laquelle le pays appartient                                                               |
| $CHAPO           | le chapo du pays                                                                                    |
| $DESCRIPTION     | la description du pays                                                                              |
| $HAS_STATES      | 1 if the country has states, 0 otherwise                                                            |
| $ID              | l'id du pays                                                                                        |
| $ISOALPHA2       | le code pays ISO 2 caractères                                                                       |
| $ISOALPHA3       | le code pays ISO 3 caractères                                                                       |
| $ISOCODE         | le code pays numérique ISO                                                                          |
| $IS_DEFAULT      | 1 si le pays est celui par défaut, 0 sinon                                                          |
| $IS_SHOP_COUNTRY | 1 si le pays est le pays de la boutique, 0 sinon                                                    |
| $IS_TRANSLATED   | vérifie si le pays est traduit                                                                      |
| $LOCALE          | la locale utilisée pour cette recherche                                                             |
| $NEED_ZIP_CODE   | 1 si le pays a besoin d'un code postal pour l'adresse, 0 sinon                                      |
| $POSTSCRIPTUM    | le postscriptum du pays                                                                             |
| $TITLE           | le titre du pays                                                                                    |
| $VISIBLE         | true si le pays est visible. False sinon                                                            |
| $ZIP_CODE_FORMAT | Le format du code postal pour ce pays où N est un chiffre, L une lettre et C le code ISO de l'État. |

Plus les [paramètres de sorties communs](./global_outputs)

## Valeurs possibles de tri {#country-order-possible-values}
[Arguments](#country-arguments)

| Valeur croissante | Valeur décroissante | Champs triés                     |
|-------------------|---------------------|:---------------------------------|
| alpha             | alpha-reverse       | title                            |
| id                | id_reverse          | id                               |
| random            |                     | countries in pseudo-random order |
| visible           | visible_reverse     | visibility                       |
