---
title: Order product tax
---

La boucle product tax affiche les taxes disponibles.
`{loop type="order_product_tax" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#order-arguments}

| Argument        | Description                      | Default | Exemple           |
|-----------------|:---------------------------------|:-------:|:------------------|
| order_product * | Le product id d'un seul produit. |         | order_product="2" |

Ainsi que les [arguments communs](./global_arguments)

## Sorties

| Variable      | Value                            |
|:--------------|:---------------------------------|
| $AMOUNT       | Montant de la taxe               |
| $DESCRIPTION  | Description de la taxe           |
| $ID           | Id de la taxe                    |
| $PROMO_AMOUNT | Montant de la taxe du prix promo |
| $TITLE        | Titre de la taxe                 |

Plus les [paramètres de sorties communs](./global_outputs)
