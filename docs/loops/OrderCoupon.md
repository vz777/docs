---
title: Order coupon
---

Récupère les informations sur les coupons de commande pour une commande donnée
`{loop type="order_coupon" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#order-arguments}

| Argument | Description        | Default | Exemple   |
|----------|:-------------------|:-------:|:----------|
| order *  | A single order id. |         | order="2" |

Plus les [global arguments](./global_arguments)

## Sorties

| Variable                          | Value                                                                                                                  |
|:----------------------------------|:-----------------------------------------------------------------------------------------------------------------------|
| $CODE                             | le code du coupon                                                                                                      |
| $DAY_LEFT_BEFORE_EXPIRATION       | jours restants avant l'expiration du coupon                                                                            |
| $DESCRIPTION                      | la description du coupon                                                                                               |
| $EXPIRATION_DATE                  | la date d'expiration du coupon                                                                                         |
| $FREE_SHIPPING_FOR_COUNTRIES_LIST | liste séparée par des virgules des identifiants de pays pour lesquels la livraison gratuite s'applique                 |
| $FREE_SHIPPING_FOR_MODULES_LIST   | liste séparée par des virgules des identifiants de modules d'expédition pour lesquels la livraison est gratuite        |
| $ID                               | l'id du coupon                                                                                                         |
| $IS_AVAILABLE_ON_SPECIAL_OFFERS   | vrai si le coupon s'applique aux produits remisés                                                                      |
| $IS_CUMULATIVE                    | vrai si le coupon peut être cumulé                                                                                     |
| $IS_REMOVING_POSTAGE              | vrai si le coupon offre la livraison gratuite                                                                          |
| $IS_USAGE_CANCELED                | vrai si l'utilisation de ce coupon a été annulée (probablement lorsque la commande associée a été annulée), faux sinon |
| $SHORT_DESCRIPTION                | la short description du coupon                                                                                         |
| $TITLE                            | le titre du coupon                                                                                                     |

Plus les [global Sorties](./global_Sorties)
