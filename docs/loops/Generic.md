---
title: Generic
---

La boucle Generic peut renvoyer n'importe quelle table présente dans votre base de données et configurée avec Propel. Cette boucle est souvent utile sur votre propre table de module car la plupart des tables de Thelia ont déjà des boucles dédiées.`{loop type="generic" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#area-arguments}

| Argument   | Description                                                                                                                         |             Default              | Exemple                             |
|------------|:------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------:|:------------------------------------|
| table_name | Le nom de la table que vous souhaitez interroger                                                                                    |                                  |                                     |
| filters    | Un ou plusieurs filtres à appliquer sur les colonnes dans ce format  <code>column_name:value1,value2&#124;other_column:value</code> |                                  | filters="id:1,3&#124;visible:1"     |
| order      | Une ou plusieurs valeurs de tri à appliquer sur les colonnes dans ce format  <code>column_name:DESC&#124;other_column:ASC</code>    |                                  | order="id:DESC&#124;created_at:ASC" |
| locale     | La locale pour les colonnes traduites                                                                                               | La locale actuelle de la session |                                     |

Plus les [global arguments](./global_arguments)

## Sorties

Cette boucle renverra chaque colonne de la table sélectionnée et les colonnes de la table i18n associée si la table est traduisible. Les champs sont en MAJUSCULES.

Plus les [global Sorties](./global_Sorties)

## Exemples

Je veux afficher tous les produits visibles et non virtuels triés par date de création (juste pour l'exemple, normalement il est préférable d'utiliser une boucle de produit dédiée)

```smarty
<ul>
    {loop type="generic" name="my_product_loop" table_name="product" filters="visible:1|virtual:0" orders="created_at:DESC"}
        <li>{$ID} {$TITLE} ({$REF})</li>
    {/loop}
</ul>
```
