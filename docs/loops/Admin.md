---
title: Admin
---

La boucle d'administrateur affiche les informations sur les administrateurs.
`{loop type="admin" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#pse-arguments}

| Argument | Description                                                  | Defaut | Exemple                      |
|----------|:-------------------------------------------------------------|:------:|:-----------------------------|
| id       | Un id d'administrateur ou une liste d'ids d'administrateurs. |        | id="2", id="1,4,7"           |
| profile  | Un id de profil ou une liste d'ids de profils.               |        | profile="2", profile="1,4,7" |

Ainsi que les [arguments communs](./global_arguments)

## Sorties

| Variable   | Value                     |
|:-----------|:--------------------------|
| $FIRSTNAME | le prénom de l'admin      |
| $ID        | l'id de l'admin           |
| $LASTNAME  | le nom de l'admin         |
| $LOCALE    | la locale de l'admin      |
| $LOGIN     | le login de l'admin       |
| $PROFILE   | l'id de profil de l'admin |

Plus les [paramètres de sorties communs](./global_outputs)