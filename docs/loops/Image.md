---
title: Image
---

La boucle image permet de traiter, mettre en cache et afficher des images provenant de différentes sources telles que les catégories, les contenus, les dossiers, etc.
`{loop type="image" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#image-arguments}

| Argument                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Defaut | Exemple                                             |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|-----------------------------------------------------|
| allow_zoom               | Si vrai, la boucle est autorisée à redimensionner une image pour correspondre à la largeur et à la hauteur requises, provoquant, dans la plupart des cas, une perte de qualité. Si faux, l'image ne sera jamais agrandie. La valeur par défaut est faux.                                                                                                                                                                                                                                                                                                                                                                                  |        | allow_zoom="true"                                   |
| background_color         | La couleur appliquée aux parties vides de l'image lors du traitement. Utilisez le format de couleur rgb ou rrggbb.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |        | background_color="cc8000" or background_color="fff" |
| base64                   | Si vrai, la boucle produira une nouvelle sortie avec l'image en base64.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |        | base64="true"                                       |
| brand **                 | un id de marque. La boucle renverra les images de cette marque.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |        | brand="2"                                           |
| category **              | un id de catégorie. La boucle renverra les images de cette catégorie.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |        | category="2"                                        |
| content **               | un id de contenu. La boucle renverra les images de ce contenu.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |        | content="2"                                         |
| effects                  | Une ou plusieurs définitions d'effets séparées par des virgules, qui seront appliquées à l'image dans l'ordre spécifié. Veuillez consulter ci-dessous une description détaillée des effets disponibles <br/> [Valeurs attendues](#image-effects-expected-values)                                                                                                                                                                                                                                                                                                                                                                          |        | effects="greyscale,gamma:0.7,vflip"                 |
| exclude                  | Un ou plusieurs ids d'image séparés par des virgules à exclure de la liste.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |        | exclude="456,123"                                   |
| folder **                | un id de dossier. La boucle renverra les images de ce dossier.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |        | folder="2"                                          |
| height                   | Une hauteur en pixels, pour redimensionner l'image. Si seule la hauteur est fournie, le rapport d'aspect de l'image est préservé.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |        | height="200"                                        |
| id                       | Un ou plusieurs ids d'image.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |        | id="2", id="1,4,7"                                  |
| ignore_processing_errors | Si vrai, la boucle renverra un résultat même si le traitement de l'image échoue, et définira la variable PROCESSING_ERROR sur vrai en cas d'erreur. Si faux, les images pour lesquelles le traitement échoue ne sont pas renvoyées.                                                                                                                                                                                                                                                                                                                                                                                                       |        | ignore_processing_errors="false"                    |
| lang                     | Un id de langue, pour spécifier la langue dans laquelle les informations sur l'image seront renvoyées.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |        |                                                     |
| order                    | Une liste de valeurs see [sorting possible values](#image-order-possible-values)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | manual | order="alpha_reverse"                               |
| product **               | un id de produit. La boucle renverra les images de ce produit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |        | product="2"                                         |
| quality                  | La qualité d'image générée, de 0(!) à 100%. La valeur par défaut est de 75% (vous pouvez la modifier dans le panneau d'administration)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |        | quality="70"                                        |
| resize_mode              | Si 'crop', l'image aura la largeur et la hauteur exactes spécifiées et sera rognée si nécessaire. Si l'image source est plus petite que la largeur et/ou la hauteur requises, vous devez définir allow_zoom sur vrai, sinon l'image générée sera plus petite que nécessaire. Si 'borders', l'image aura la largeur et la hauteur exactement spécifiée, et des bordures peuvent être ajoutées. La couleur de la bordure est celle spécifiée par 'background_color'. Si 'none' ou manquant, le rapport d'aspect de l'image est préservé et, en fonction de ce rapport, l'image peut ne pas avoir la largeur et la hauteur exactes requises. |        | resize_mode="crop"                                  |
| rotation                 | L'angle de rotation en degrés (positifs ou négatifs) appliqué à l'image. La couleur de fond des zones vides est celle spécifiée par 'background_color'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |        | rotation="90"                                       |
| source **                | see [Valeurs attendues](#image-source-expected-values)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |        | source="category"                                   |
| source_id                | L'id de l'objet fourni dans le paramètre "source". Uniquement pris en compte si l'argument "source" est présent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |        | source_id="2"                                       |
| visible                  | Booléen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | yes    | visible="no"                                        |
| width                    | Une largeur en pixels, pour redimensionner l'image. Si seule la largeur est fournie, le rapport d'aspect de l'image est préservé.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |        | width="200"                                         |

Ainsi que les [arguments communs](./global_arguments)

## Sorties

| Variable             | Value                                                                                                              |
|----------------------|--------------------------------------------------------------------------------------------------------------------|
| $CHAPO               | le chapo de l'image                                                                                                |
| $DESCRIPTION         | la description de l'image                                                                                          |
| $ID                  | l'ID de l'image                                                                                                    |
| $IMAGE_BASE64        | disponible uniquement si le paramètre base64 est défini sur vrai                                                   |
| $IMAGE_PATH          | Le chemin absolu vers le fichier image généré                                                                      |
| $IMAGE_URL           | L'URL absolue vers l'image générée.                                                                                |
| $LOCALE              | la locale utilisée pour cette recherche                                                                            |
| $OBJECT_ID           | L'ID de l'object                                                                                                   |
| $OBJECT_TYPE         | Le type d'objet (par exemple, produit, catégorie, etc). voir le paramètre 'source'                                 |
| $ORIGINAL_IMAGE_PATH | Le chemin absolu vers le fichier image original                                                                    |
| $ORIGINAL_IMAGE_URL  | L'URL absolue vers l'image originale                                                                               |
| $POSITION            | la position de cette image dans la liste des images de l'objet                                                     |
| $POSTSCRIPTUM        | le postscriptum de l'image                                                                                         |
| $PROCESSING_ERROR    | vrai si le traitement de l'image échoue. Dans ce cas, $IMAGE_URL, $ORIGINAL_IMAGE_URL et $IMAGE_PATH seront vides. |
| $TITLE               | le titre de l'image                                                                                                |
| $VISIBLE             | true if the image is visible. False otherwise                                                                      |

Plus les [paramètres de sorties communs](./global_outputs)

## Exemples

Exemple 1

Redimensionner les images de catégorie en 200x100, en ajoutant des bordures blanches si nécessaire.

```smarty
{loop type="image" name="image_test" category="$ID" width="200" height="100" resize_mode="borders"}
    <img src="{$IMAGE_URL}" alt="{$TITLE}" />
{/loop}
```

Même comportement, en utilisant les paramètres de style "source"

```smarty
{loop type="image" name="image_test" source="category" source_id="$ID" width="200" height="100" resize_mode="borders"}
    <img src="{$IMAGE_URL}" alt="{$TITLE}" />
{/loop}
```

Exemple 2

Redimensionner 1 image de catégorie en 200x100, en la recadrant si nécessaire, et transformer l'image en niveaux de gris, avec un gamma augmenté à 1,1

```smarty
="grayscale,gamma:1.1" limit="1"}
    <a href="{$ORIGINAL_IMAGE_URL}"><img src="{$IMAGE_URL}" alt="{$TITLE}" /></a>
{/loop}
```


## Valeurs possibles de tri {#image-order-possible-values}
[Arguments](#image-arguments)

| Valeur croissante | Valeur décroissante | Champs triés        |
|-------------------|---------------------|:--------------------|
| alpha             | alpha_reverse       | Title               |
| manual            | manual-reverse      | position            |
| random            |                     | pseudo-random order |

## effects Valeurs attendues {#image-effects-expected-values}
[Arguments](#image-arguments)

| Argument                 | Description                                                           | Exemple          |
|--------------------------|-----------------------------------------------------------------------|:-----------------|
| blur                     | blur the image                                                        | blur:5           |
| colorize:color           | apply a color mask to the image. The color format is $rgb or $rrggbb. | colorize:$ff2244 |
| gamma:value              | change the image Gamma to the specified value.                        | gamma:0.7        |
| grayscale or greyscale   | switch image to grayscale                                             |                  |
| hflip or horizontal_flip | flip the image horizontally.                                          |                  |
| negative                 | transform the image in its negative equivalent.                       |                  |
| vflip or vertical_flip   | flip the image vertically.                                            |                  |

## Souce Valeurs attendues {#image-source-expected-values}
[Arguments](#image-arguments)

| value    |
|----------|
| brand    |
| category |
| content  |
| folder   |
| module   |
| product  |
