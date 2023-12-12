---
title: Accessory
---

La boucle Accessory répertorie les accessoires des produits. Comme un accessoire est lui-même un produit, cette boucle se comporte comme une boucle de produit. Par conséquent, vous pouvez utiliser tous les arguments et les sorties de la [boucle product](./product).
`{loop type="accessory" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#pse-arguments}

| Argument                                             | Description                                                                      |  Defaut   | Exemple                            |
|------------------------------------------------------|:---------------------------------------------------------------------------------|:---------:|:-----------------------------------|
| tous les arguments de la [boucle product](./product) |                                                                                  |           | order="min_price", max_price="100" |
| order                                                | Une liste de valeurs <br/> [Valeurs attendues](#accessory-order-possible-values) | accessory | order="accessory,max_price"        |
| product \*                                           | L'ID d'un seul produit.                                                          |           | product="2"                        |

## Paramètres de sorties

| Variable                                                                                   | Value                         |
|:-------------------------------------------------------------------------------------------|:------------------------------|
| $ACCESSORY_ID                                                                              | Le product ID de l'accessoire |
| $ID                                                                                        | l'ID de l'accessoire          |
| toutes les sorties de la [boucle product](./product) sauf ID, qui est l'ID de l'accessoire |                               |

## Exemples

Je veux afficher tous les accessoires qui sont dans la catégorie 1, triés par prix croissant, pour tous les produits de la catégorie 2.
```smarty
<ul>
{loop type="product" name="products_in_category_2" category="2"}
    {loop type="accessory" name="accessories_in_category_1_order_by_min_price" category="1" product="$ID" order="min_price"}
        <li>{$TITLE} ({$REF})</li>
    {/loop}
{/loop}
</ul>
```

## Valeurs possibles de tri {#accessory-order-possible-values}
[Arguments](#pse-arguments)

| Valeur croissante                                        | Valeur décroissante | Champs triés |
|----------------------------------------------------------|---------------------|:-------------|
| accessory                                                | accessory_reverse   | accessory    |
| tous les possibilitées de la [boucle product](./product) |                     |              |