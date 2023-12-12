---
title: Area
---

La boucle area renvoie des informations sur les zones de livraison.
`{loop type="area" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#area-arguments}

| Argument | Description | Default | Exemple |
| ------------- |:-------------| :-------------: | :-------------|
| country      | Une liste d'ids de pays. Seules les zones incluant ces pays seront renvoyées |              | |
| id       | Un id de zone de livraison ou une liste d'ids de zones de livraison. |  | id="2", id="1,4,7" |
| module_id            | Une liste d'ids de modules séparés par des virgules. Si elle n'est pas vide, seules les zones pour les modules spécifiés sont renvoyées. | | |
| order            | 	Une liste de valeurs  <br/> [Expected values](#area-order-possible-values) | manual | order="alpha" |
| unassigned            | Si vrai, renvoie les zones de livraison non attribuées à un module de livraison. |  |  |
| with_zone            |	Un id de module. Renvoie les zones de livraison qui sont attribuées à cet id. |  |  |
| without_zone            | Un id de module. Renvoie les zones de livraison qui ne sont pas attribuées à cet id de module. |  |  |

Plus les [global arguments](./global_arguments)

## Sorties

| Variable   | Value                                  |
| :--------  | :------------------------------------- |
| $ID	     | l'id de la zone de livraison           |
| $NAME	     | le nom de la zone de livraison         |
| $POSTAGE	 |  |

Plus les [global Sorties](./global_Sorties)

## Valeurs possibles de tri {#area-order-possible-values}
[Arguments](#area-arguments)

| Valeur croissante | Valeur décroissante  | Champs triés |
|-----------------|-------------------|:--------------|
| alpha           | alpha-reverse     | title         |
| id              | id-reverse        |  ID order     |
