---
title: Sale
---

La boucle Sale offre un accès aux opérations de promotion définies dans votre boutique.
`{loop type="sale" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#sale-arguments}

| Argument | Description                                                                                                                    |             Defaut             | Exemple            |
|----------|:-------------------------------------------------------------------------------------------------------------------------------|:------------------------------:|:-------------------|
| active   | Booléen, pour obtenir uniquement les promotions actives (1) ou inactives (0) ou les deux (*)                                   |               1                | active="1"         |
| currency | Un identifiant de devise, pour obtenir la remise définie pour cette devise                                                     | Devise actuelle de la boutique | currency="1"       |
| exclude  | Un ou plusieurs ids de promo à exclure des résultats.                                                                          |                                | id="2", id="1,4,7" |
| id       | Un ou plusieurs ids de promo                                                                                                   |                                | id="2", id="1,4,7" |
| order    | Une liste de valeurs see [sorting possible values](#sale-order-possible-values)                                                |             manual             | order=" random"    |
| product  | Un ou plusieurs ids de produits. Si spécifié, la boucle renverra les promotions dans lesquelles ces produits sont sélectionnés |                                | id="2", id="1,4,7" |

Ainsi que les [arguments communs](./global_arguments) and [arguments de recherche](./search_arguments)

## Sorties

| Variable               | Value                                                                                                      |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------|
| $ACTIVE                | vrai si la promotion est active, faux sinon                                                                |
| $CHAPO                 | le chapo de la promo                                                                                       |
| $DESCRIPTION           | la description de la promo                                                                                 |
| $DISPLAY_INITIAL_PRICE | vrai si le prix initial des produits doit être affiché, faux sinon                                         |
| $END_DATE              | la date de fin de la promo                                                                                 |
| $HAS_END_DATE          | vrai si la promotion a une date de fin, faux sinon                                                         |
| $HAS_START_DATE        | vrai si la promotion a une date de début, faux sinon                                                       |
| $ID                    | l'id de la promo                                                                                           |
| $IS_TRANSLATED         | vérifie si la promotion est traduite                                                                       |
| $LOCALE                | la locale (par exemple fr_FR) des données retournées                                                       |
| $POSTSCTIPTUM          | le postscriptum de la promo                                                                                |
| $PRICE_OFFSET_SYMBOL   | le symbole d'unité de la réduction de prix, % pour un pourcentage, le symbole de la devise pour un montant |
| $PRICE_OFFSET_TYPE     | le type de réduction de prix, P pour un pourcentage, A pour un montant                                     |
| $PRICE_OFFSET_VALUE    | la valeur de la réduction, comme un pourcentage (0-100) ou un montant.                                     |
| $SALE_LABEL            | l'étiquette publicitaire de la promotion                                                                   |
| $START_DATE            | la date de début de la promo                                                                               |
| $TITLE                 | le titre de la promo                                                                                       |

Plus les [paramètres de sorties communs](./global_outputs)

## Valeurs possibles de tri {#sale-order-possible-values}
[Arguments](#sale-arguments)

| Valeur croissante | Valeur décroissante | Champs triés          |
|-------------------|---------------------|:----------------------|
| active            | active-reverse      | active                |
| alpha             | alpha-reverse       | title                 |
| created           | created-reverse     | date of sale creation |
| end-date          | end-date-reverse    | end date              |
| id                | id-reverse          | id                    |
| label             | label-reverse       | label                 |
| start-date        | start-date          | start date            |
| updated           | updated-reverse     | date of sale update   |