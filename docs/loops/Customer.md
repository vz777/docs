---
title: Customer
---

La boucle Customer affiche les informations sur les clients.
`{loop type="customer" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#customer-arguments}

| Argument            | Description                                                                                                                                                              |  Defaut  | Exemple                               |
|---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------:|:--------------------------------------|
| current             | Booléen qui doit être définie sur false si vous souhaitez afficher les informations sur les clients non authentifiés, généralement si le paramètre `sponsor` est défini. |   yes    | current="false"                       |
| id                  | Un ou plusieurs IDs de client.                                                                                                                                           |          | id="2", id="1,4,7"                    |
| order               | Une liste de valeurs voir [sorting possible values](#customer-order-possible-values)                                                                                     | lastname | order="firstname, lastname"           |
| ref                 | Une ou plusieurs ref de client.                                                                                                                                          |          | ref="1231231241", ref="123123,789789" |
| reseller            | Booléen.                                                                                                                                                                 |          | reseller="yes"                        |
| sponsor             | L'identifiant du parrain pour lequel vous souhaitez la liste des clients affiliés.                                                                                       |          | sponsor="1"                           |
| with_prev_next_info | Booléen, si vrai, les variables de sorties $HAS_PREVIOUS, $HAS_NEXT, $PREVIOUS, et $NEXT sont disponibles                                                                |  false   | with_prev_next_info="yes"             |

Ainsi que les [arguments communs](./global_arguments) and [arguments de recherche](./search_arguments)

## Sorties

| Variable            | Value                                                                                                                                                                                                |
|:--------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| $CONFIRMATION_TOKEN | le jeton de confirmation d'inscription du client, utilisé lorsque la confirmation par e-mail de l'inscription est activée (voir <strong>customer_email_confirmation</strong> configuration variable) |
| $DISCOUNT           | la remise client                                                                                                                                                                                     |
| $EMAIL              | l'email du client                                                                                                                                                                                    |
| $FIRSTNAME          | Le prénom du client                                                                                                                                                                                  |
| $HAS_NEXT           | vrai si un client existe après le client actuel, en fonction de la commande actuelle. Disponible uniquement si le paramètre <strong>with_prev_next_info</strong> est défini sur true                 |
| $HAS_PREVIOUS       | vrai si un client existe avant le client actuel, en fonction de la commande actuelle. Disponible uniquement si le paramètre <strong>with_prev_next_info</strong> est défini sur true                 |
| $ID                 | l'id client                                                                                                                                                                                          |
| $LASTNAME           | le nom du client                                                                                                                                                                                     |
| $NEWSLETTER         | vrai si le client est inscrit à la newsletter, faux sinon                                                                                                                                            |
| $NEXT               | ID du client suivant, ou null s'il n'existe pas. Disponible uniquement si le paramètre  <strong>with_prev_next_info</strong>  est défini sur true                                                    |
| $PREVIOUS           | ID du client précédent, ou null s'il n'existe pas. Disponible uniquement si le paramètre  <strong>with_prev_next_info</strong> est défini sur true                                                   |
| $REF                | la ref du client                                                                                                                                                                                     |
| $RESELLER           | renvoie si le client est un revendeur                                                                                                                                                                |
| $SPONSOR            | le parrain du client qui peut être utilisé dans [customer loop](./Customer)                                                                                                                          |
| $TITLE              | le titre du client qui peut être utilisé dans une [title loop](./Title)                                                                                                                              |

Plus les [paramètres de sorties communs](./global_outputs)

## Valeurs possibles de tri {#customer-order-possible-values}
[Arguments](#customer-arguments)

| Valeur croissante          | Valeur décroissante        | Champs triés      |
|----------------------------|----------------------------|:------------------|
| firstname                  | firstname_reverse          | firstname         |
| id                         | id_reverse                 | ID                |
| last_order                 | last_order_reverse         | last order        |
| lastname                   | lastname_reverse           | lastname          |
| lregistration_date_reverse | lregistration_date_reverse | registration date |
| order_amount               | order_amount_reverse       | last order        |
| reference                  | reference_reverse          | reference         |
| registration_date          |                            | registration date |
