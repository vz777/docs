---
title: Order product
---

La boucle de produits de commande affiche des informations sur les produits des commandes.
`{loop type="order_product" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#order-arguments}

| Argument | Description                                | Default | Exemple            |
|----------|:-------------------------------------------|:-------:|:-------------------|
| id       | Un ou plusieurs ids de produits commandés. |         | id="2", id="1,4,7" |
| order *  | L'ID d'une seule commande                  |         | order="2"          |
| virtual  | Booléen.                                   |         | new="yes"          |

Ainsi que les [arguments communs](./global_arguments)

## Sorties

| Variable                   | Value                                                                    |
|:---------------------------|:-------------------------------------------------------------------------|
| $CART_ITEM_ID              | L'ID de Cart Item associé à ce produit de commande                       |
| $CHAPO                     | le chapo du produit                                                      |
| $DESCRIPTION               | la description du produit commandé                                       |
| $EAN_CODE                  | le code EAN du produit commandé                                          |
| $ID                        | l'id du produit commandé                                                 |
| $PRODUCT_ID                | le product id du produit                                                 |
| $PARENT                    | le produit parent dans le panier, s'il y en a un                         |
| $POSTSCRIPTUM              | le postscriptum du produit                                               |
| $PRICE                     | le prix du produit (prix unitaire)                                       |
| $PRICE_TAX                 | les taxes du produit (prix unitaire)                                     |
| $PRODUCT_SALE_ELEMENTS_ID  | l'ID de la déclinaison (PSE) du produit                                  |
| $PRODUCT_SALE_ELEMENTS_REF | la ref de la déclinaison (PSE) du produit                                |
| $PROMO_PRICE               | le prix du produit en promo (prix unitaire)                              |
| $PROMO_PRICE_TAX           | le prix du produit avec les taxes (prix unitaire)                        |
| $QUANTITY                  | la quantité du produit commandée                                         |
| $REF                       | la ref du produit commandé                                               |
| $TAXED_PRICE               | le prix du produit incluant les taxes (prix unitaire)                    |
| $TAXED_PROMO_PRICE         | le prix du produit en promo incluant les taxes (prix unitaire)           |
| $TAX_RULE_DESCRIPTION      | la description de la règle de taxes pour cet article                     |
| $TAX_RULE_TITLE            | la titre de la règle de taxes pour cet article                           |
| $TITLE                     | le titre du produit                                                      |
| $TOTAL_PRICE               | le prix total du produit (prix total)                                    |
| $TOTAL_PROMO_PRICE         | le prix total du produit en promo (prix total)                           |
| $TOTAL_TAXED_PRICE         | le prix total du produit incluant les taxes (prix total)                 |
| $TOTAL_TAXED_PROMO_PRICE   | le prix total du produit incluant les taxes (prix total)                 |
| $VIRTUAL                   | indique si le produit de commande est virtuel ou non                     |
| $VIRTUAL_DOCUMENT          | le nom du fichier si le produit est virtuel.                             |
| $WAS_IN_PROMO              | indique si les déclinaisons (PSE) du produit étaient en promotion ou non |
| $WAS_NEW                   | indique si les déclinaisons (PSE) du produit étaient nouveaux ou non     |
| $WEIGHT                    | le poids des déclinaisons (PSE) du produit                               |

Plus les [paramètres de sorties communs](./global_outputs)
