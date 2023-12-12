Cette fonction Smarty construit une URL absolue à partir d'un chemin de route.


## chemin
La valeur du paramètre path est le chemin de la route dont vous souhaitez obtenir l'URL.

Par exemple, pour obtenir l'URL de la route /account/password :
`{url path="/account/password"}` => `http://www.yourshop.com/account/password`

### Paramètres dynamiques
Dans certains cas, vous devez injecter un paramètre dynamique dans votre chemin. Le paramètre utilise le même comportement que la fonction `{intl}`. Chaque `%varname` trouvé dans la chaîne sera remplacé par la valeur du paramètre `varname`.
`{url path="/product/%id" id=$product_id}` => `http://www.yourshop.com/product/3`

### Paramètres supplémentaires pour l'URL générée
Vous pouvez ajouter autant de paramètres que vous le souhaitez à l'URL générée.
`{url path="/contact" myvar="1" myothervar="2"}` => `http://www.yourshop.com/contact?myvar=1&myothervar=2`

### noamp
En définissant noamp=1, tous les & seront échappés en tant que &amp; s'ils sont présents dans l'URL générée.


## file
La valeur du paramètre file est le chemin absolu (à partir de /web) d'un fichier réel qui sera servi par votre serveur Web et non traité par Thelia.

Par exemple, si vous placez un fichier guide.pdf dans le répertoire /web, l'URL de ce fichier est :
`{url file="/guide.pdf"}` => `http://www.yourshop.com/guide.pdf`