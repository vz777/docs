---
title: Tax
---

Boucle affichant les taxes disponibles.
`{loop type="tax" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#tax-arguments}

| Argument         | Description                                      | Default | Exemple                                      |
|------------------|:-------------------------------------------------|:-------:|:---------------------------------------------|
| country          | un id de pays                                    |         | country="64"                                 |
| exclude          | Un ou plusieurs ids de taxes à exclure           |         | exclude="2", exclude="1,4"                   |
| exclude_tax_rule | Un ou plusieurs ids de règles de taxes à exclure |         | exclude_tax_rule="2", exclude_tax_rule="1,4" |
| id               | Un ou plusieurs ids de taxes                     |         | id="2", id="1,4"                             |
| tax_rule         | Un ou plusieurs ids de règles de taxes           |         | tax_rule="2", tax_rule="1,4"                 |

Ainsi que les [arguments communs](./global_arguments)

## Sorties

| Variable       | Value                                                                                                                      |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------|
| $DESCRIPTION   | Description de la taxe                                                                                                     |
| $ESCAPED_TYPE  | Fournit une version sûre pour les formulaires et JavaScript du type, qui est un nom de classe entièrement qualifié, avec \ |
| $ID            | l'id de la taxe                                                                                                            |
| $IS_TRANSLATED | vérifie si la taxe est traduite                                                                                            |
| $LOCALE        | la locale utilisée pour cette recherche                                                                                    |
| $REQUIREMENTS  | Toutes les exigences pour cette taxe                                                                                       |
| $TITLE         | Titre de la taxe                                                                                                           |
| $TYPE          | Le type de la taxe                                                                                                         |

Plus les [paramètres de sorties communs](./global_outputs)
