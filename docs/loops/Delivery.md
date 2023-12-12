---
title: Delivery
---

La boucle Delivery affiche les informations sur les modules de livraison.
`{loop type="delivery" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#delivery-arguments}

| Argument     | Description                                                                          | Default | Exemple                    |
|--------------|:-------------------------------------------------------------------------------------|:-------:|:---------------------------|
| address      | Un ID d'adresse.                                                                     |         | address=21                 |
| code         | Le code d'un module.                                                                 |         | code='Atos'                |
| country      | Un id de pays.                                                                       |         | country=2                  |
| exclude      | Un ou plusieurs IDs de modules à exclure                                             |         | exclude="12, 21"           |
| exclude_code | Un ou plusieurs codes de modules à exclure.                                          |         | exclude_code="Cheque,Atos" |
| id           | L'id d'un module                                                                     |         | module=4                   |
| order        | Une liste de valeurs voir [sorting possible values](#delivery-order-possible-values) | manual  | order="id_reverse"         |
| state        | Un ID d'état.                                                                        |         | state=12                   |

Plus les [global arguments](./global_arguments)

## Sorties

| Variable                | Value                                                                                |
|:------------------------|:-------------------------------------------------------------------------------------|
| $CHAPO                  | le chapo du module de livraison                                                      |
| $CODE                   | le code du module                                                                    |
| $DELIVERY_DATE          | la date de livraison prévue. Cette sortie peut être vide.                            |
| $DESCRIPTION            | la description du module de livraison                                                |
| $ID                     | l'id du module de livraison                                                          |
| $POSTAGE                | le prix de livraison avec taxes, exprimé dans la devise actuelle                     |
| $POSTAGE_TAX            | le montant de la taxe sur le prix de livraison, exprimé dans la devise actuelle      |
| $POSTAGE_TAX_RULE_TITLE | le titre de la règle de texes utilisée pour obtenir la taxe sur le prix de livraison |
| $POSTAGE_UNTAXED        | le prix de livraison sans taxes, exprimé dans la devise actuelle                     |
| $POSTSCRIPTUM           | la postscriptum du module de livraison                                               |
| $TITLE                  | la titre du module de livraison                                                      |

Plus les [global Sorties](./global_Sorties)

## Valeurs possibles de tri {#delivery-order-possible-values}
[Arguments](#delivery-arguments)

| Valeur croissante | Valeur décroissante | Champs triés                       |
|-------------------|---------------------|:-----------------------------------|
| alpha             | alpha_reverse       | title                              |
| id                | id_reverse          | id                                 |
| manual            | manual_reverse      | position as defined in back-office |
