---
title: Cart
---

La boucle Cart affiche les informations du panier.
`{loop type="cart" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#pse-arguments}

| Argument | Description                                                                                                 | Default | Exemple         |
|----------|:------------------------------------------------------------------------------------------------------------|:-------:|:----------------|
| order    | Une liste de valeurs <br/> Valeurs attendues : <br/> - reverse : inverse l'ordre chronologique des éléments | reverse | order="reverse" |

Ainsi que les [arguments communs](./global_arguments)

## Sorties

| Variable                  | Valeur                                                      |
|:--------------------------|:------------------------------------------------------------|
| $IS_PROMO                 | si le PSE (déclinaison) du produit est en promotion ou non  |
| $ITEM_ID                  | l'id de l'élément du panier                                 |
| $PRICE                    | le prix du PSE du produit (prix unitaire)                   |
| $PRODUCT_ID               | l'id du produit                                             |
| $PRODUCT_SALE_ELEMENTS_ID | l'id du PSE                                                 |
| $PRODUCT_URL              | l'url du produit                                            |
| $PROMO_PRICE              | le prix en promotion du PSE (prix unitaire)                 |
| $PROMO_TAXED_PRICE        | le prix en promotion du PSE avec les taxes (prix unitaire)  |
| $QUANTITY                 | la quantité de l'élément du panier                          |
| $REF                      | la ref du produit                                           |
| $STOCK                    | le stock disponible du PSE                                  |
| $TAXED_PRICE              | le prix du PSE incluant les taxes (prix unitaire)           |
| $TITLE                    | le titre du produit                                         |
| $TOTAL_PRICE              | le prix du PSE (prix total)                                 |
| $TOTAL_PROMO_PRICE        | le prix en promotion du PSE (prix total)                    |
| $TOTAL_PROMO_TAXED_PRICE  | le prix en promotion du PSE incluant les taxes (prix total) |
| $TOTAL_TAXED_PRICE        | le prix du PSE incluant les taxes (prix total)              |

Plus les [paramètres de sorties communs](./global_outputs)
