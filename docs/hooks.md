---
title: Hooks
sidebar_position: 8
toc_max_heading_level: 5
---

Les Hooks sont des points d'entrée dans les templates où les modules peuvent insérer leur propre code, ajouter de nouvelles fonctionnalités et changer l'apparence du site.


## Comment fonctionnent les hooks

Le principe des hooks est simple. Le template inclut une fonction ou un bloc de hook dans le code Smarty. Lorsque Smarty analyse cette fonction/bloc, un événement est créé et envoyé aux méthodes des modules qui écoutent cet événement.
Les modules qui écoutent ces événements génèrent du contenu et l'ajoutent directement à l'événement. Lorsque l'événement est terminé, le contenu est injecté à la place de la fonction/du bloc sous forme de balises rendues.
Il existe deux types distincts de hooks que vous pouvez étendre : la fonction de hooks de base et le hookbloc.
Vous pouvez voir quels hooks sont présents dans une page en ajoutant le paramètre de requête `SHOW_HOOK=1` dans l'url (ce paramètre ne fonctionne que si le mode debug est activé) ou voir ci-dessous pour la liste de tous les [hooks natifs](#liste-de-hook-par-défaut).

## Ecouteur de hooks
Pour insérer des données dans les hooks, vous devez créer une classe qui étend `BaseHook` et implémenter une méthode `getSubscribedHooks` pour définir quels hooks vous voulez écouter.
```php
<?php

namespace HookNavigation\Hook;

use Thelia\Core\Hook\BaseHook;

class FrontHook extends BaseHook
{
    public static function getSubscribedHooks()
    {
        return [
            "main.footer-body" => [
                [
                    "type" => "front",
                    "method" => "onMainFooterBody"
                ],
                [
                    "type" => "front",
                    "method" => "otherOnMainFooterBody"
                ],
            ],
            "main.footer-bottom" => [
                [
                    "type" => "front",
                    "method" => "onMainFooterBottom"
                ]
            ]
        ];
    }
}
```

Ensuite, la fonction associée à l'écouteur dépend si vous écoutez une [Fonction de hook](#fonction-de-hook) ou un [Hook Block](#hook-block).



## Fonction de hook
### Smarty
La fonction smarty `{hook name="hookname" ... }` injecte le code généré lors de la propagation de l'événement.

Les fragments de code HTML générés dans les modules sont simplement concaténés au balisage rendu par l'événement.

Ces hooks transmettent un objet `Thelia\Core\Event\Hook\HookRenderEvent` aux écouteurs d'événements enregistrés.

Exemple d'une fonction de hook :

Dans cet exemple, le code du hook est product.details.top et le code généré par les modules qui écoutent ce hook est concaténé et injecté ici.
Remarque : vous pouvez ajouter des arguments à la fonction smarty (ou au bloc) pour aider à identifier le contexte de la requête. Ici, nous avons l'identifiant du produit qui vous permet d'effectuer des tests sur ce produit et d'afficher les informations relatives au produit courant.
```smarty
...
<section id="product-details">
    {hook name="product.details.top" product="{$ID}"}
...
</section>
```

### Méthode d'écouteur
```php
<?php

namespace HookNavigation\Hook;

use Thelia\Core\Event\Hook\HookRenderEvent;
use Thelia\Core\Hook\BaseHook;

class FrontHook extends BaseHook
{
    public function onMainFooterBottom(HookRenderEvent $event): void
    {
        $content = $this->render('my-main-footer-bottom.html');
        $event->add($content);
    }

    public static function getSubscribedHooks()
    {
        return [
            "main.footer-bottom" => [
                [
                    "type" => "front",
                    "method" => "onMainFooterBottom"
                ]
            ]
        ];
    }
}
```

## Hook block

### Smarty
The bloc de hooks `{hookblock name="hookname" ... }...{/hookblock}` fonctionne de concert avec le `{forhook rel="hookname" ... }{/forhook}` et vous permet d'itérer sur n'importe quel nombre de fragments que vos modules ont générés et ajoutés au hook via l'événement `HookRenderBLockEvent`.

Ces fragments sont juste des tableaux associatifs (tables de hachage). forhook itère à travers ces tableaux de fragments, en faisant correspondre leurs clés à des variables Smarty que vous pouvez utiliser dans votre modèle, tout comme vous passeriez un tableau associatif de variables de modèle lors du rendu d'un fichier de modèle Smarty normal.

Ce type de hook est utile lorsque vous souhaitez respecter la mise en page du modèle et simplement ajouter les informations pertinentes de votre module. Par exemple, si vous avez une liste de blocs dans la barre latérale qui ont la même apparence (barre de titre, un contenu, un lien) et que vous voulez ajouter votre bloc. Vos modules peuvent étendre ce hook en écoutant ce hook et en ajoutant un tableau de fragments avec des données de titre, de contenu et de lien à l'objet d'événement passé.

Ces hooks transmettent un objet `Thelia\Core\Event\Hook\HookRenderBlockEvent` aux écouteurs d'événements enregistrés.

Exemple de hook block:

```smarty
<section id="product-tabs">
    {hookblock name="product.additional" product="{product attr="id"}"}
        <ul class="nav nav-tabs" role="tablist">
            <li class="active" role="presentation"><a id="tab1" href="#description" data-toggle="tab" role="tab">{intl l="Description"}</a></li>

            {forhook rel="product.additional"}
                <li role="presentation"><a id="tab{$id}" href="#{$id}" data-toggle="tab" role="tab">{$title}</a></li>
            {/forhook}

        </ul>
        <div class="tab-content">
            <div class="tab-pane active in" id="description" itemprop="description" role="tabpanel" aria-labelledby="tab1">
                <p>{$DESCRIPTION|default:'N/A' nofilter}</p>
            </div>

            {forhook rel="product.additional"}
                <div class="tab-pane" id="{$id}" role="tabpanel" aria-labelledby="tab{$id}">
                    {$content nofilter}
                </div>
            {/forhook}

        </div>
    {/hookblock}
</section>
```

