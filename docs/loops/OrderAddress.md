---
title: Order address
---

La boucle Order address affiche sur les addresses de commandes.
`{loop type="order_address" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#order-arguments}

| Argument | Description               | Default | Exemple |
|----------|:--------------------------|:-------:|:--------|
| id *     | A single order address id |         | id="2"  |

Ainsi que les [arguments communs](./global_arguments)

## Sorties

| Variable   | Value                                                                                          |
|:-----------|:-----------------------------------------------------------------------------------------------|
| $ADDRESS1  | la première ligne de l'adresse de commande                                                     |
| $ADDRESS2  | la deuxième ligne de l'adresse de commande                                                     |
| $ADDRESS3  | la troisième ligne de l'adresse de commande                                                    |
| $CELLPHONE | le numéro de téléphone portable associé à l'adresse de commande                                |
| $CITY      | la ville de l'adresse de commande                                                              |
| $COMPANY   | le nom de la société associée à l'adresse de commande                                          |
| $COUNTRY   | le pays de l'adresse de commande, qui peut être utilisé dans une [country loop](./Country)     |
| $FIRSTNAME | le prénom associé à l'adresse de commande                                                      |
| $ID        | l'id de l'adresse de commande                                                                  |
| $LASTNAME  | le nom associé à l'adresse de commande                                                         |
| $PHONE     | le numéro de téléphone associé à l'adresse de commande                                         |
| $TITLE     | le titre associé à l'adresse de commande, qui peut être utilisé dans une [title loop](./Title) |
| $ZIPCODE   | le code postal de l'adresse de commande                                                        |


Plus les [paramètres de sorties communs](./global_outputs)
