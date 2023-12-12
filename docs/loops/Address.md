---
title: Address
---

La boucle d'adresse répertorie les adresses.
`{loop type="address" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#pse-arguments}

| Argument | Description                                                                               | Default | Exemple                           |
|----------|:------------------------------------------------------------------------------------------|:-------:|:----------------------------------|
| customer | Soit un id client, soit le mot-clé `current` qui recherche les adresses du client actuel. | current | customer="current", customer="11" |
| default  | Une booléen pour retourner soit l'adresse par défaut du client, soit toutes les autres.   |         | default="true"                    |
| exclude  | Un id d'adresse ou une liste d'ids d'adresses à exclure.                                  |         | exclude="456,123"                 |
| id       | Un id d'adresse ou une liste d'ids d'adresses.                                            |         | id="2", id="1,4,7"                |

Ainsi que les [arguments communs](./global_arguments)

## Sorties

| Variable   | Value                                                                                          |
|:-----------|:-----------------------------------------------------------------------------------------------|
| $ADDRESS1  | la première ligne d'adresse                                                                    |
| $ADDRESS2  | la deuxième ligne d'adresse                                                                    |
| $ADDRESS3  | la troisième ligne d'adressel                                                                  |
| $CELLPHONE | le numéro de portable associé à l'adresse                                                      |
| $CITY      | la ville                                                                                       |
| $COMPANY   | l'adresse de la société                                                                        |
| $COUNTRY   | le pays lié à l'adresse qui peut être utilisé dans la  [country loop](./Country)               |
| $CUSTOMER  | le client auquel l'adresse est liée, qui peut être utilisé dans la [customer loop](./Customer) |
| $DEFAULT   | retourne si le titre de l'adresse est par défaut                                               |
| $FIRSTNAME | le prénom lié à l'adresse                                                                      |
| $ID        | l'id de l'adresse                                                                              |
| $LABEL     | l'étiquette de l'adresse                                                                       |
| $LASTNAME  | le nom lié à l'adresse                                                                         |
| $PHONE     | le numéro de téléphone associé à l'adresse                                                     |
| $TITLE     | le titre de l'adresse qui peut être utilisé dans la [title loop](./Title)                      |
| $ZIPCODE   | le code postal                                                                                 |


Plus les [paramètres de sorties communs](./global_outputs)