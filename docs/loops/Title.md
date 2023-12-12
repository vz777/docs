---
title: Title
---

La boucle Title répértorie les titres
`{loop type="title" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#title-arguments}

| Argument | Description                  | Default | Exemple            |
|----------|:-----------------------------|:-------:|:-------------------|
| id       | Un ou plusieurs ids de titre |         | id="2", id="1,4,7" |

Ainsi que les [arguments communs](./global_arguments)

## Sorties

| Variable  | Value                                     |
|:----------|:------------------------------------------|
| $DEFAULT  | retourne si le titre est celui par défaut |
| $ID       | l'id du titre                             |
| $LONG     | le titre complet                          |
| $POSITION | la position du titre                      |
| $SHORT    | le titre court                            |

Plus les [paramètres de sorties communs](./global_outputs)