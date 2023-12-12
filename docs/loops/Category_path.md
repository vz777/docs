---
title: Category path
---

La boucle Category path fournit le chemin dans le catalogue vers une catégorie donnée. Par exemple, si nous avons une catégorie "alpha" se trouvant dans une catégorie "alpha_père" qui appartient elle-même à la catégorie "racine". La boucle Chemin de catégorie pour la catégorie "alpha" renverra "racine", puis "alpha_père", puis "alpha".
`{loop type="category-path" name="the-loop-name" [argument="value"], [...]}`

## Arguments

| Argument   | Description                              | Defaut | Exemple         |
|------------|:-----------------------------------------|:------:|:----------------|
| category * | L'id d'une seule categorie.              |        | category="2"    |
| depth      | La profondeur maximale                   |        | depth="5"       |
| visible    | afficher les catégories masquées ou non. |  true  | visible="false" |

Ainsi que les [arguments communs](./global_arguments)

## Sorties

| Variable | Valeur                   |
|:---------|:-------------------------|
| $ID      | l'id de la catégorie     |
| $PARENT  | la catégorie parente     |
| $TITLE   | le titre de la catégorie |
| $URL     | l'URL de la catégorie    |

Plus les [paramètres de sorties communs](./global_outputs)

## Exemples

Je veux afficher un fil d'Ariane avec les catégories parentes.
```smarty
<ul class="breadcrumb">
    {loop name="category_path" type="category-path" category="{category attr="id"}"}
    <li>
    {if $LOOP_COUNT == $LOOP_TOTAL}
        <span class="current">{$TITLE}</span>
    {else}
        <a href="{$URL}">{$TITLE}</a>
    {/if}
    </li>
    {/loop}
</ul>
```