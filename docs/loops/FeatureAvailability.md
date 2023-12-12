---
title: Feature availability
---

La boucle Feature availability répertorie les valeurs de caractéristiques prédefinies à choisir dans une liste.
Chaque valeur possible est appelée Feature availability.
C'est l'équivalent de la boucle CARACDISP dans Thelia 1.
`{loop type="feature-availability" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#feature-arguments}

| Argument | Description                                                                         | Defaut | Exemple               |
|----------|:------------------------------------------------------------------------------------|:------:|:----------------------|
| exclude  | Une ou plusieurs ids de feature availability à exclure.                             |        | exclude="456,123"     |
| feature  | Un ou plusieurs ids de feature.                                                     |        | id="2", id="1,4,7"    |
| id       | Un ou plusieurs ids de feature availability.                                        |        | id="2", id="1,4,7"    |
| lang     | Un id de langue                                                                     |        | lang="1"              |
| order    | Une liste de valeurs voir [sorting possible values](#feature-order-possible-values) | manual | order="alpha_reverse" |

Plus les [global arguments](./global_arguments)

## Sorties

| Variable       | Value                                           |
|:---------------|:------------------------------------------------|
| $CHAPO         | le chapo de la feature availability             |
| $DESCRIPTION   | la description de la feature availability       |
| $FEATURE_ID    | L'id de la caractéristique associée             |
| $ID            | l'id de la feature availability                 |
| $IS_TRANSLATED | Vérifie si la feature availability est traduite |
| $LOCALE        | la locale utilisée pour cette recherche         |
| $POSITION      | la position de la feature availability          |
| $POSTSCRIPTUM  | le postscriptum de la feature availability      |
| $TITLE         | le titre de la feature availability             |

Plus les [global Sorties](./global_Sorties)

## Valeurs possibles de tri {#feature-order-possible-values}
[Arguments](#feature-arguments)

| Valeur croissante | Valeur décroissante | Champs triés |
|-------------------|---------------------|:-------------|
| alpha             | alpha-reverse       | title        |
| manual            | manual_reverse      | position     |
