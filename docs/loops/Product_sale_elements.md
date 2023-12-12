---
title: Product sale elements
---

La boucle Product sale elements affiche les déclinaisons de produit de votre magasin.
Vous devrez peut être utiliser la boucle attribute combination dans la boucle Product sale elements.
`{loop type="product_sale_elements" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#pse-arguments}

| Argument | Description                                                                                                                      | Default | Exemple                 |
|----------|:---------------------------------------------------------------------------------------------------------------------------------|:-------:|:------------------------|
| currency | Un ID de devise                                                                                                                  |         | currency="1"            |
| default  | Booléen. Si true, renvoie uniquement les PSE du produit par défaut. Si false, le PSE par défaut n'est pas renvoyé                |         | default="yes"           |
| id       | Une liste d'IDs de PSE séparés par des virgules. Obligatoire si le paramètre 'product' n'est pas présent                         |         | id="1,3,8"              |
| new      | Booléen. Si true, renvoie uniquement les éléments de vente de produit pour lesquels new est activée. L'inverse avec 'false'      |         | new="yes"               |
| order    | Une liste de valeurs see [sorting possible values](#pse-order-possible-values)                                                   | random  | order="promo,min_price" |
| product  | Un id de produit unique.  Obligatoire si le paramètre 'id' n'est pas présent                                                     |         | product="2"             |
| promo    | Booléen. Si true, renvoie uniquement les éléments de vente de produit pour lesquels la promo est activée. L'inverse avec 'false' |         | promo="yes"             |
| visible  | Un booléen, ou * (la valeur par défaut) pour ignorer ce filtre                                                                   |    *    | visible="no"            |

Ainsi que les [arguments communs](./global_arguments) and [arguments de recherche](./search_arguments)

## Sorties

| Variable           | Value                                                         |
|:-------------------|:--------------------------------------------------------------|
| $EAN_CODE          | le code EAN de la déclinaison                                 |
| $ID                | L'ID de la déclinaison                                        |
| $IS_DEFAULT        | renvoi si la déclinaison est celle par défaut pour ce produit |
| $IS_NEW            | renvoie si la déclinaison est new                             |
| $IS_PROMO          | renvoie si la déclinaison est en promo                        |
| $PRICE             | le prix de la déclinaison                                     |
| $PRICE_TAX         | la taxe sur la déclinaison                                    |
| $PRODUCT_ID        | l'id du produit associé                                       |
| $PROMO_PRICE       | le prix en promo de la déclinaison                            |
| $PROMO_PRICE_TAX   | la taxe sur le prix promo de la déclinaison                   |
| $QUANTITY          | la quantité en stock de la déclinaison                        |
| $REF               | la ref de la declinaison                                      |
| $TAXED_PRICE       | le prix taxé de l'élément de vente de produit                 |
| $TAXED_PROMO_PRICE | le prix en promo taxé de l'élément de vente de produit        |
| $WEIGHT            | le poids de la déclinaison                                    |

Plus les [paramètres de sorties communs](./global_outputs)

## Exemples

Je veux afficher tous les éléments de vente de produits pour le produit actuel et afficher toutes les combinaisons d'attributs qui correspondent.
```smarty
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
```

## Valeurs possibles de tri {#pse-order-possible-values}
[Arguments](#pse-arguments)

| Valeur croissante | Valeur décroissante | Champs triés         |
|-------------------|---------------------|:---------------------|
| id                | id_reverse          | Id                   |
| max_price         | min_price           | Price                |
| new               |                     | new products first   |
| promo             |                     | promo products first |
| quantity          | quantity_reverse    | quantity             |
| random            |                     |                      |
| ref               | ref_reverse         | reference            |
| weight            | weight_reverse      | weight               |