### Méthode d'écouteur
```php
<?php

namespace HookNavigation\Hook;

use Thelia\Core\Event\Hook\HookRenderBlockEvent;
use Thelia\Core\Hook\BaseHook;

class FrontHook extends BaseHook
{
    public function onMainFooterBody(HookRenderBlockEvent $event): void
    {
        $event->add([
            'id' => 'article-footer-body',
            'class' => 'article-links',
            'title' => $this->trans('Latest articles', [], HookNavigation::MESSAGE_DOMAIN),
            'content' => $this->render('article-links.html');
        ]);
        $event->add([
            'id' => 'contact-footer-body',
            'class' => 'contact-links',
            'title' => $this->trans('Contact', [], HookNavigation::MESSAGE_DOMAIN),
            'content' => $this->render('contact-links.html');
        ]);

        // ...
        // As many block as you want
    }

    public static function getSubscribedHooks()
    {
        return [
            "main.footer-body" => [
                [
                    "type" => "front",
                    "method" => "onMainFooterBody"
                ]
            ],
        ];
    }
}
```

## Créer son propre hook
Pour définir un hook dans un template de module, vous devez utiliser la fonction smarty "hook" avec un paramètre "name".
```smarty
{hook name="my_hook_name"}
```

Mais pour informer Thelia que ce hook existe, vous devez le déclarer dans la classe de base de votre module.
Pour ce faire, vous implémentez la méthode `getHooks` et renvoyez une collection de tableaux composés de ces clés :

| Clé         | Description                                                                                                                       |
|:------------|:----------------------------------------------------------------------------------------------------------------------------------|
| code        | Le nom du hook                                                                                                                    |
| type        | Le type de hook, cette valeur correspond aux constantes de `TemplateDefinition` : `FRONT_OFFICE`, `BACK_OFFICE`, `PDF` or `EMAIL` |
| title       | Cette valeur peut être une chaîne de caractères ou un tableau associatif avec la locale comme clé.                                |
| description | Identique au titre pour une description                                                                                           |
| chapo       | Identique au titre pour un chapo                                                                                                  |
| active      | Booléen, si true le hook sera automatiquement activé                                                                              |
| block       | Booléen, mettre à true si il s'agit d'un hookblock (défaut : false)                                                               |

```php
<?php

namespace MyModule;

use Thelia\Module\BaseModule;

class MyModule extends BaseModule
{
  public function getHooks()
  {
     return array(

          // Only register the title in the default language
          array(
              "type" => TemplateDefinition::BACK_OFFICE,
              "code" => "my_super_hook_name",
              "title" => "My hook",
              "description" => "My hook is really, really great",
          ),

         // Manage i18n
          array(
              "type" => TemplateDefinition::FRONT_OFFICE,
              "code" => "my_hook_name",
              "title" => array(
                  "fr_FR" => "Mon Hook",
                  "en_US" => "My hook",
              ),
              "description" => array(
                  "fr_FR" => "Mon hook est vraiment super",
                  "en_US" => "My hook is really, really great",
              ),
              "chapo" => array(
                  "fr_FR" => "Mon hook est vraiment super",
                  "en_US" => "My hook is really, really great",
              ),
              "block" => true,
              "active" => true
          )
     );
  }
}
```

## Liste de hook par défaut
### Front office
#### 404.html
*   **404.stylesheet**: Page 404 - CSS stylesheet

*   **404.after-javascript-include**: Page 404 - after javascript include

*   **404.javascript-initialization**: Page 404 - javascript initialization

*   **404.content**: Page 404 - content area


#### account-order.html

*   **account-order.information**: account-order - information

*   **account-order.after-information**: account-order - after-information

*   **account-order.delivery-information**: account-order - delivery-information

*   **account-order.delivery-address**: account-order - delivery address

*   **account-order.invoice-information**: account-order - invoice-information

*   **account-order.invoice-address**: account-order - invoice-address

*   **account-order.invoice-address-bottom**: account-order - invoice-address-bottom

*   **account-order.after-addresses**: account-order - after-addresses

*   **account-order.products-top**: account-order - products-top

*   **account-order.product**: account-order - product

*   **account-order.products-bottom**: account-order - products-bottom

*   **account-order.after-products**: account-order - after-products

*   **account-order.bottom**: account-order - at the bottom

*   **account-order.stylesheet**: account-order - CSS stylesheet

*   **account-order.after-javascript-include**: account-order - after javascript include

*   **account-order.javascript-initialization**: account-order - javascript initialization

*   **account-order.top**: account-order - at the top


#### account-password.html

*   **account-password.bottom**: Change password - at the bottom

*   **account-password.stylesheet**: Change password - CSS stylesheet

*   **account-password.after-javascript-include**: Change password - after javascript include

*   **account-password.javascript-initialization**: Change password - javascript initialization

*   **account-password.top**: Change password - at the top


#### account-update.html

*   **account-update.form-top**: Update customer account - at the top of the form

*   **account-update.form-bottom**: Update customer account - at the bottom of the form

*   **account-update.bottom**: Update customer account - at the bottom

*   **account-update.stylesheet**: Update customer account - CSS stylesheet

*   **account-update.after-javascript-include**: Update customer account - after javascript include

*   **account-update.javascript-initialization**: Update customer account - javascript initialization

*   **account-update.top**: Update customer account - at the top


#### account.html

*   **account.additional**: customer account - additional information

*   **account.bottom**: customer account - at the bottom

*   **account.stylesheet**: customer account - CSS stylesheet

*   **account.after-javascript-include**: customer account - after javascript include

*   **account.javascript-initialization**: customer account - javascript initialization

*   **account.top**: customer account - at the top


#### address-update.html

*   **address-update.form-top**: Address update - at the top of the form

*   **address-update.form-bottom**: Address update - at the bottom of the form

*   **address-update.bottom**: Address update - at the bottom

*   **address-update.stylesheet**: Address update - CSS stylesheet

*   **address-update.after-javascript-include**: Address update - after javascript include

*   **address-update.javascript-initialization**: Address update - javascript initialization

*   **address-update.top**: Address update - at the top


#### address.html

*   **address-create.form-top**: Address creation - at the top of the form

*   **address-create.form-bottom**: Address creation - at the bottom of the form

*   **address-create.bottom**: Address creation - at the bottom

*   **address-create.stylesheet**: Address creation - CSS stylesheet

*   **address-create.after-javascript-include**: Address creation - after javascript include

*   **address-create.javascript-initialization**: Address creation - javascript initialization

