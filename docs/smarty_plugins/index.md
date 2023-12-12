---
title: Smarty plugins
---

Pour créer un plugin smarty dans Thelia, créez une nouvelle classe qui étend
`TheliaSmarty\Template\AbstractSmartyPlugin`, ensuite, créez une fonction appelée  `getPluginDescriptors`
qui répertorie et décrit tous les plugins que vous souhaitez créer (vous pouvez créer autant de plugins que vous le souhaitez dans une seule classe). Un plugin Smarty est décrit comme suit :
```php
new SmartyPluginDescriptor(
    'function',
    'myFunction',
    $this,
    'doMyFunction'
)
```

Le premier paramètre est le type de plugin ; vous pouvez trouver plus d'informations [ici](https://smarty-php.github.io/smarty/programmers/plugins.html).
Le deuxième paramètre est le nom que vous devez utiliser dans vos modèles pour appeler votre plugin.
Le troisième paramètre est l'emplacement de la classe de votre fonction. En général, c'est `$this` car vous écrivez la fonction dans la même classe que la déclaration.
 Le quatrième paramètre est le nom de la fonction que vous souhaitez appeler.

Voici un exemple de déclaration de vos plugins :
```php
class MyProjectPlugin extends AbstractSmartyPlugin
{
    public function getPluginDescriptors()
    {
        return [
            new SmartyPluginDescriptor(
                'function',
                'lower',
                 $this,
                'lowerString'
            ),
            new SmartyPluginDescriptor(
                'function',
                'bestProduct',
                $this,
                'getBestProduct'
            )
        ];
    }

    public function lowerString($params)
    {
        return strtolower($params['string']);
    }

    public function getBestProduct($params)
    {
        // Do a query to find your best product and return it
    }
}
```

Utilisation dans les templates Smarty :
```smarty
    {lower string="A String THAT need to be LOWERCASE"} // Some plugins needs params

    {bestProduct} // Other don't
```
