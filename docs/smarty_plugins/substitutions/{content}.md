Les substitutions de contenu fournissent le contenu actuel, identifié par le paramètre `content_id` (soit GET, soit POST).
`{content attr="une_des_suivantes"}`

## Attributs

| Nom de l'attribut | Données renvoyées                                                                                                 |
|:------------------|:------------------------------------------------------------------------------------------------------------------|
| `id`              |                                                                                                                   |
| `title`           |                                                                                                                   |
| `chapo`           |                                                                                                                   |
| ` description `   |                                                                                                                   |
| ` postscriptum `  |                                                                                                                   |
| ` visible `       | `true` si le contenu est actif, `false` sinon                                                                     |
| ` position `      | Le numéro de position dans le dossier parent                                                                      |
| ` createdAt `     | La date de création formatée par [le paramètre date/heure](#paramètres-optionnels-de-date-et-dheure)              |
| ` updatedAt `     | La date de dernière modification formatée par [le paramètre date/heure](#paramètres-optionnels-de-date-et-dheure) |

### Paramètres optionnels de date et d'heure
| Paramètre | Description                                                                                                                                              |
|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| `output`  | Prend `date`, `datetime` ou `time` comme valeur pour sélectionner le type de retour                                                                      |
| `format`  | Prend un [format de date php](https://www.php.net/manual/fr/datetime.format.php),  le format de la locale actuelle sera utilisé si ce paramètre est vide |