*   **address-create.top**: Address creation - at the top


#### articles.html

*   **content.sidebar-body**: Content page - the body of the sidebar

*   **content.sidebar-bottom**: Content page - at the bottom of the sidebar

*   **content.sidebar-top**: Content page - at the top of the sidebar


#### badresponse.html

*   **badresponseorder.after-javascript-include**: Payment failed - after javascript include

*   **badresponseorder.javascript-initialization**: Payment failed - javascript initialization

*   **badresponseorder.stylesheet**: Payment failed - CSS stylesheet


#### brand-menu.html

*   **brand.sidebar-body**: brand - the body of the sidebar

*   **brand.sidebar-bottom**: brand - at the bottom of the sidebar

*   **brand.sidebar-top**: brand - at the top of the sidebar


#### brand.html

*   **brand.main-top**: brand - at the top of the main area

*   **brand.content-top**: brand - before the main content area

*   **brand.content-bottom**: brand - after the main content area

*   **brand.main-bottom**: brand - at the bottom of the main area

*   **brand.main-top**: brand - at the top of the main area

*   **brand.content-top**: brand - before the main content area

*   **brand.content-bottom**: brand - after the main content area

*   **brand.main-bottom**: brand - at the bottom of the main area

*   **brand.bottom**: brand - at the bottom

*   **brand.stylesheet**: brand - CSS stylesheet

*   **brand.after-javascript-include**: brand - after javascript include

*   **brand.javascript-initialization**: brand - javascript initialization

*   **brand.top**: brand - at the top


#### cart.html

*   **cart.bottom**: Cart - at the bottom

*   **cart.after-javascript-include**: Cart - after javascript include

*   **cart.stylesheet**: Cart - CSS stylesheet

*   **cart.javascript-initialization**: Cart - javascript initialization

*   **cart.top**: Cart - at the top


#### category.html

*   **category.main-top**: Category page - at the top of the main area

*   **category.content-top**: Category page - before the main content area

*   **category.content-bottom**: Category page - after the main content area

*   **category.main-bottom**: Category page - at the bottom of the main area

*   **category.bottom**: Category page - at the bottom

*   **category.stylesheet**: Category page - CSS stylesheet

*   **category.after-javascript-include**: Category page - after javascript include

*   **category.javascript-initialization**: Category page - javascript initialization

*   **category.top**: Category page - at the top


#### contact-success.html

*   **contact.success**: Contact page - if successful response

#### contact.html

*   **contact.form-top**: Contact page - at the top of the form

*   **contact.form-bottom**: Contact page - at the bottom of the form

*   **contact.bottom**: Contact page - at the bottom

*   **contact.stylesheet**: Contact page - CSS stylesheet

*   **contact.after-javascript-include**: Contact page - after javascript include

*   **contact.javascript-initialization**: Contact page - javascript initialization

*   **contact.top**: Contact page - at the top


#### content.html

*   **content.main-top**: Content page - at the top of the main area

*   **content.content-top**: Content page - before the main content area

*   **content.content-bottom**: Content page - after the main content area

*   **content.main-bottom**: Content page - at the bottom of the main area

*   **content.bottom**: Content page - at the bottom

*   **content.stylesheet**: Content page - CSS stylesheet

*   **content.after-javascript-include**: Content page - after javascript include

*   **content.javascript-initialization**: Content page - javascript initialization

*   **content.top**: Content page - at the top


#### currency.html

*   **currency.bottom**: Curency selection page - at the bottom

*   **currency.stylesheet**: Curency selection page - CSS stylesheet

*   **currency.after-javascript-include**: Curency selection page - after javascript include

*   **currency.javascript-initialization**: Curency selection page - javascript initialization

*   **currency.top**: Curency selection page - at the top


#### folder.html

*   **folder.main-top**: Folder page - at the top of the main area

*   **folder.content-top**: Folder page - before the main content area

*   **folder.content-bottom**: Folder page - after the main content area

*   **folder.main-bottom**: Folder page - at the bottom of the main area

*   **folder.bottom**: Folder page - at the bottom

*   **folder.stylesheet**: Folder page - CSS stylesheet

*   **folder.after-javascript-include**: Folder page - after javascript include

*   **folder.javascript-initialization**: Folder page - javascript initialization

*   **folder.top**: Folder page - at the top


#### index.html

*   **home.stylesheet**: Home page - CSS stylesheet

*   **home.after-javascript-include**: Home page - after javascript include

*   **home.javascript-initialization**: Home page - javascript initialization

*   **home.body**: Home page - main area


#### language.html

*   **language.bottom**: language selection page - at the bottom

*   **language.stylesheet**: language selection page - CSS stylesheet

*   **language.after-javascript-include**: language selection page - after javascript include

*   **language.javascript-initialization**: language selection page - javascript initialization

*   **language.top**: language selection page - at the top


#### layout.tpl

*   **main.stylesheet**: HTML layout - CSS stylesheet

*   **main.head-bottom**: HTML layout - before the end of the head tag

*   **main.body-top**: HTML layout - after the opening of the body tag

*   **main.header-top**: HTML layout - at the top of the header

*   **main.navbar-secondary**: HTML layout - secondary navigation

*   **main.navbar-primary**: HTML layout - primary navigation

*   **main.header-bottom**: HTML layout - at the bottom of the header

*   **main.content-top**: HTML layout - before the main content area

*   **main.content-bottom**: HTML layout - after the main content area

*   **main.footer-top**: HTML layout - at the top of the footer

*   **main.footer-body**: HTML layout - footer body

*   **main.footer-bottom**: HTML layout - bottom of the footer

*   **main.after-javascript-include**: HTML layout - after javascript include

*   **main.javascript-initialization**: HTML layout - javascript initialization

*   **main.body-bottom**: HTML layout - before the end body tag

*   **main.head-top**: HTML layout - after the opening of the head tag


#### login.html

*   **login.main-top**: Login page - at the top of the main area

*   **login.form-top**: Login page - at the top of the form

*   **login.form-bottom**: Login page - at the bottom of the form

*   **login.main-bottom**: Login page - at the bottom of the main area

*   **login.bottom**: Login page - at the bottom

*   **login.stylesheet**: Login page - CSS stylesheet

*   **login.after-javascript-include**: Login page - after javascript include

