---
title: Attribute combination
---

La boucle Attribute combination répertorie les combinaisons d'attributs.
`{loop type="attribute_combination" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#pse-arguments}

| Argument                 | Description                                                                      | Default | Exemple               |
|--------------------------|:---------------------------------------------------------------------------------|:-------:|:----------------------|
| lang                     | Un id de langue                                                                  |         | lang="1"              |
| order                    | Une liste de valeurs <br/> [Valeurs attendues](#accessory-order-possible-values) |  alpha  | order="alpha_reverse" |
| product_sale_elements \* | A single product sale elements id.                                               |         | product="2"           |

## Sorties

| Variable                             | Value                                   |
|:-------------------------------------|:----------------------------------------|
| $ATTRIBUTE_AVAILABILITY_CHAPO        | the attribute availability chapo        |
| $ATTRIBUTE_AVAILABILITY_DESCRIPTION  | the attribute availability description  |
| $ATTRIBUTE_AVAILABILITY_ID           | the attribute availability id           |
| $ATTRIBUTE_AVAILABILITY_POSTSCRIPTUM | the attribute availability postscriptum |
| $ATTRIBUTE_AVAILABILITY_TITLE        | the attribute availability title        |
| $ATTRIBUTE_CHAPO                     | the attribute chapo                     |
| $ATTRIBUTE_DESCRIPTION               | the attribute description               |
| $ATTRIBUTE_ID                        | the attribute id                        |
| $ATTRIBUTE_POSTSCRIPTUM              | the attribute postscriptum              |
| $ATTRIBUTE_TITLE                     | the attribute title                     |
| $LOCALE                              | the locale used for this loop           |


## Exemples

Je veux afficher tous les éléments de vente (PSE) de produits pour le produit actuel et montrer toutes les combinaisons d'attributs qui lui correspondent.
```smarty
<ul>
{loop name="pse" type="product_sale_elements" product="$PRODUCT_ID"}
    <div>
        {loop name="combi" type="attribute_combination" product_sale_elements="$ID"}
        {$ATTRIBUTE_ID}. {$ATTRIBUTE_TITLE} = {$ATTRIBUTE_AVAILABILITY_ID}. {$ATTRIBUTE_AVAILABILITY_TITLE}<br />
        {/loop}
        <br />{$WEIGHT} g
        <br /><strong>{if $IS_PROMO == 1} {$PROMO_PRICE} € (instead of {$PRICE}) {else} {$PRICE} € {/if}</strong>
        <br /><br />
        Add
        <select>
            {for $will=1 to $QUANTITY}
            <option>{$will}</option>
            {/for}
        </select>
        to my cart
    </div>
{/loop}
</ul>
```

## Valeurs possibles de tri {#accessory-order-possible-values}
[Arguments](#pse-arguments)

| Valeur croissante | Valeur décroissante | Champs triés      |
|-------------------|---------------------|:------------------|
| alpha             | alpha_reverse       | title             |
| manual            | manual_reverse      | order by position |
