---
title: Smarty plugins
---

To create plugin Smarty in Thelia just create a new class that extend `TheliaSmarty\Template\AbstractSmartyPlugin`, then create function called `getPluginDescriptors`
that list and describe all the plugin you want to create (you can create many plugins as you want in one class).     
A smarty plugin is described like this :
```php
new SmartyPluginDescriptor(
    'function',
    'myFunction',
    $this,
    'doMyFunction'
)
```

First parameter is the type of the plugin more information [here](https://smarty-php.github.io/smarty/programmers/plugins.html)    
Second parameter is the name you have to put in your templates to call you plugin    
Third parameter is where is the function you want to call, in general it's `$this` because you write function in the same class as the description    
Fourth parameter is the name of the function you want to call.

Example :

Declaration of your plugins :
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

Usage :
```smarty
    {lower string="A String THAT need to be LOWERCASE"} // Some plugins needs params
    
    {bestProduct} // Other don't
```