*   **login.javascript-initialization**: Login page - javascript initialization

*   **login.top**: Login page - at the top


#### menu.html

*   **category.sidebar-body**: Category page - the body of the sidebar

*   **category.sidebar-bottom**: Category page - at the bottom of the sidebar

*   **category.sidebar-top**: Category page - at the top of the sidebar


#### newsletter.html

*   **newsletter.bottom**: Newsletter page - at the bottom

*   **newsletter.stylesheet**: Newsletter page - CSS stylesheet

*   **newsletter.after-javascript-include**: Newsletter page - after javascript include

*   **newsletter.javascript-initialization**: Newsletter page - javascript initialization

*   **newsletter.top**: Newsletter page - at the top


#### order-delivery-module-list.html

*   **order-delivery.javascript**: Delivery choice - javascript

*   **order-delivery.extra**: Delivery choice - extra area


#### order-delivery.html

*   **order-delivery.form-top**: Delivery choice - at the top of the form

*   **order-delivery.form-bottom**: Delivery choice - at the bottom of the form

*   **order-delivery.bottom**: Delivery choice - at the bottom

*   **order-delivery.javascript-initialization**: Delivery choice - javascript initialization

*   **order-delivery.stylesheet**: Delivery choice - CSS stylesheet

*   **order-delivery.after-javascript-include**: Delivery choice - after javascript include

*   **order-delivery.top**: Delivery choice - at the top


#### order-failed.html

*   **order-failed.bottom**: Order failed - at the bottom

*   **order-failed.stylesheet**: Order failed - CSS stylesheet

*   **order-failed.after-javascript-include**: Order failed - after javascript include

*   **order-failed.javascript-initialization**: Order failed - javascript initialization

*   **order-failed.top**: Order failed - at the top


#### order-invoice.html

*   **order-invoice.delivery-address**: Invoice choice - delivery address

*   **order-invoice.payment-extra**: Invoice choice - extra payment zone

*   **order-invoice.bottom**: Invoice choice - at the bottom

*   **order-invoice.javascript-initialization**: Invoice choice - javascript initialization

*   **order-invoice.stylesheet**: Invoice choice - CSS stylesheet

*   **order-invoice.after-javascript-include**: Invoice choice - after javascript include

*   **order-invoice.top**: Invoice choice - at the top


#### order-payment-gateway.html

*   **order-payment-gateway.javascript**: Payment gateway - javascript

*   **order-payment-gateway.javascript-initialization**: Payment gateway - javascript initialization

*   **order-payment-gateway.stylesheet**: Payment gateway - CSS stylesheet

*   **order-payment-gateway.after-javascript-include**: Payment gateway - after javascript include

*   **order-payment-gateway.body**: Payment gateway - main area


#### order-placed.html

*   **order-placed.additional-payment-info**: Placed order - additional-payment-info

*   **order-placed.stylesheet**: Placed order - CSS stylesheet

*   **order-placed.after-javascript-include**: Placed order - after javascript include

*   **order-placed.javascript-initialization**: Placed order - javascript initialization

*   **order-placed.body**: Placed order - main area


#### password.html

*   **password.form-top**: Lost password - at the top of the form

*   **password.form-bottom**: Lost password - at the bottom of the form

*   **password.bottom**: Lost password - at the bottom

*   **password.stylesheet**: Lost password - CSS stylesheet

*   **password.after-javascript-include**: Lost password - after javascript include

*   **password.javascript-initialization**: Lost password - javascript initialization

*   **password.top**: Lost password - at the top


#### product.html

*   **product.gallery**: Product page - photo gallery

*   **product.details-top**: Product page - at the top of the detail

*   **product.details-bottom**: Product page - at the bottom of the detail area

*   **product.additional**: Product page - additional information

*   **product.bottom**: Product page - at the bottom

*   **product.stylesheet**: Product page - CSS stylesheet

*   **product.after-javascript-include**: Product page - after javascript include

*   **product.javascript-initialization**: Product page - javascript initialization

*   **product.top**: Product page - at the top


#### register.html

*   **register.form-top**: Register - at the top of the form

*   **register.form-bottom**: Register - at the bottom of the form

*   **register.bottom**: Register - at the bottom

*   **register.stylesheet**: Register - CSS stylesheet

*   **register.after-javascript-include**: Register - after javascript include

*   **register.javascript-initialization**: Register - javascript initialization

*   **register.top**: Register - at the top


#### sale.html

*   **sale.bottom**: sale - at the bottom

*   **sale.stylesheet**: sale - CSS stylesheet

*   **sale.after-javascript-include**: sale - after javascript include

*   **sale.javascript-initialization**: sale - javascript initialization

*   **sale.top**: sale - at the top


#### search.html

*   **search.after-javascript-include**: Search page - after javascript include

*   **search.javascript-initialization**: Search page - javascript initialization

*   **search.stylesheet**: Search page - CSS stylesheet


#### single-product.html

*   **singleproduct.bottom**: Product loop - at the bottom

*   **singleproduct.top**: Product loop - at the top


#### sitemap.html

*   **sitemap.bottom**: Sitemap - at the bottom

#### view\_all.html

*   **viewall.bottom**: All Products - at the bottom

*   **viewall.stylesheet**: All Products - CSS stylesheet

*   **viewall.after-javascript-include**: All Products - after javascript include

*   **viewall.javascript-initialization**: All Products - javascript initialization

*   **viewall.top**: All Products - at the top


### Back Office
----------------------------

#### admin-layout.tpl

*   **main.before-topbar**: Layout - before topbar

*   **main.topbar-top**: Layout - at the top of the top bar

*   **main.topbar-bottom**: Layout - at the bottom of the top bar

*   **main.inside-topbar**: Layout - inside top bar

*   **main.after-topbar**: Layout - after top bar

*   **main.topbar-top**: Layout - at the top of the top bar

*   **main.topbar-bottom**: Layout - at the bottom of the top bar

*   **main.before-content**: Layout - before-content

*   **main.after-content**: Layout - after-content

*   **main.before-footer**: Layout - before footer

*   **main.in-footer**: Layout - in footer

*   **main.after-footer**: Layout - after footer

*   **main.footer-js**: Layout - JavaScript

*   **main.head-css**: Layout - CSS


#### admin-logs.html

