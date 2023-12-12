---
title: Enrichir Thelia
sidebar_position: 3
toc_max_heading_level: 6
---

# Créer un module

:::attention

Nous vous conseillons de créer un seul module pour toute votre logique, ne créez pas un module par fonctionnalité ou autre.
La seule raison de créer un module séparé est si vous voulez le partager avec la communauté 😉

:::

Pour étendre Thelia, il faut créer un module. Généralement, pour le module principal, nous l'appelons avec le même nom que le projet.

## Structure

Une commande peut vous aider à créer les fichiers de base :

```bash
php Thelia module:generate MyProject
```

Cela générera cette structure dans le répertoire `local\modules`
```
\MyProject
  MyProject.php <- mandatory
  composer.json
  \Config
    config.xml   <- mandatory
    module.xml   <- mandatory
    routing.xml
    schema.xml
  ...
```

- `MyProject.php` est le fichier de base de votre module, il vous aidera à mettre en place certains comportements.
- `module.xml` contient des informations sur le module comme la version du module, la compatibilité et les dépendances avec d'autres modules, l'auteur, ...
- `config.xml` pour déclarer vos services, écouteurs d'événements, boucles, formulaires, commandes ou hooks. Mais grâce à l'autowiring, la plupart du temps vous n'aurez pas besoin de le faire.
- `routing.xml` pour lister les routes de votre application, comme config.xml ce fichier n'est plus très utile car nous pouvons déclarer les routes directement dans les contrôleurs.
- `schema.xml` pour décrire la table de base de données liée à votre module.
- `composer.json` pour vous aider à partager votre module avec la communauté.

Une fois le module créé, vous pouvez aller dans la liste des modules dans votre back-office et l'activer.

## Fichier de base (MyProject.php)

