---
title: Payment
---

La boucle payment affiche les information concernant les modules de paiements.
`{loop type="payment" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#payment-arguments}

| Argument     | Description                                                                        | Default | Exemple                    |
|--------------|:-----------------------------------------------------------------------------------|:-------:|:---------------------------|
| code         | Un code de module                                                                  |         | code='Atos'                |
| exclude      | Une liste des IDs de module à exclure des résultats                                |         | exclude="12,21"            |
| exclude_code | Une liste de codes de module à exclure des résultats                               |         | exclude_code="Cheque,Atos" |
| id           | Un id de module                                                                    |         | module=4                   |
| order        | Une liste de valeurs see [sorting possible values](#payment-order-possible-values) | manual  | order=" id_reverse"        |

Plus les [global arguments](./global_arguments)

## Sorties

| Variable      | Value                                 |
|:--------------|:--------------------------------------|
| $CHAPO        | le chapo du module de paiement        |
| $CODE         | le code du module                     |
| $DESCRIPTION  | la description du module de paiement  |
| $ID           | l'id du module de paiement            |
| $POSTSCRIPTUM | le postscriptum du module de paiement |
| $TITLE        | le title du module de paiement        |

Plus les [global Sorties](./global_Sorties)

## Valeurs possibles de tri {#payment-order-possible-values}
[Arguments](#payment-arguments)

| Valeur croissante | Valeur décroissante | Champs triés |
|-------------------|---------------------|:-------------|
| alpha             | alpha_reverse       | title        |
| id                | id_reverse          | id           |
| manual            | manual_reverse      | position     |