*   **admin-logs.bottom**: Logs - bottom

*   **admin-logs.js**: Logs - JavaScript

*   **admin-logs.top**: Logs - at the top


#### administrators.html

*   **adminisrators.header**: adminisrators - header

*   **administrators.row**: Administrators - row

*   **administrators.bottom**: Administrators - bottom

*   **administrator.create-form**: Administrator - create form

*   **administrator.update-form**: Administrator - update form

*   **administrator.delete-form**: Administrator - delete form

*   **administrators.js**: Administrators - JavaScript

*   **administrators.top**: Administrators - at the top


#### advanced-configuration.html

*   **advanced-configuration.js**: advanced-configuration - JavaScript

#### attribute-edit.html

*   **attributes-value.table-header**: Attributes value - table header

*   **attributes-value.table-row**: Attributes value - table row

*   **attribute-edit.bottom**: attribute-edit - bottom

*   **attribute-value.create-form**: Attribute value - create form

*   **attribute.id-delete-form**: Attribut - id delete form

*   **attribute.edit-js**: Attribut - Edit JavaScript

*   **wysiwyg.js**: wysiwyg - JavaScript

*   **attribute-edit.top**: attribute-edit - at the top


#### attributes.html

*   **attributes.table-header**: Attributes - table header

*   **attributes.table-row**: Attributes - table row

*   **attributes.bottom**: Attributes - bottom

*   **attribute.create-form**: Attribut - create form

*   **attribute.delete-form**: Attribut - delete form

*   **attribute.add-to-all-form**: Attribut - add to all form

*   **attribute.remove-to-all-form**: Attribut - remove to all form

*   **attributes.js**: Attributes - JavaScript

*   **attributes.top**: Attributes - at the top


#### brand-edit.html

*   **brand.tab**: Brand - tab

*   **brand.update-form**: Brand - update form

*   **brand.tab-content**: Brand - content

*   **brand-edit.bottom**: brand-edit - bottom

*   **brand.edit-js**: Brand - Edit JavaScript

*   **wysiwyg.js**: wysiwyg - JavaScript

*   **brand-edit.top**: brand-edit - at the top


#### brands.html

*   **brands.table-header**: Brands - table header

*   **brands.table-row**: Brands - table row

*   **brands.bottom**: Brands - bottom

*   **brand.create-form**: Brand - create form

*   **brand.delete-form**: Brand - delete form

*   **brand.js**: Brand - JavaScript

*   **brands.top**: Brands - at the top


#### categories.html

*   **categories.caption**: Categories - caption

*   **categories.header**: Categories - header

*   **categories.row**: Categories - row

*   **products.caption**: Products - caption

*   **products.header**: Products - header

*   **products.row**: Products - row

*   **categories.bottom**: Categories - bottom

*   **categories.catalog-bottom**: Categories - at the bottom of the catalog

*   **category.create-form**: Category - create form

*   **product.create-form**: Product - create form

*   **category.delete-form**: Category - delete form

*   **product.delete-form**: Product - delete form

*   **categories.js**: Categories - JavaScript

*   **categories.top**: Categories - at the top


#### category-edit.html

*   **category.tab**: Category - tab

*   **category.contents-table-header**: Category - contents table header

*   **category.contents-table-row**: Category - contents table row

*   **category.tab-content**: Category - content

*   **category-edit.bottom**: category-edit - bottom

*   **category.edit-js**: Category - Edit JavaScript

*   **wysiwyg.js**: wysiwyg - JavaScript

*   **category-edit.top**: category-edit - at the top


#### config-store.html

*   **config-store.js**: Store Information - JavaScript

#### configuration.html

*   **configuration.catalog-top**: Configuration - at the top of the catalog area

*   **configuration.catalog-bottom**: Configuration - at the bottom of the catalog

*   **configuration.shipping-top**: Configuration - at the top of the shipping area

*   **configuration.shipping-bottom**: Configuration - at the bottom of the shipping area

*   **configuration.system-top**: Configuration - at the top of the system area

*   **configuration.system-bottom**: Configuration - at the bottom of the system area

*   **configuration.bottom**: Configuration - bottom

*   **configuration.js**: Configuration - JavaScript

*   **configuration.top**: Configuration - at the top


#### content-edit.html

*   **content.tab**: Content - tab

*   **content.tab-content**: Content - content

*   **content-edit.bottom**: content-edit - bottom

*   **content.edit-js**: Content - Edit JavaScript

*   **wysiwyg.js**: wysiwyg - JavaScript

*   **content-edit.top**: content-edit - at the top


#### content-folder-management.html

*   **product.folders-table-row**: Product - folders table row

*   **product.folders-table-header**: Product - folders table header


#### countries.html

*   **countries.table-header**: Countries - table header

*   **countries.table-row**: Countries - table row

*   **countries.bottom**: Countries - bottom

*   **country.create-form**: Country - create form

*   **country.delete-form**: Country - delete form

*   **countries.js**: Countries - JavaScript

*   **countries.top**: Countries - at the top


#### country-edit.html

*   **country-edit.bottom**: country-edit - bottom

*   **country.edit-js**: Country - Edit JavaScript

*   **wysiwyg.js**: wysiwyg - JavaScript

*   **country-edit.top**: country-edit - at the top


#### coupon-create.html

*   **wysiwyg.js**: wysiwyg - JavaScript

*   **coupon.create-js**: Coupon - create JavaScript


#### coupon-list.html

*   **coupon.list-caption**: Coupon - list caption

*   **coupon.table-header**: Coupon - table header

*   **coupon.table-row**: Coupon - table row

*   **coupon.bottom**: Coupon - bottom

*   **coupon.delete-form**: Coupon - delete form

*   **coupon.list-js**: Coupon - list JavaScript

*   **coupon.top**: Coupon - at the top


#### coupon-update.html

*   **wysiwyg.js**: wysiwyg - JavaScript

*   **coupon.update-js**: Coupon - update JavaScript


#### currencies.html

*   **currencies.table-header**: Currencies - table header

*   **currencies.table-row**: Currencies - table row

*   **currencies.bottom**: Currencies - bottom

*   **currency.create-form**: Currency - create form

*   **currency.delete-form**: Currency - delete form

*   **currencies.js**: Currencies - JavaScript

