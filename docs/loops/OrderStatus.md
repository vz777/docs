---
title: Order status
---

La boucle Order status affiche des informations sur les statuts de commande.
`{loop type="order_status" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#order-arguments}

| Argument | Description                                                        | Default | Exemple            |
|----------|:-------------------------------------------------------------------|:-------:|:-------------------|
| id       | Un ou plusieurs de statut de commande.                             |         | id="2", id="1,4,7" |
| order    | Une liste de valeurs see [Expected values](#order-possible-values) | manual  | order="random"     |

Plus les [global arguments](./global_arguments)

## Sorties

| Variable          | Value                                                              |
|:------------------|:-------------------------------------------------------------------|
| $CHAPO            | le chapo du statut de commande                                     |
| $CODE             | le code du statut de commande                                      |
| $COLOR            | le code hexadécimal pour la: couleur associé au statut de commande |
| $DESCRIPTION      | la description du statut de commande                               |
| $ID               | l'id du statut de commande                                         |
| $IS_TRANSLATED    | si le statut de commande est traduit ou non                        |
| $LOCALE           | la locale du statut de commande                                    |
| $POSITION         | la position du statut de commande                                  |
| $POSTSCRIPTUM     | le postscriptum du statut de commande                              |
| $PROTECTED_STATUS | 1 si le statut de commande est protégé                             |
| $TITLE            | le titre du statut de commande                                     |

Plus les [global Sorties](./global_Sorties)

## Valeurs possibles de tri {#order-possible-values}
[Arguments](#order-arguments)

| Valeur croissante | Valeur décroissante | Champs triés |
|-------------------|---------------------|:-------------|
| alpha             | alpha-reverse       | title        |
| manual            | manual-reverse      | position     |