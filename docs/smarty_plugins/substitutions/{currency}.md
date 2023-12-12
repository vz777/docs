Les substitutions de devises fournissent la devise actuelle en session.
`{currency attr="une_des_options_suivantes"}`

## Attributs

| Nom de l'attribut | Données renvoyées                                                                                       |
|:------------------|:--------------------------------------------------------------------------------------------------------|
| `id`              |                                                                                                         |
| `name`            |                                                                                                         |
| `code`            | Code ISO 4217. ex. : EUR                                                                                |
| ` symbol `        | Symbole de la devise : €, $, ...                                                                        |
| ` rate `          | Taux par rapport à l'euro.                                                                              |
| ` by_default `    | `true`  si la devise est celle par défaut, `false` sinon                                                |
| ` position `      |                                                                                                         |
| ` createdAt `     | La date de création formatée par  [Date time parameter](#date-time-optional-parameters)                 |
| ` updatedAt `     | La date de la dernière modification formatée par  [Date time parameter](#date-time-optional-parameters) |

### Paramètres optionnels de date et d'heure
| Paramètre | Description                                                                                                                                           |
|:----------|:------------------------------------------------------------------------------------------------------------------------------------------------------|
| `output`  | Prend `date`, `datetime` ou `time` comme valeur pour sélectionner le type de retour                                                                   |
| `format`  | Prend un [PHP date format](https://www.php.net/manual/fr/datetime.format.php),  le format de la locale actuelle sera utilisé si ce paramètre est vide |