*   **currencies.top**: Currencies - at the top


#### currency-edit.html

*   **currency-edit.bottom**: currency-edit - bottom

*   **currency.edit-js**: Currency - Edit JavaScript

*   **currency-edit.top**: currency-edit - at the top


#### customer-edit.html

*   **customer.orders-table-header**: Customer - orders-table-header

*   **customer.edit**: Customer - Edit

*   **customer-edit.bottom**: customer-edit - bottom

*   **customer.address-create-form**: Customer - address create form

*   **customer.address-update-form**: Customer - address update form

*   **customer.address-delete-form**: Customer - address delete form

*   **customer.edit-js**: Customer - Edit JavaScript

*   **customer-edit.top**: customer-edit - at the top


#### customers.html

*   **customers.caption**: Customers - caption

*   **customers.header**: Customers - header

*   **customers.row**: Customers - row

*   **customer.bottom**: Customer - bottom

*   **customer.create-form**: Customer - create form

*   **customer.delete-form**: Customer - delete form

*   **customers.js**: Customers - JavaScript

*   **customer.top**: Customer - at the top


#### document-edit.html

*   **document-edit.bottom**: document-edit - bottom

*   **document.edit-js**: Document - Edit JavaScript

*   **wysiwyg.js**: wysiwyg - JavaScript

*   **document-edit.top**: document-edit - at the top


#### document-upload-form.html

*   **tab-image.bottom**: tab-image - bottom

*   **tab-image.top**: tab-image - at the top


#### export-modal.html

*   **export.bottom**: Export - bottom

*   **export.top**: Export - at the top


#### export-page.html

*   **export.bottom**: Export - bottom

*   **export.js**: Export - JavaScript

*   **export.top**: Export - at the top


#### export.html

*   **export.table-header**: Export - table header

*   **export.table-row**: Export - table row

*   **exports.row**: exports - row

*   **exports.bottom**: exports - bottom

*   **exports.js**: exports - JavaScript

*   **exports.top**: exports - at the top


#### feature-edit.html

*   **features-value.table-header**: Features value - table header

*   **features-value.table-row**: Features value - table row

*   **feature-edit.bottom**: feature-edit - bottom

*   **feature.value-create-form**: Feature - Value create form

*   **feature.edit-js**: Feature - Edit JavaScript

*   **wysiwyg.js**: wysiwyg - JavaScript

*   **feature-edit.top**: feature-edit - at the top


#### features.html

*   **features.table-header**: Features - table header

*   **features.table-row**: Features - table row

*   **features.bottom**: Features - bottom

*   **feature.create-form**: Feature - create form

*   **feature.delete-form**: Feature - delete form

*   **feature.add-to-all-form**: Feature - add to all form

*   **feature.remove-to-all-form**: Feature - remove to all form

*   **features.js**: Features - JavaScript

*   **features.top**: Features - at the top


#### folder-edit.html

*   **folder.tab**: Folder - tab

*   **folder.tab-content**: Folder - content

*   **folder-edit.bottom**: folder-edit - bottom

*   **folder.edit-js**: Folder - Edit JavaScript

*   **wysiwyg.js**: wysiwyg - JavaScript

*   **folder-edit.top**: folder-edit - at the top


#### folders.html

*   **folders.caption**: Folder - caption

*   **folders.header**: Folder - header

*   **folders.row**: Folder - row

*   **contents.caption**: Contents - caption

*   **contents.header**: Contents - header

*   **contents.row**: Contents - row

*   **folders.bottom**: Folder - bottom

*   **folder.create-form**: Folder - create form

*   **content.create-form**: Content - create form

*   **folder.delete-form**: Folder - delete form

*   **content.delete-form**: Content - delete form

*   **folders.js**: Folder - JavaScript

*   **folders.top**: Folder - at the top


#### home.html

*   **home.block**: Home - block

*   **home.bottom**: Home - bottom

*   **home.js**: Home - JavaScript

*   **home.top**: Home - at the top


#### hook-edit.html

*   **hook-edit.bottom**: hook-edit - bottom

*   **hook.edit-js**: Hook - Edit JavaScript

*   **wysiwyg.js**: wysiwyg - JavaScript

*   **hook-edit.top**: hook-edit - at the top


#### hooks.html

*   **hooks.table-header**: Hooks - table header

*   **hooks.table-row**: Hooks - table row

*   **hooks.bottom**: Hooks - bottom

*   **hook.create-form**: Hook - create form

*   **hook.delete-form**: Hook - delete form

*   **hooks.js**: Hooks - JavaScript

*   **hooks.top**: Hooks - at the top


#### image-edit.html

*   **image-edit.bottom**: image-edit - bottom

*   **image.edit-js**: Image - Edit JavaScript

*   **wysiwyg.js**: wysiwyg - JavaScript

*   **image-edit.top**: image-edit - at the top


#### image-upload-form.html

*   **tab-image.bottom**: tab-image - bottom

*   **tab-image.top**: tab-image - at the top


#### import-page.html

*   **import.js**: import - JavaScript

#### import.html

*   **import.table-header**: import - table header

*   **import.table-row**: import - table row

*   **imports.row**: imports - row

*   **imports.bottom**: imports - bottom

*   **imports.js**: imports - JavaScript

*   **imports.top**: imports - at the top


#### languages.html

*   **languages.bottom**: Languages - bottom

*   **language.create-form**: Language - create form

*   **languages.delete-form**: Languages - delete form

*   **languages.js**: Languages - JavaScript

*   **languages.top**: Languages - at the top


#### login.html

*   **index.middle**: Dashboard - middle

*   **index.bottom**: Dashboard - bottom

*   **index.top**: Dashboard - at the top


#### mailing-system.html

*   **mailing-system.bottom**: Mailing system - bottom

*   **mailing-system.js**: Mailing system - JavaScript

*   **mailing-system.top**: Mailing system - at the top


#### main-menu.html

*   **main.top-menu-customer**: Layout - in the menu customers

*   **main.top-menu-order**: Layout - in the menu orders

*   **main.top-menu-catalog**: Layout - in the menu catalog

*   **main.top-menu-content**: Layout - in the menu folders

*   **main.top-menu-tools**: Layout - in the menu tools

*   **main.top-menu-modules**: Layout - in the menu modules

