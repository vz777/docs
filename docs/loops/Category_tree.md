---
title: Category tree
---

La boucle Category tree permet d'obtenir une arborescence de catégories à partir d'une catégorie donnée jusqu'à une profondeur donnée.
`{loop type="category-tree" name="the-loop-name" [argument="value"], [...]}`

## Arguments

| Argument   | Description                                                | Defaut | Exemple         |
|------------|:-----------------------------------------------------------|:------:|:----------------|
| category * | L'id d'une seule categorie.                                |        | category="2"    |
| depth      | La profondeur maximale.                                    |        | depth="5"       |
| exclude    | Un ou plusieurs ids de catégories à exclure des résultats. |        | exclude="5,72"  |
| return_url | Booléen permettant la génération des URL.                  |  yes   | return_url="no" |
| visible    | Afficher ou non les catégories masquées.                   |  true  | visible="false" |

Ainsi que les [arguments communs](./global_arguments)

## Sorties

| Variable     | Valeur                                  |
|:-------------|:----------------------------------------|
| $CHILD_COUNT |                                         |
| $ID          | l'id de la catégorie                    |
| $LEVEL       |                                         |
| $PARENT      | la catégorie parente                    |
| $PREV_LEVEL  |                                         |
| $TITLE       | le titre de la catégorie                |
| $URL         | l'URL de la catégorie                   |
| $VISIBLE     | whatever the category is visible or not |

Plus les [paramètres de sorties communs](./global_outputs)

## Exemples

Je veux afficher une liste déroulante avec toutes les catégories visibles.
```smarty
<select name="category">
    {loop name="categories-tree" type="category-tree" category="0"}
        <option value="{$ID}">{"-"|str_repeat:$LEVEL} {$TITLE} {if $CHILD_COUNT != 0}({$CHILD_COUNT}){/if}</option>
    {/loop}
</select>
```