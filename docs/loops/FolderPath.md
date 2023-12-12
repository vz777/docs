---
title: Folder path
---

La boucle Folder path fournit le chemin dans le catalogue vers un dossier donné. Par exemple, si nous avons un dossier "alpha" situé dans un dossier "alpha_père" qui appartient lui-même au dossier "racine". La boucle Folder path pour le dossier "alpha" renverra "racine", puis "alpha_père", puis "alpha".
`{loop type="folder-path" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#folder-arguments}

| Argument | Description                           | Defaut | Exemple             |
|----------|:--------------------------------------|:------:|:--------------------|
| depth    | La profondeur maximale                |        | Exemple : depth="5" |
| folder * | L'ID d'un seul dossier.               |        | folder="2"          |
| visible  | afficher les dossiers masqués ou non. |  true  | visible="false"     |

Plus les [global arguments](./global_arguments)

## Sorties

| Variable | Value                |
|:---------|:---------------------|
| $ID      | l'id du dossier      |
| $LOCALE  | la locale du dossier |
| $TITLE   | le titre du dossier  |
| $URL     | l'URL du dossier     |

Plus les [global Sorties](./global_Sorties)