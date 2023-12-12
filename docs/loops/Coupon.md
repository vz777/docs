---
title: Coupon
---

Retourne les informations sur les coupons.
`{loop type="coupon" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#coupon-arguments}

| Argument   | Description                                                                                                                                                                        | Defaut | Exemple                                         |
|------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------:|:------------------------------------------------|
| code       | Un ou plusieurs code de coupons.                                                                                                                                                   |        | code="THECODE", code="ACODE,ANOTHERCODE,COCODE" |
| id         | Un ou plusieurs ids de coupon.                                                                                                                                                     |        | id="2", id="1,4,7"                              |
| in_use     | Si vrai, seuls les coupons actuellement utilisés dans le processus de paiement sont renvoyés. Si faux, seuls les coupons non utilisés dans le processus de paiement sont renvoyés. |        | in_use="true"                                   |
| is_enabled | Si vrai, seuls les coupons activés sont renvoyés. Si faux, seuls les coupons désactivés sont renvoyés.                                                                             |        | is_enabled="true"                               |
| order      | Une liste de valeurs voir [sorting possible values](#coupon-order-possible-values)                                                                                                 | manual | order="alpha_reverse"                           |

Ainsi que les [arguments communs](./global_arguments)

## Sorties

| Variable                         | Value                                                                      |
|:---------------------------------|:---------------------------------------------------------------------------|
| $IS_TRANSLATED                   | Vérifie si le coupon est traduit ou non                                    |
| AMOUNT                           | le montant du coupon.Peut être un pourcentage, ou un montant absolu        |
| APPLICATION_CONDITIONS           | un tableau avec la description des conditions d'utilisation                |
| CODE                             | le code de coupon                                                          |
| DAY_LEFT_BEFORE_EXPIRATION       | jours restants avant l'expiration du coupon                                |
| DESCRIPTION                      | la description du coupon                                                   |
| DISCOUNT_AMOUNT                  | Montant déduit du panier, uniquement si le coupon est actuellement utilisé |
| EXPIRATION_DATE                  | la date d'expiration du coupon                                             |
| FREE_SHIPPING_FOR_COUNTRIES_LIST | liste d'IDs de pays pour lesquels la livraison est gratuite                |
| FREE_SHIPPING_FOR_MODULES_LIST   | liste d'IDs de modules pour lesquels la livraison est gratuite             |
| ID                               | L'ID de coupon                                                             |
| IS_AVAILABLE_ON_SPECIAL_OFFERS   | vrai si l'effet du coupon s'applique aux produits actuellement en vente    |
| IS_CUMULATIVE                    | vrai si le coupon est cumulable avec d'autres coupons                      |
| IS_ENABLED                       | vrai si le coupon est activé                                               |
| IS_REMOVING_POSTAGE              | vrai si le coupon supprime les frais de livraison                          |
| LOCALE                           | la locale du coupon                                                        |
| PER_CUSTOMER_USAGE_COUNT         | vrai si le nombre d'utilisations maximum du coupon est par client          |
| SERVICE_ID                       | l'id de service du coupon                                                  |
| SHORT_DESCRIPTION                | la brève description du coupon                                             |
| TITLE                            | le titre du coupon                                                         |
| TOOLTIP                          | The coupon short description                                               |
| USAGE_LEFT                       | le nombre d'utilisations restantes du coupon                               |

Plus les [paramètres de sorties communs](./global_outputs)

## Valeurs possibles de tri {#coupon-order-possible-values}
[Arguments](#coupon-arguments)

| Valeur croissante | Valeur décroissante     | Champs triés          |
|-------------------|-------------------------|:----------------------|
| code              | code-reverse            | coupon code           |
| days-left         | days-left-reverse       | days of validity left |
| enabled           | enabled-reverse         | coupons               |
| expiration-date   | expiration-date-reverse | expiration date       |
| id                | id-reverse              | id                    |
| title             | title-reverse           | title                 |
| usages-left       | usages-left-reverse     | usage count left      |
