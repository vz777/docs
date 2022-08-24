---
title: Events
sidebar_position: 9
---

Thelia dispatch a lot of events during various workflows : account creation, order process, ...    
You can listen any of this event to add or replace logic. Or add your own events that can be listened by other modules.    
More info for Event dispatcher component can be found on [Symfony documentation](https://symfony.com/doc/current/components/event_dispatcher.html)

To do this you have to create an event subscriber, it's just a simple class that implement the `EventSubscriberInterface` with a `getSubscribedEvents` function to choose what event to listen :
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

### Native events
Thelia native events are all listed in `TheliaEvents` class


### Propel events
Propel dispatch several events during model lifecycle :

| Constant name | Description                            |
|:--------------|:---------------------------------------|
| PRE_SAVE      | Before persisting the object           |
| POST_SAVE     | After persisting the object            |
| PRE_INSERT    | Before inserting to database           |
| POST_INSERT   | After inserting to database            |
| PRE_UPDATE    | Before updating the object in database |
| POST_UPDATE   | After updating the object in database  |
| PRE_DELETE    | Before deleting the object in database |
| POST_DELETE   | After deleting the object in database  |

Those constants are accessible to the class of model name suffixed by Event.    
For example to listen product update use this event `ProductEvent::POST_UPDATE`

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