*   **main.top-menu-configuration**: Layout - in the menu configuration

*   **main.in-top-menu-items**: Layout - in top menu items

*   **main.after-top-menu**: Layout - after top menu

*   **main.before-top-menu**: Layout - before top menu


#### message-edit.html

*   **message-edit.bottom**: message-edit - bottom

*   **message.edit-js**: Message - Edit JavaScript

*   **message-edit.top**: message-edit - at the top


#### messages.html

*   **messages.table-header**: Messages - table header

*   **messages.table-row**: Messages - table row

*   **messages.bottom**: Messages - bottom

*   **message.create-form**: Message - create form

*   **message.delete-form**: Message - delete form

*   **messages.js**: Messages - JavaScript

*   **messages.top**: Messages - at the top


#### module-block.html

*   **modules.table-row**: Modules - table row

*   **modules.table-header**: Modules - table header


#### module-configure.html

*   **module.config-js**: Module - configuration JavaScript

*   **wysiwyg.js**: wysiwyg - JavaScript

*   **module.configuration**: Module - configuration


#### module-edit.html

*   **module-edit.bottom**: module-edit - bottom

*   **module.edit-js**: Module - Edit JavaScript

*   **wysiwyg.js**: wysiwyg - JavaScript

*   **module-edit.top**: module-edit - at the top


#### module-hook-edit.html

*   **module-hook-edit.bottom**: module-hook-edit - bottom

*   **module-hook.edit-js**: Module hook - Edit JavaScript

*   **module-hook-edit.top**: module-hook-edit - at the top


#### module-hooks.html

*   **module-hook.delete-form**: Module hook - delete form

*   **module-hook.js**: Module hook - JavaScript

*   **module-hook.create-form**: Module hook - create form


#### modules.html

*   **modules.bottom**: Modules - bottom

*   **modules.js**: Modules - JavaScript

*   **modules.top**: Modules - at the top


#### order-edit.html

*   **order.tab**: Order - tab

*   **order-edit.cart-top**: order-edit - cart-top

*   **order-edit.before-order-product-list**: order-edit - before-order-product-list

*   **order-edit.before-order-product-row**: order-edit - before-order-product-row

*   **order-edit.product-list**: order-edit - product list

*   **order-edit.after-order-product-row**: order-edit - after-order-product-row

*   **order-edit.after-order-product-list**: order-edit - after-order-product-list

*   **order-edit.customer-information-bottom**: order-edit - customer-information-bottom

*   **order-edit.payment-module-bottom**: order-edit - payment-module-bottom

*   **order-edit.cart-bottom**: order-edit - cart-bottom

*   **order-edit.bill-top**: order-edit - bill-top

*   **order-edit.delivery-module-bottom**: order-edit - delivery-module-bottom

*   **order-edit.bill-delivery-address**: order-edit - bill-delivery-address

*   **order-edit.bill-bottom**: order-edit - bill-bottom

*   **order.tab-content**: Order - content

*   **order-edit.bottom**: order-edit - bottom

*   **order.edit-js**: Order - Edit JavaScript

*   **order-edit.top**: order-edit - at the top


#### orders.html

*   **orders.table-header**: Orders - table header

*   **orders.table-row**: Orders - table row

*   **orders.bottom**: Orders - bottom

*   **orders.js**: Orders - JavaScript

*   **orders.top**: Orders - at the top


#### product-attributes-tab.html

*   **product.attributes-table-row**: Product - attributes table row

*   **product.features-table-header**: Product - features-table-header

*   **product.features-table-row**: Product - features table row

*   **product.attributes-table-header**: Product - attributes table header


#### product-edit.html

*   **product.tab**: Product - tab

*   **product.tab-content**: Product - content

*   **product-edit.bottom**: product-edit - bottom

*   **product.edit-js**: Product - Edit JavaScript

*   **wysiwyg.js**: wysiwyg - JavaScript

*   **product-edit.top**: product-edit - at the top


#### product-prices-tab.html

*   **product.details-details-form**: Product - stock edit form

*   **product.details-promotion-form**: Product - details promotion form

*   **product.before-combinations**: Product - before combinations

*   **product.combinations-list-caption**: Product - combinations list caption

*   **product.combinations-row**: Product - combinations-row

*   **product.after-combinations**: Product - after combinations

*   **product.after-combinations**: Product - after combinations

*   **product.combination-delete-form**: Product - combination delete form

*   **product.details-pricing-form**: Product - details pricing form


#### product-related-tab.html

*   **product.contents-table-row**: Product - contents table row

*   **product.accessories-table-header**: Product - accessories table header

*   **product.accessories-table-row**: Product - accessories table row

*   **product.categories-table-header**: Product - categories table header

*   **product.categories-table-row**: Product - categories table row

*   **product.contents-table-header**: Product - contents table header


#### profile-edit.html

*   **profile-edit.bottom**: profile-edit - bottom

*   **profile.edit-js**: Profile - Edit JavaScript

*   **wysiwyg.js**: wysiwyg - JavaScript

*   **profile-edit.top**: profile-edit - at the top


#### profiles.html

*   **profile.table-header**: Profile - table header

*   **profile.table-row**: Profile - table row

*   **profiles.bottom**: Profiles - bottom

*   **profile.create-form**: Profile - create form

*   **profile.delete-form**: Profile - delete form

*   **profiles.js**: Profiles - JavaScript

*   **wysiwyg.js**: wysiwyg - JavaScript

*   **profiles.top**: Profiles - at the top


#### sale-edit.html

*   **sale-edit.bottom**: sale-edit - bottom

*   **sale.edit-js**: sale - Edit JavaScript

*   **wysiwyg.js**: wysiwyg - JavaScript

*   **sale-edit.top**: sale-edit - at the top


#### sales.html

*   **sales.table-header**: sales - table header

*   **sales.table-row**: sales - table row

*   **sales.bottom**: sales - bottom

*   **sale.create-form**: sale - create form

*   **sale.delete-form**: sale - delete form

*   **sales.js**: sales - JavaScript

*   **sales.top**: sales - at the top


#### search.html

*   **customers.header**: Customers - header

*   **customers.row**: Customers - row

*   **search.bottom**: Search - bottom

*   **customer.delete-form**: Customer - delete form

