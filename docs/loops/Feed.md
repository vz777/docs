---
title: Feed
---

Obtenez des données à partir d'un flux Atom ou RSS.
`{loop type="feed" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#feed-arguments}

| Argument | Description                                                                         | Default | Exemple                                |
|----------|:------------------------------------------------------------------------------------|:-------:|:---------------------------------------|
| timeout  | Délai en secondes après lequel la boucle ferme la connexion avec le serveur distant |         | timeout=10                             |
| url      | Une URL de flux Atom ou RSS.                                                        |         | url='http://thelia.net/feeds/?lang=en' |

Ainsi que les [arguments communs](./global_arguments)

## Sorties

| Variable     | Value                                                   |
|:-------------|:--------------------------------------------------------|
| $AUTHOR      | l'auteur de l'élément du flux                           |
| $DATE        | la date de l'élément du flux, au format horodatage Unix |
| $DESCRIPTION | la description de l'élément du flux                     |
| $TITLE       | le titre de l'élément du flux                           |
| $URL         | l'URL de l'élément du flux                              |

Plus les [paramètres de sorties communs](./global_outputs)