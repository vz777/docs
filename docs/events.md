---
title: Events
sidebar_position: 9
---


Thelia déclenche un grand nombre d'événements au cours de différents process : création de compte, traitement des commandes, ...
Vous pouvez écouter n'importe lequel de ces événements pour ajouter ou remplacer de la logique. Ou ajouter vos propres événements qui peuvent être écoutés par d'autres modules.
Plus d'informations sur le composant Event dispatcher peuvent être trouvées sur [Symfony documentation](https://symfony.com/doc/current/components/event_dispatcher.html)


Pour faire cela, vous devez créer un observateur d'événement, c'est juste une classe simple qui implémente l'interface `EventSubscriberInterface` avec une fonction `getSubscribedEvents` pour choisir l'événement à écouter :
```php
<?php

namespace MyModule\EventListener;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Thelia\Core\Event\TheliaEvents;

class LogoutListener implements EventSubscriberInterface
{
    protected $requestStack;

    public function __construct(RequestStack $requestStack)
    {
        $this->requestStack = $requestStack;
    }


    public static function getSubscribedEvents($event)
    {
        // return the subscribed events, their methods and priorities
        return [
            TheliaEvents::CUSTOMER_LOGOUT => ['onCustomerLogout', 30]
        ];
    }

    public function onCustomerLogout()
    {
       // Do what you want at customer logout
    }
}
```

### Événements natifs
Les événements natifs de Thelia sont tous listés dans la classe `TheliaEvents`.


### Événements Propel
Propel déclenche plusieurs événements pendant le cycle de vie du modèle :


| Nom de la constante                                                    | Description                                             |
|:-----------------------------------------------------------------------|:--------------------------------------------------------|
| PRE_SAVE                                                               | Avant la persistance de l'objet                         |
| POST_SAVE                                                              | Après la persistance de l'objet                         |
| PRE_INSERT                                                             | Avant l'insertion dans la base de données               |
| POST_INSERT                                                            | Après l'insertion dans la base de données               |
| PRE_UPDATE                                                             | Avant la mise à jour de l'objet dans la base de données |
| POST_UPDATE                                                            | Après la mise à jour de l'objet dans la base de données |
| PRE_DELETE                                                             | Avant la suppression de l'objet dans la base de données |
| POST_DELETE - Après la suppression de l'objet dans la base de données. |                                                         |

Ces constantes sont accessibles pour la classe dont le nom de modèle est suffixé par Event.
Par exemple, pour écouter la mise à jour d'un produit, utilisez l'événement `ProductEvent::POST_UPDATE`

```php
<?php

namespace MyModule\EventListener;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Thelia\Model\Event\ProductEvent;

class ProductListener implements EventSubscriberInterface
{
    public static function getSubscribedEvents($event)
    {
        // return the subscribed events, their methods and priorities
        return [
            ProductEvent::POST_UPDATE => ['postProductUpdate', 30]
        ];
    }

    public function postProductUpdate(ProductEvent $event)
    {
        $productModel = $event->getModel();
       // Do what you want with the product
    }
}
```
