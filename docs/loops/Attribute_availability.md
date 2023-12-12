---
title: Attribute availability
---

La boucle Attribute availability listes les déclinaisons (e.g., attribute values).
`{loop type="attribute_availability" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#attribute-av-arguments}

| Argument  | Description                                                                                               | Default | Exemple               |
|-----------|:----------------------------------------------------------------------------------------------------------|:-------:|:----------------------|
| attribute | Un id de déclinaison ou une liste d'ids de déclinaisons.                                                  |         | id="2", id="1,4,7"    |
| exclude   | A single or a list of attribute availability ids to exclude.                                              |         | exclude="456,123"     |
| id        | A single or a list of attribute availability ids.                                                         |         | id="2", id="1,4,7"    |
| lang      | Un id de langue                                                                                           |         | lang="1"              |
| order     | Une liste de valeurs <br/> [Expected values](#attribute-av-order-possible-values)                         | manual  | order="alpha_reverse" |
| product   | A product ID. If present, only attribute values that are part of this product's combinations are returned |         | product="279"         |

Plus les [global arguments](./global_arguments)

## Sorties

| Variable       | Value                                                       |
|:---------------|:------------------------------------------------------------|
| $ATTRIBUTE_ID  | the ID of the attribute this attribute availability belongs |
| $CHAPO         | the attribute availability chapo                            |
| $DESCRIPTION   | the attribute availability description                      |
| $ID            | the attribute availability id                               |
| $IS_TRANSLATED | vérifie si le produit est traduit ou non                    |
| $LOCALE        | la locale utilisée pour cette boucle                        |
| $POSITION      | the attribute availability position                         |
| $POSTSCRIPTUM  | the attribute availability postscriptum                     |
| $TITLE         | the attribute availability title                            |

Plus les [global Sorties](./global_Sorties)

## Valeurs possibles de tri {#attribute-av-order-possible-values}
[Arguments](#attribute-av-arguments)

| Valeur croissante | Valeur décroissante | Champs triés |
|-------------------|---------------------|:-------------|
| alpha             | alpha_reverse       | title        |
| manual            | manual_reverse      |              |