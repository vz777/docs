Les substitutions client fournissent les données pour un client connecté.
`{customer attr="one_of_the_following"}`

## Attributs

| Nom de l'attribut | Données renvoyées                                                                                                      |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------|
| `id`              |                                                                                                                        |
| `ref`             |                                                                                                                        |
| `firstname`       |                                                                                                                        |
| `lastname`        |                                                                                                                        |
| ` email `         |                                                                                                                        |
| ` title_id `      |                                                                                                                        |
| ` lang `          | ID de la langue du client                                                                                              |
| ` reseller `      | `1` si le client est un revendeur, sinon  `0`                                                                          |
| ` sponsor `       | ID du parrain du client                                                                                                |
| ` discount `      | Le % de réduction du client                                                                                            |
| ` createdAt `     | La date de création formatée par  [le paramètre date/heure ](#paramètres-optionnels-de-date-et-dheure)                 |
| ` updatedAt `     | La date de la dernière modification formatée par  [le paramètre date/heure ](#paramètres-optionnels-de-date-et-dheure) |

### Paramètres optionnels de date et d'heure
| Paramètre | Description                                                                                                                                              |
|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| `output`  | Prend `date`, `datetime` ou `time` comme valeur pour sélectionner le type de retour                                                                      |
| `format`  | Prend un [format de date php](https://www.php.net/manual/fr/datetime.format.php),  le format de la locale actuelle sera utilisé si ce paramètre est vide |