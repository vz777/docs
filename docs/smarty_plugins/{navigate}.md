La fonction `{navigate}` est un moyen pratique de générer des URLs pointant vers des emplacements courants. Cette fonction n'a qu'un seul paramètre `to` qui peut prendre l'une des valeurs suivantes :

| Nom          | Description                                                                                                                                                                       |
|:-------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| current      | L'URL absolue de la page actuelle                                                                                                                                                 |
| previous     | L'URL absolue de la page précédente                                                                                                                                               |
| index        | L'URL absolue de la page d'accueil de la boutique                                                                                                                                 |
| catalog_last | L'URL absolue de la dernière page de catalogue, de produit ou de catégorie consultée. L'URL de la page d'index est renvoyée si aucune page de catalogue n'a encore été consultée. |

Exemple:
- Retourner à la page d'accueil de la boutique : `<a href="{navigate to='index'}">{intl l="Back to home"}</a>`
- Revenir à la page précédente : `<a href="{navigate to='previous'}">{intl l="Back to home"}</a>`
- Recharger la page actuelle : `<a href="{navigate to='current'}">{intl l="Reload !"}</a>`


Vous ne pouvez pas ajouter de paramètres personnalisés à l'URL générée par {navigate}. Pour ce faire, utilisez la fonction [{url}](./{url}) :
`{url path={navigate to="current"} limit="4"}`
De cette manière, le paramètre limit=4 est ajouté à l'URL : `http://www.myshop.com/current-page-url.html?limit=4`
