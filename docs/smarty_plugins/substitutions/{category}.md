Les substitutions de catégorie fournissent la catégorie actuelle, identifiée par le paramètre `category_id` (soit GET, soit POST).
`{category attr="une_des_suivantes"}`

## Attributs

| Attribute name   | Data returned                                                                                                          |
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------|
| `id`             |                                                                                                                        |
| `title`          |                                                                                                                        |
| `chapo`          |                                                                                                                        |
| ` description `  |                                                                                                                        |
| ` postscriptum ` |                                                                                                                        |
| ` visible `      | `true` si la catégorie est active, `false` sinon                                                                       |
| ` parent `       | L'ID de la catégorie parente                                                                                           |
| ` position `     | Le numéro de position dans la catégorie parente                                                                        |
| ` createdAt `    | La date de création formatée par  [le paramètre date/heure ](#paramètres-optionnels-de-date-et-dheure)                 |
| ` updatedAt `    | La date de la dernière modification formatée par  [le paramètre date/heure ](#paramètres-optionnels-de-date-et-dheure) |

### Paramètres optionnels de date et d'heure
| Paramètresz | Description                                                                                                                                           |
|:------------|:------------------------------------------------------------------------------------------------------------------------------------------------------|
| `output`    | Prend `date`, `datetime` or `time` comme valeur pour sélectionner le type de retour                                                                   |
| `format`    | Prend [format de date php](https://www.php.net/manual/fr/datetime.format.php),  le format de la locale actuelle sera utilisé si ce paramètre est vide |