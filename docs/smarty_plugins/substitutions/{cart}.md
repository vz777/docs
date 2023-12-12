Les substitutions de panier fournissent des données pour le panier actuel en session.
`{cart attr="une_des_suivantes"}`

## Attributs

| Nom de l'attribut                                        | Données renvoyées                                                                        |
|:---------------------------------------------------------|:------------------------------------------------------------------------------------------|
| `contains_virtual_product` OR `is_virtual`               | `true` si le panier contient au moins un produit virtuel, `false` sinon                   |
| `item_count` OR `count_item`                             | Le nombre d'articles dans le panier. Un panier avec 2 x produit X et 3 x produit Y a 5 articles             |
| `total_price_with_discount` OR `total_price`             | Montant total du panier dans la devise actuelle, sans taxes, y compris la remise          |
| `total_price_without_discount`                           | Montant total du panier dans la devise actuelle, sans taxes, sans remise                  |
| `total_taxed_price_with_discount` OR `total_taxed_price` | Montant total du panier dans la devise actuelle avec taxes, y compris la remise           |
| `total_taxed_price_without_discount`                     | Total avec remise sans taxes                                                              |
| ` weight `                                               | Le poids total du panier, en kg                                                           |