Ce fichier doit étendre la classe `Thelia\Module\BaseModule` (sauf pour les modules [deliveries](#delivery-modules) et [payments](#payment-modules)).
Pendant le cycle de vie d'un module, ces fonctions sont appelées et vous permettent d'appliquer votre propre logique en les écrasant :
- `install(ConnectionInterface $con = null);` Cette méthode est appelée lorsque le plugin est installé pour la première fois.
- `preActivation(ConnectionInterface $con = null);` Cette méthode est appelée avant l'activation du module, et peut annuler l'activation en retournant false.
- `postActivation(ConnectionInterface $con = null);` Cette méthode est appelée après que le module ait été activé avec succès.
- `preDeactivation(ConnectionInterface $con = null);` Cette méthode est appelée avant la désactivation du module, et peut annuler la désactivation en renvoyant false.
- `postDeactivation(ConnectionInterface $con = null);` Cette méthode est appelée après que le module ait été désactivé avec succès.
- `update($currentVersion, $newVersion, ConnectionInterface $con = null);` Cette méthode est appelée lors d'un rafraîchissement du module si la version précédente dans module.xml est différente de la version actuelle.

## Contrôleurs
Les contrôleurs fonctionnent de la même manière que les contrôleurs Symfony sauf que dans Thelia il y a 2 types de contrôleurs :
- Les contrôleurs front qui étendent `BaseFrontController` lorsque vous appelez un rendu dans ce contrôleur, Thelia cherchera le template dans le répertoire frontOffice.
- Les contrôleurs admin qui étendent `BaseAdminController` lorsque vous appelez un rendu dans celui-ci, Thelia cherchera le modèle dans le répertoire backOffice et toutes les routes dans ces contrôleurs sont automatiquement sécurisées de sorte que seuls les administrateurs connectés peuvent y accéder.

## Modules de livraison

### Implémentation d'un module de livraison

Pour un module de livraison, la classe principale doit étendre l'interface ``Thelia\Module\AbstractDeliveryModule`` et implémenter les méthodes ``getPostage`` et ``isValidDelivery``.

#### `isValidDelivery()`

Cette méthode doit retourner un `booléen`.
Si `true`, le module de livraison est affiché sur le front office par la boucle de livraison. Si `false`, le module n'est pas affiché.

Ceci est utile si la solution de livraison a des limitations et ne peut pas être utilisée. Par exemple, Colissimo ne peut pas être utilisé si le poids total du panier du client est supérieur à 30 Kg.

Vous pouvez également utiliser cette méthode pour restreindre l'accès à votre module à certaines adresses IP pendant la phase de test.

```php
/**
 * This method is called by the Delivery loop, to check if the current module has to be displayed to the customer.
 * Override it to implements your delivery rules/
 *
 * If you return true, the delivery method will de displayed to the customer
 * If you return false, the delivery method will not be displayed
 *
 * @param Country $country the country to deliver to.
 *
 * @return boolean
 */
public abstract function isValidDelivery(Country $country)
{
    // Retrieve the cart weight
    $cartWeight = $this->getRequest()->getSession()->getCart()->getWeight();

    return $cartWeight <= 30;
}
```

#### `getPostage()`

Cette méthode a un argument : le pays pour lequel le prix de livraison doit être calculé.

Si le module ne peut pas calculer le prix pour certaines raisons, il doit lancer une `DeliveryException`, avec un message internationalisé qui décrit le problème.

```php
/**
 * Calculate and return delivery price in the shop's default currency
 *
 * @param Country $country the country to deliver to.
 *
 * @return float the delivery price
 * @throws DeliveryException if the postage price cannot be calculated.
 */
public function getPostage(Country $country)
{
    if (! $this->isValidDelivery($country)) {
        throw new DeliveryException(
            Translator::getInstance()->trans("This module cannot be used on the current cart.")
        );
    }

    $postage = $this->giveMeThePriceOfTheDeliveryInThisCountry($country);

    return $postage;
}
```

## Modules de paiement

### Processus de paiement

Le paiement est disponible une fois que le client est connecté, qu'il a des produits dans son panier et qu'il a choisi une méthode de livraison.
Voici un processus de paiement typique :

1. Le client sélectionne le module de paiement
2. Le client déclenche le paiement (en cliquant sur le bouton "Payer" sur le front office)
3. La méthode pay() du module de paiement sélectionné est appelée par Thelia
4. La méthode pay() gère le processus de paiement, qui peut consister (en fonction du module) à :
    - Appeler un service web ou une API spécifique à la plateforme.
    - Soumettre un formulaire contenant des paramètres de paiement à une passerelle de paiement.
    - Rien (comme dans le cas d'un chèque ou d'un virement bancaire).
    - Autre logique spécifique.
5. Si le paiement est réussi, le client est redirigé vers une page de remerciement.
6. Si le paiement échoue, le client est redirigé vers une page "Oops, sorry".

### Modèles standard

Dans le modèle standard du front-office, trois fichiers modèles fournissent une manière commune et standard d'interagir avec le client :

- `order-placed.html`, pour indiquer au client que son paiement a été effectué avec succès.
- `order-failed.html`, pour indiquer au client que son paiement a échoué, et lui proposer de réessayer.
- `order-payment-gateway.html`, pour fournir un template standard pour soumettre des données à la passerelle de paiement. Ce fichier de template n'est pas utilisé par les modules qui n'envoient pas de données de formulaire à la passerelle de paiement.

Ces modèles permettent une intégration immédiate du module dans un modèle de boutique, mais il est toujours possible pour un module de fournir ses propres modèles.

### Implémentation d'un module de paiement

Pour un module de paiement, la classe principale doit étendre l'interface `Thelia\Module\AbstractPaymentModule` et implémenter les méthodes ``isValidPayment`` et ``pay``.

#### `isValidPayment()`

Cette méthode doit retourner un booléen. Si `true`, le module de paiement est affiché sur le front office par la boucle de paiement. Si `false`, le module n'est pas affiché.

Ceci est utile si la solution de paiement a des limitations et ne peut pas être utilisée. Par exemple, PayPal ne peut pas être utilisé s'il y a plus de 10 produits dans le panier du client et/ou si le montant total de la commande est supérieur à 8000 €.

Vous pouvez également utiliser cette méthode pour restreindre l'accès à votre module à certaines adresses IP pendant la phase de test.

```php
/**
*
* This method is called by the Payment loop.
*
* If you return true, the payment method will be displayed
* If you return false, the payment method will not be displayed
*
* @return boolean
*/
public function isValidPayment()
{
    // At this point, the order does not exist yet in the database. We have to get
    // item count from the customer cart.

    /** @var Session $session */
    $session = $this->getRequest()->getSession();

    /** @var Cart $cart */
    $cart = $session->getCart();

    $cartContentCount = $cart->countCartItems();

    // BaseModule::getCurrentOrderTotalAmount() is a convenient methods
    // to get order total from the current customer cart.

    $orderTotal = $this->getCurrentOrderTotalAmount();

    return $cartContentCount <= 10 && $orderTotal < 8000;
}
```

#### `pay()`

La méthode `pay()` est la méthode la plus utile d'un module de paiement : elle effectue le paiement de la commande en cours, conformément aux exigences du système de paiement :

- soumettre un formulaire qui redirige le client vers la passerelle de paiement,
- invoquer un service web, une API spécifique, etc. pour effectuer le paiement à l'intérieur de la méthode, et rediriger l'utilisateur vers le résultat (succès/échec) à la fin du processus
- lancer un processus spécifique, géré par un contrôleur de module
- quels que soient vos besoins

La commande en cours est passée en paramètre à la méthode `pay()`.

La méthode doit retourner un objet ``Thelia\Core\HttpFoundation\NResponse``. Alternativement, en fonction de vos besoins spécifiques, vous pouvez rediriger le client vers une autre URL.

Pour utiliser le modèle standard `order-payment-gateway.html`, il suffit de générer un tableau de couples (nom, valeur) avec les données requises par la passerelle bancaire. Ensuite, envoyez-le au modèle avec l'URL de la passerelle de paiement en utilisant la méthode `generateGatewayFormResponse($order, $gatewayUrl, $formData)`.
Le formulaire sera automatiquement soumis et le client sera redirigé vers la passerelle de paiement.

Exemple pour le module de paiement Payzen :

```php
/**
 * Payment gateway invocation
 *
 * @param  Order $order processed order
 * @return Response the payment form
 */
protected function pay(Order $order)
{
    $payzen_params = $this->getPayzenParameters($order, 'SINGLE');

    // Convert files into standard var => value array
    $html_params = array();

    /** @var PayzenField $field */
    foreach($payzen_params as $name => $field) {
        $html_params[$name] = $field->getValue();
    }

    // Be sure to have a valid platform URL, otherwise give up
    if (false === $platformUrl = PayzenConfigQuery::read('platform_url', false)) {
        throw new \InvalidArgumentException(Translator::getInstance()->trans("The platform URL is not defined, please check Payzen module configuration."));
    }

    // Generate the form
    return $this->generateGatewayFormResponse($order, $platformUrl, $html_params);
}
```

Si vous avez une API spécifique, appelez-la avec les paramètres requis, et en fonction du résultat, redirigez vers la page de succès ou d'échec.

```php
/**
 * Payment gateway invocation
 *
 * @param  Order $order processed order
 * @return Response the payment form
 */
protected function pay(Order $order)
{
    $api = new SamplePaymentApi();

    // Invoke API
    $result = $api->performPayment($with_some_parameters);

    $returnUrl = $result === API::SUCCESS ? $this->getPaymentSuccessPageUrl(): $this->getPaymentFailurePageUrl();

    Redirect::exec($returnUrl);
 }
```

#### `manageStockOnCreation()`


Vous pouvez décider avec cette fonction si votre module de paiement diminue le stock lorsque la commande est créée ou lorsque le statut de la commande passe à "paid".

Retourne `true` pour décrémenter le stock à la création de la commande. C'est la valeur de retour par défaut.
Retourne `false` pour décrémenter le stock lorsque le statut de la commande passe à "paid".

```php
/**
* Decrement stock on order creation
**/
public function manageStockOnCreation()
{
    return true;
}
```

```php
/**
* Decrement stock when status change to paid
**/
public function manageStockOnCreation()
{
    return false;
}
```

### Traitement des rappels du système de paiement

La plupart des plateformes de paiement proposent un système de callback, pour notifier à votre module le résultat du paiement. Le callback consiste souvent à appeler une URL sur votre serveur, l'URL de retour.

#### Créer une route de rappel de paiement

L'URL de rappel invoquera une méthode dans votre contrôleur de paiement. Ce contrôleur peut étendre la classe abstraite `Thelia\Modules\BasePaymentModuleController`, qui fournit des méthodes utiles pour la confirmation des paiements :

- `getLog()` : renvoie une instance de `Tlog` vers un fichier journal spécifique au module. Le nom du fichier est *module_code*.log, et il est situé dans le répertoire log. Par exemple, le fichier journal du module Payzen est `payzen.log`.

- `confirmPayment($orderId)` : cette méthode permet de confirmer le paiement de la commande dont l'identifiant est `$orderId`. La méthode met à jour le statut de la commande à PAID, et envoie les événements nécessaires.

- `cancelPayment($orderId)` : certains systèmes de paiement peuvent notifier l'annulation d'une commande déjà payée via l'URL de retour. Appelez cette méthode dans ce cas, pour annuler le paiement d'une commande déjà payée avec l'ID `$orderId`. Le statut de la commande sera mis à `NOT_PAID`, et les événements nécessaires seront envoyés.

- `getOrder($orderId)` : renvoie l'objet Order pour l'ID de la commande `$orderId`, ou génère une erreur si la commande n'a pas été trouvée.

- `redirectToSuccessPage($orderId)` : redirige le client vers la page standard de paiement réussi. Ne l'utilisez que si votre contrôleur est invoqué dans la portée de la requête du client.

- `redirectToFailurePage($orderId)` : redirige le client vers la page standard de paiement échoué. Ne l'utilisez que si votre contrôleur est invoqué dans la portée de la requête du client.

Votre contrôleur doit implémenter la méthode `getModuleCode()`, qui renvoie le code de votre module, c'est-à-dire le nom de la classe principale du module. Par exemple, "Payzen" pour le module Payzen.

Votre contrôleur doit effectuer toutes les vérifications nécessaires avant d'appeler `confirmPayment()`, afin de s'assurer que le paiement du client est valide.