*   **search.js**: Search - JavaScript

*   **search.top**: Search - at the top


#### seo-tab.html

*   **tab-seo.bottom**: tab-seo - bottom

*   **tab-seo.top**: tab-seo - at the top


#### shipping-configuration-edit.html

*   **shipping-configuration.edit**: Shipping configuration - Edit

*   **shipping-configuration-edit.bottom**: shipping-configuration-edit - bottom

*   **shipping-configuration.country-delete-form**: Shipping configuration - country delete form

*   **shipping-configuration.edit-js**: Shipping configuration - Edit JavaScript

*   **shipping-configuration-edit.top**: shipping-configuration-edit - at the top


#### shipping-configuration.html

*   **shipping-configuration.table-header**: Shipping configuration - table header

*   **shipping-configuration.table-row**: Shipping configuration - table row

*   **shipping-configuration.bottom**: Shipping configuration - bottom

*   **shipping-configuration.create-form**: Shipping configuration - create form

*   **shipping-configuration.delete-form**: Shipping configuration - delete form

*   **shipping-configuration.js**: Shipping configuration - JavaScript

*   **shipping-configuration.top**: Shipping configuration - at the top


#### shipping-zones-edit.html

*   **shipping-zones-edit.bottom**: shipping-zones-edit - bottom

*   **zone.delete-form**: Zone - delete form

*   **shipping-zones.edit-js**: Delivery zone - Edit JavaScript

*   **shipping-zones-edit.top**: shipping-zones-edit - at the top


#### shipping-zones.html

*   **shipping-zones.table-header**: Delivery zone - table header

*   **shipping-zones.table-row**: Delivery zone - table row

*   **shipping-zones.bottom**: Delivery zone - bottom

*   **shipping-zones.js**: Delivery zone - JavaScript

*   **shipping-zones.top**: Delivery zone - at the top


#### system-logs.html

*   **system.logs-js**: System - logs JavaScript

#### tax-edit.html

*   **tax-edit.bottom**: tax-edit - bottom

*   **tax.edit-js**: Tax - Edit JavaScript

*   **wysiwyg.js**: wysiwyg - JavaScript

*   **tax-edit.top**: tax-edit - at the top


#### tax-rule-edit.html

*   **tax-rule-edit.bottom**: tax-rule-edit - bottom

*   **taxes.update-form**: Taxes - update form

*   **tax-rule.edit-js**: tax rule - Edit JavaScript

*   **wysiwyg.js**: wysiwyg - JavaScript

*   **tax-rule-edit.top**: tax-rule-edit - at the top


#### taxes-rules.html

*   **taxes-rules.bottom**: Taxes rules - bottom

*   **tax.create-form**: Tax - create form

*   **tax.delete-form**: Tax - delete form

*   **tax-rule.create-form**: tax rule - create form

*   **tax-rule.delete-form**: tax rule - delete form

*   **taxes-rules.js**: Taxes rules - JavaScript

*   **wysiwyg.js**: wysiwyg - JavaScript

*   **taxes-rules.top**: Taxes rules - at the top


#### template-attribute-list.html

*   **template.attributes-table-row**: Template - attributes table row

*   **template.attributes-table-header**: Template - attributes table header


#### template-edit.html

*   **template-edit.bottom**: template-edit - bottom

*   **template.edit-js**: Template - Edit JavaScript

*   **template-edit.top**: template-edit - at the top


#### template-feature-list.html

*   **template.features-table-row**: Template - features table row

*   **template.features-table-header**: Template - features-table-header


#### templates.html

*   **templates.table-header**: Templates - table header

*   **templates.table-row**: Templates - table row

*   **templates.bottom**: Templates - bottom

*   **template.create-form**: Template - create form

*   **template.delete-form**: Template - delete form

*   **templates.js**: Templates - JavaScript

*   **templates.top**: Templates - at the top


#### tools.html

*   **tools.col1-top**: Tools - at the top of the column

*   **tools.col1-bottom**: Tools - at the bottom of column 1

*   **tools.bottom**: Tools - bottom

*   **tools.js**: Tools - JavaScript

*   **tools.top**: Tools - at the top


#### translations.html

*   **translations.js**: Translations - JavaScript

#### variable-edit.html

*   **variables-edit.bottom**: variables-edit - bottom

*   **variable.edit-js**: Variable - Edit JavaScript

*   **wysiwyg.js**: wysiwyg - JavaScript

*   **variables-edit.top**: variables-edit - at the top


#### variables.html

*   **variables.table-header**: Variables - table header

*   **variables.table-row**: Variables - table row

*   **variables.bottom**: Variables - bottom

*   **variable.create-form**: Variable - create form

*   **variable.delete-form**: Variable - delete form

*   **variables.js**: Variables - JavaScript

*   **variables.top**: Variables - at the top


### PDF
------------

#### delivery.html

*   **delivery.header**: Delivery - in the header

*   **delivery.footer-top**: Delivery - at the top of the footer

*   **delivery.imprint**: Delivery - imprint

*   **delivery.footer-bottom**: Delivery - at the bottom of the footer

*   **delivery.information**: Delivery - at the bottom of information area

*   **delivery.after-information**: Delivery - after the information area

*   **delivery.delivery-address**: Delivery - delivery address

*   **delivery.after-addresses**: Delivery - after addresse area

*   **delivery.after-delivery-module**: Delivery - after-delivery-module

*   **delivery.after-summary**: Delivery - after the order summary

*   **delivery.css**: Delivery - CSS


#### invoice.html

*   **invoice.header**: Invoice - in the header

*   **invoice.footer-top**: Invoice - at the top of the footer

*   **invoice.imprint**: Invoice - imprint

*   **invoice.footer-bottom**: Invoice - at the bottom of the footer

*   **invoice.information**: Invoice - at the bottom of information area

*   **invoice.after-information**: Invoice - after the information area

*   **invoice.delivery-address**: Invoice - delivery address

*   **invoice.after-addresses**: Invoice - after addresse area

*   **invoice.after-products**: Invoice - after product listing

*   **invoice.after-payment-module**: Invoice - after-payment-module

*   **invoice.after-delivery-module**: Invoice - after-delivery-module

*   **invoice.after-summary**: Invoice - after the order summary

*   **invoice.css**: Invoice - CSS
