Les substitutions de lang fournissent la langue actuelle en session.
`{lang attr="one_of_the_following"}`

## Attributs

| Nom de l'attribut       | Données renvoyées                                                                                                                  |
|:------------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
| `id`                    |                                                                                                                                    |
| `title`                 |                                                                                                                                    |
| `code`                  | Code ISO 639-1                                                                                                                     |
| ` locale `              | Code local de la langue, par exemple : fr_FR, en_US, ...                                                                           |
| ` url `                 | URL personnalisée pour la langue                                                                                                   |
| ` decimals `            | Positions décimales                                                                                                                |
| ` decimal_separator `   | Séparateur pour le point décimal                                                                                                   |
| ` thousands_separator ` | Séparateur des milliers                                                                                                            |
| ` date_format `         | Format de la date. La syntaxe utilisée est identique à celle de la fonction date() en PHP. Par exemple : d/m/Y                     |
| ` time_format `         | Format de l'heure. La syntaxe utilisée est identique à celle de la fonction date() en PHP. Par exemple : H:i:s                     |
| ` datetime_format `     | Format de la date et de l'heure. La syntaxe utilisée est identique à celle de la fonction date() en PHP. Par exemple : d/m/y H:i:s |
| ` position `            |                                                                                                                                    |
| ` by_default `          | `true` si la langue est celle par défaut, `false` sinon                                                                            |
| ` createdAt `           | La date de création formatée par  [Date time parameter](#date-time-optional-parameters)                                            |
| ` updatedAt `           | La date de la dernière modification formatée par  [Date time parameter](#date-time-optional-parameters)                            |

### Paramètres optionnels de date et d'heure
| Paramètre | Description                                                                                                                                           |
|:----------|:------------------------------------------------------------------------------------------------------------------------------------------------------|
| `output`  | Prend `date`, `datetime` ou `time` comme valeur pour sélectionner le type de retour                                                                   |
| `format`  | Prend un [PHP date format](https://www.php.net/manual/fr/datetime.format.php),  le format de la locale actuelle sera utilisé si ce paramètre est vide |