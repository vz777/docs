Les substitutions de pays fournissent le pays par défaut configuré dans la boutique.
`{country attr="une_des_suivantes"}`

## Attributes

| Nom de l'attribut | Données renvoyées                                                                                                     |
|:------------------|:----------------------------------------------------------------------------------------------------------------------|
| `id`              |                                                                                                                       |
| `title`           |                                                                                                                       |
| `chapo`           |                                                                                                                       |
| ` description `   |                                                                                                                       |
| ` postscriptum `  |                                                                                                                       |
| `  isocode  `     | Code ISO 3166-1 numérique (3 chiffres)                                                                                |
| `  isoalpha2  `   | Code ISO 3166-1 alpha-2 (2 lettres)                                                                                   |
| `  isoalpha3  `   | Code ISO 3166-1 alpha-3 (3 lettres)                                                                                   |
| ` createdAt `     | La date de création formatée par  [le paramètre date/heure ](#paramètres-optionnels-de-date-et-dheure)                |
| ` updatedAt `     | La date de la dernière modification formatée par [le paramètre date/heure ](#paramètres-optionnels-de-date-et-dheure) |

### Paramètres optionnels de date et d'heure
| Paramètre | Description                                                                                                                                              |
|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| `output`  | Prend `date`, `datetime` ou `time` comme valeur pour sélectionner le type de retour                                                                      |
| `format`  | Prend un [format de date php](https://www.php.net/manual/fr/datetime.format.php),  le format de la locale actuelle sera utilisé si ce paramètre est vide |