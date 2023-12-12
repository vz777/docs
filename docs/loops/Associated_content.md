---
title: Associated content
---

La boucle Associated content répertorie les contenus associés à un produit ou à une catégorie. Elle se comporte comme une boucle de contenu, vous pouvez donc utiliser tous les arguments et sorties de [la boucle content](./Content).
`{loop type="associated_content" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#ass-content-arguments}

| Argument                                          | Description                                                                                                                                  |       Defaut       | Exemple                    |
|---------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|:------------------:|:---------------------------|
| tous les [la boucle content](./Content) arguments |                                                                                                                                              |                    | exclude_folder="1,2,9"     |
| category \*\*                                     | L'id d'une seule category.                                                                                                                   |                    | category="5"               |
| exclude_category                                  | Un ou plusieurs ids de catégories. Si un contenu est présent dans plusieurs catégories qui ne sont pas toutes exclues, il ne sera pas exclu. |                    | exclude_category="5"       |
| exclude_product                                   | Un ou plusieurs ids de produits. Si un contenu est présent dans plusieurs produits qui ne sont pas tous exclus, il ne sera pas exclu.        |                    | exclude_product="5"        |
| order                                             | Une liste de valeurs <br/> [Valeurs attendues](#ass-content-order-possible-values)                                                           | associated_content | order="associated_content" |
| product \*\*                                      | L'ID d'un seul produit.                                                                                                                      |                    | product="2"                |

## Sorties

| Variable                                                                                   | Value                   |
|:-------------------------------------------------------------------------------------------|:------------------------|
| $CONTENT_ID                                                                                | l'id du contenu associé |
| toutes les sorties de [la boucle content](./Content) sauf ID, qui est l'id de la relation. |                         |

## Valeurs possibles de tri {#ass-content-order-possible-values}
[Arguments](#ass-content-arguments)

| Valeur croissante                                           | Valeur décroissante        | Champs triés       |
|-------------------------------------------------------------|----------------------------|:-------------------|
| associated_content                                          | associated_content_reverse | associated content |
| toutes les valeurs de tri de [la boucle content](./Content) |                            |                    |