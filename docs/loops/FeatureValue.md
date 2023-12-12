---
title: Feature value
---

La boucle Feature value répertorie les valeurs de caractéristique a texte libre
`{loop type="feature_value" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#feature-arguments}

| Argument                     | Description                                                                                                      | Default | Exemple                                           |
|------------------------------|:-----------------------------------------------------------------------------------------------------------------|:-------:|:--------------------------------------------------|
| exclude_feature_availability | Booléen pour ne retourner que les caractéristiques avec une feature availability (pas de free text).             |         | feature_availability="true"                       |
| exclude_free_text            | Booléen pour ne retourner que les caractéristiques avec une feature a texte libre (pas de feature availability). |         | exclude_free_text="1" or exclude_free_text="true" |
| feature *                    | L'ID d'une seule caractéristique.                                                                                |         | feature="2"                                       |
| feature_availability         | Un ou plusieurs ids feature availability.                                                                        |         | feature_availability="2,5"                        |
| free_text                    | Une ou plusieurs chaînes.                                                                                        |         | free_text="some text,some other text"             |
| order                        | Une liste de valeurs voir [sorting possible values](#feature-order-possible-values)                              | manual  | order="alpha_reverse"                             |
| product                      | L'ID d'un seul produit.                                                                                          |         | product="9"                                       |

Plus les [global arguments](./global_arguments)

## Sorties

| Variable         | Value                                                                                                          |
|:-----------------|:---------------------------------------------------------------------------------------------------------------|
| $CHAPO           | le chapo de la feature value                                                                                   |
| $DESCRIPTION     | la description de la feature value                                                                             |
| $FEATURE_AV_ID   | L'id de la feature av. Null si la caractéristique n'a pas de feature av. Utilisez FREE_TEXT_VALUE dans ce cas. |
| $FREE_TEXT_VALUE | 1 si cette caractéristique est un free text, 0 sinon. Obsolète en 2.4                                          |
| $ID              | l'id de la feature value                                                                                       |
| $IS_FEATURE_AV   | 1 si cette caractéristique est une feature av, 0 sinon                                                         |
| $IS_FREE_TEXT    | 1 si cette caractéristique est un free text, 0 sinon                                                           |
| $LOCALE          | la locale des des résultats retournés                                                                          |
| $POSITION        | la position de la feature value                                                                                |
| $POSTSCRIPTUM    | le postscriptum de la feature value                                                                            |
| $PRODUCT         | l'id du produit. Obsolète, veuillez utiliser $PRODUCT_ID à la place                                            |
| $PRODUCT_ID      | (2.2) l'id du produit                                                                                          |
| $TITLE           | Le titre de la feature av, ou le texte de la caractéristique pour les caractéristiques de type texte libre.    |

Plus les [global Sorties](./global_Sorties)

## Valeurs possibles de tri {#feature-order-possible-values}
[Arguments](#feature-arguments)

| Valeur croissante | Valeur décroissante | Champs triés |
|-------------------|---------------------|:-------------|
| alpha             | alpha-reverse       | title        |
| manual            | manual_reverse      | position     |
