Les substitutions de produit fournissent des informations sur le produit actuel, identifié par le paramètre product_id (soit GET, soit POST).
`{product attr="one_of_the_following"}`

## Attributs

| Nom de l'attribut | Données renvoyées                                                                                                      |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------|
| `id`              |                                                                                                                        |
| `ref`             |                                                                                                                        |
| `title`           |                                                                                                                        |
| `chapo`           |                                                                                                                        |
| ` description `   |                                                                                                                        |
| ` postscriptum `  |                                                                                                                        |
| ` tax_rule_id `   |                                                                                                                        |
| ` brand_id `      |                                                                                                                        |
| ` visible `       | `true` si le produit est actif, `false` sinon                                                                          |
| ` parent `        | L'ID de la catégorie parente par défaut                                                                                |
| ` position `      | Le numéro de position dans la catégorie parente par défaut                                                             |
| ` createdAt `     | La date de création formatée par  [le paramètre date/heure ](#paramètres-optionnels-de-date-et-dheure)                 |
| ` updatedAt `     | La date de la dernière modification formatée par  [le paramètre date/heure ](#paramètres-optionnels-de-date-et-dheure) |

### Paramètres optionnels de date et d'heure
| Paramètre | Description                                                                                                                                              |
|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| `output`  | Prend `date`, `datetime` ou `time` comme valeur pour sélectionner le type de retour                                                                      |
| `format`  | Prend un [format de date php](https://www.php.net/manual/fr/datetime.format.php),  le format de la locale actuelle sera utilisé si ce paramètre est vide |