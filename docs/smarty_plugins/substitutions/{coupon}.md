Retourne des informations sur les coupons définis lors du processus d'achat.
`{coupon attr="l'une_des_options_suivantes"}`

## Attributs

| Nom de l'attribut    | Données renvoyées                                                                                                  |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------|
| ` coupon_count `     | Nombre de coupons actuellement en cours d'utilisation.                                                             |
| ` coupon_list `      | Un tableau contenant les codes des coupons actuellement en cours d'utilisation.                                    |
| ` has_coupons `      | `true` si des coupons sont actuellement en cours d'utilisation, `false` sinon                                      |
| ` is_delivery_free ` | `true` si au moins l'un des coupons actuellement en cours d'utilisation offre la livraison gratuite, `false` sinon |