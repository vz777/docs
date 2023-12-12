---
title: Order
---

La boucle Order affiche des informations sur les commandes.
`{loop type="order" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#order-arguments}

| Argument            | Description                                                                                                                                                                                              |       Defaut        | Exemple                                |
|---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------:|:---------------------------------------|
| customer            | L'ID d'un seul client ou le mot-cle `current` pour obtenir l'utilisateur connecté ou le mot-clé `*` pour tous les utilisateurs.                                                                          |       current       | customer="2", customer="current"       |
| exclude_status      | Un ou plusieurs IDs de statut de commande à exclure des résultats                                                                                                                                        |                     | status="*", exclude_status="1,4,7"     |
| exclude_status_code | Un ou plusieurs codes de statut de commande à exclure des résultats. Les codes d'état valides sont not_paid, paid, processing, sent, canceled, ou tout autre état personnalisé qui peut être défini.     |                     | exclude_status_code="paid,processing"  |
| id                  | Un ou plusieurs IDs de commandes.                                                                                                                                                                        |                     | id="2", id="1,4,7"                     |
| order               | Une liste de valeurs see [sorting possible values](#order-order-possible-values)                                                                                                                         | create-date-reverse | order="create-date-reverse"            |
| status              | Un ou plusieurs ID de statut de commande ou le mot-clé `*`  pour tous                                                                                                                                    |                     | status="*", status="1,4,7"             |
| status_code         | Un ou plusieurs codes de statut de commande ou le mot-clé `*` pour tous. Les codes d'état valides sont not_paid, paid, processing, sent, canceled, ou tout autre état personnalisé qui peut être défini. |                     | status="*", status="not_paid,canceled" |
| with_prev_next_info | Booléen. Si définie sur true, les arguments de sortie `$PREVIOUS` et `$NEXT` sont disponibles.                                                                                                           |        false        | with_prev_next_info="yes"              |

Plus les [global arguments](./global_arguments) and [search arguments](./search_arguments)

## Sorties

| Variable                  | Value                                                                                                                                 | If <small>with_prev_next_info='true'</small> | If <small>with_prev_next_info='false'</small> |
|:--------------------------|:--------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------:|:---------------------------------------------:|
| $CURRENCY                 | l'id de la devise de la commande ; vous pouvez l'utiliser dans une [currency loop](./Currency)                                        |                      ✅                       |                       ✅                       |
| $CURRENCY_RATE            | le taux de change de la devise de la commande                                                                                         |                      ✅                       |                       ✅                       |
| $CUSTOMER                 | l'id du client associé à la commande ; vous pouvez l'utiliser dans une [customer loop](./Customer)                                    |                      ✅                       |                       ✅                       |
| $DELIVERY_ADDRESS         | l'id de l'adresse de livraison associé à la commande ; vous pouvez l'utiliser dans une [order address loop](./OrderAddress)           |                      ✅                       |                       ✅                       |
| $DELIVERY_MODULE          | l'id du module de livraison associé à la commande ; vous pouvez l'utiliser dans une [module loop](./Module)                           |                      ✅                       |                       ✅                       |
| $DELIVERY_REF             | la ref de livraison de la commande. Elle est généralement utilisée pour le suivi du colis                                             |                      ✅                       |                       ✅                       |
| $DISCOUNT                 | la remise de la commande                                                                                                              |                      ✅                       |                       ✅                       |
| $HAS_NEXT                 | Vrai si une commande existe après celle-ci, following orders id                                                                       |                      ✅                       |                      🚫                       |
| $HAS_PAID_STATUS          | Vrai si la commande a le statut 'paid', faux sinon                                                                                    |                      ✅                       |                       ✅                       |
| $HAS_PREVIOUS             | Vrai si une commande existe avant celle-ci, following orders id.                                                                      |                      ✅                       |                      🚫                       |
| $ID                       | l'id de la commande                                                                                                                   |                      ✅                       |                       ✅                       |
| $INVOICE_ADDRESS          | l'id de l'adresse de facturation de la commande ; vous pouvez l'utiliser dans une  [order address loop](./OrderAddress)               |                      ✅                       |                       ✅                       |
| $INVOICE_REF              | la ref de la commande                                                                                                                 |                      ✅                       |                       ✅                       |
| $IS_CANCELED              | Vrai si la commande a le statut 'canceled', faux sinon                                                                                |                      ✅                       |                       ✅                       |
| $IS_NOT_PAID              | Vrai si la commande a le statut 'not paid', faux sinon                                                                                |                      ✅                       |                       ✅                       |
| $IS_PAID                  | Vrai si la commande a été payée (peu importe le statut actuel), faux sinon                                                            |                      ✅                       |                       ✅                       |
| $IS_PROCESSING            | Vrai si la commande a le statut 'processing', faux sinon                                                                              |                      ✅                       |                       ✅                       |
| $IS_SENT                  | Vrai si la commande a le statut 'sent', faux sinon                                                                                    |                      ✅                       |                       ✅                       |
| $LANG                     | L'id de la langue de la commande                                                                                                      |                      ✅                       |                       ✅                       |
| $NEXT                     | l'id de la commande suivante, ou null s'il n'y en a pas.                                                                              |                      ✅                       |                      🚫                       |
| $PAYMENT_MODULE           | l'id du module de paiement de la commande ; vous pouvez l'utiliser dans une                                                           |                      ✅                       |                       ✅                       |
| $POSTAGE                  | le montant des frais de port de la commande                                                                                           |                      ✅                       |                       ✅                       |
| $POSTAGE_TAX              | le montant de la taxe sur les frais de port                                                                                           |                      ✅                       |                       ✅                       |
| $POSTAGE_TAX_RULE_TITLE   | le titre de la règle de taxes utilisée pour obtenir le montant de la taxe sur les frais de port                                       |                      ✅                       |                       ✅                       |
| $POSTAGE_UNTAXED          | le montant des frais de port de la commande sans taxe                                                                                 |                      ✅                       |                       ✅                       |
| $PREVIOUS                 | l'id de la commande précédente, ou null s'il n'y en a pas.                                                                            |                      ✅                       |                      🚫                       |
| $REF                      | la ref de la commande                                                                                                                 |                      ✅                       |                       ✅                       |
| $STATUS                   | le statut de la commande ; vous pouvez l'utiliser dans une [order status loop](./OrderStatus)                                         |                      ✅                       |                       ✅                       |
| $STATUS_CODE              | le code de statut de la commande                                                                                                      |                      ✅                       |                       ✅                       |
| $TOTAL_AMOUNT             | le montant de la commande hors taxes                                                                                                  |                      ✅                       |                       ✅                       |
| $TOTAL_ITEMS_AMOUNT       | le montant total des articles commandés, hors taxes                                                                                   |                      ✅                       |                       ✅                       |
| $TOTAL_ITEMS_TAX          | le montant total de la taxe des articles commandés uniquement, sans la taxe sur les frais de port                                     |                      ✅                       |                       ✅                       |
| $TOTAL_TAX                | le montant des taxes de la commande                                                                                                   |                      ✅                       |                       ✅                       |
| $TOTAL_TAXED_AMOUNT       | le montant de la commande, taxes comprises                                                                                            |                      ✅                       |                       ✅                       |
| $TOTAL_TAXED_ITEMS_AMOUNT | le montant total des articles commandés, taxes comprises                                                                              |                      ✅                       |                       ✅                       |
| $TRANSACTION_REF          | la ref de transaction de la commande. Il s'agit généralement de l'identifiant unique partagé entre la boutique en ligne et sa banque. |                      ✅                       |                       ✅                       |
| $VIRTUAL                  | la commande contient au moins un produit virtuel      ✅                                                                               |                      ✅                       |                                               |
| $WEIGHT                   | Le poids total de la commande                                                                                                         |                      ✅                       |                       ✅                       |

Plus les [global Sorties](./global_Sorties)

## Valeurs possibles de tri {#order-order-possible-values}
[Arguments](#order-arguments)

| Valeur croissante | Valeur décroissante   | Champs triés  |
|-------------------|-----------------------|:--------------|
| company           | company-reverse       | company       |
| create-date       | create-date-reverse   | creation date |
| customer-name     | customer-name-reverse | customer name |
| id                | id-reverse            | id            |
| invoice-date      | invoice-date-reverse  | invoice date  |
| reference         | reference-reverse     | reference     |
| status            | status-reverse        | status        |
