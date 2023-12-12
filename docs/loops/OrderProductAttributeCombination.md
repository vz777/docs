---
title: Order product attribute combination
---

La boucle product attribute combination répertorie les combinaisons d'attributs de produit de commande.
`{loop type="order_product_attribute_combination" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#order-arguments}

| Argument        | Description                                                                                                                                                                                                       | Default | Exemple               |
|-----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------:|:----------------------|
| order           | Une liste de valeurs <br/> Valeurs attendues : <br/> - alpha : Ordre alphabétique sur le titre de order product attribute <br/> - alpha_reverse : Ordre alphabétique inverse sur le titre order product attribute |  alpha  | order="alpha_reverse" |
| order_product * | L'id d'un seul order product id.                                                                                                                                                                                  |         | order_product="2"     |

Plus les [global arguments](./global_arguments)

## Sorties

| Variable                             | Value                                                 |
|:-------------------------------------|:------------------------------------------------------|
| $ATTRIBUTE_AVAILABILITY_CHAPO        | the order product attribute availability chapo        |
| $ATTRIBUTE_AVAILABILITY_DESCRIPTION  | the order product attribute availability description  |
| $ATTRIBUTE_AVAILABILITY_POSTSCRIPTUM | the order product attribute availability postscriptum |
| $ATTRIBUTE_AVAILABILITY_TITLE        | the order product attribute availability title        |
| $ATTRIBUTE_CHAPO                     | the order product attribute chapo                     |
| $ATTRIBUTE_DESCRIPTION               | the order product attribute description               |
| $ATTRIBUTE_POSTSCRIPTUM              | the order product attribute postscriptum              |
| $ATTRIBUTE_TITLE                     | the order product attribute title                     |
| $ID                                  | the order product attribute combination ID            |
| $ORDER_PRODUCT_ID                    | the related order product ID                          |

Plus les [global Sorties](./global_Sorties)
