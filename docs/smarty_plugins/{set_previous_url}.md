Dans la plupart des cas, Thelia définit automatiquement les URL précédentes, de sorte que `{navigate to='previous'}` générera l'URL de la page précédemment visitée par votre client. Cependant, dans certains cas, vous voudrez peut-être définir vous-même l'URL de la page précédente, de sorte que vos clients reviendront à une page spécifique plutôt qu'à la page qu'ils ont visitée avant.

La fonction `{set_previous_url}` permet de définir l'URL de la page qui deviendra la page précédente :
`{set_previous_url path='path/to/some/page'}`

Pour obtenir les paramètres possibles de `{set_previous_url}`, veuillez consulter la fonction [{url}](./{url}).

Vous pouvez également vouloir empêcher une page de devenir la "page précédente". Pour ce faire, utilisez le paramètre `ignore_current`, et placez cet appel quelque part dans la page :
`{set_previous_url ignore_current=1}`

Un exemple typique est la page de connexion `login` et/ou la page d'inscription `register`, où l'utilisateur doit revenir à l'endroit où il se trouvait avant d'entrer ses informations d'identification (panier ou page de commande), et non à la page d'inscription/connexion elle-même.
