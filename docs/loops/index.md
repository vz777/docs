---
title: Loops
---

Les boucles sont la fonctionnalité la plus pratique dans Thelia pour les développeurs front-end. Les boucles permettent d'obtenir des données depuis votre back-office de boutique et de les afficher dans votre vue frontale. Dans Thelia, les boucles sont un plugin Smarty.



### Boucle classique

Voici un extrait de code HTML qui a l'intention de répertorier 4 produits aléatoires de votre boutique.

```html
<div>
    <div class="product-block">
        PRODUCT 0 (ref : 0535233)<br />
        The ideal product to have fun.<br />
        <strong>Afford it for 70 €</strong>
    </div>
    <div class="product-block">
        PRODUCT 1 (ref : 1245152)<br />
        A very beautiful product to make you happy.<br />
        <strong>Afford it for only 10 € (instead of 100) !</strong>
    </div>
    <div class="product-block">
        PRODUCT 2 (ref : 9437252)<br />
        A perfect product to procrastinate.<br />
        <strong>Afford it for 20 €</strong>
    </div>
    <div class="product-block">
        PRODUCT 4 (ref : 3566236)<br />
        The product which will change your life.<br />
        <strong>Afford it for only 1 000 € (instead of 1 000 000) !</strong>
    </div>
</div>
```


Comment rendre ce morceau de code dynamique ? Rassembler les produits que vous avez configurés dans votre back-office Thelia ?

Il suffit d'utiliser une boucle de produits Thelia :

```smarty
<div>
    {loop type="product" name="my_product_loop" limit="4" order="random"}
        <div class="product-block">
            {$TITLE} (ref : {$REF})<br />
            {$DESCRIPTION}<br />
            <strong>
                {if $IS_PROMO == 1}
                    Afford it for only {$PROMO_PRICE} € (instead of {$PRICE}) !
                {else}
                    Afford it for {$PRICE} €
                {/if}
            </strong>
        </div>
    {/loop}
</div>
```


Et si vous ne voulez que les produits que vous avez étiquetés comme nouveaux ? Et qui sont de la catégorie 3 et 5 ? Et dont le prix est d'au moins 100 € ?

Pas de problème ! Voici comment faire :

```smarty
<div>
    {loop type="product" name="my_product_loop" limit="4" order="random" new="true" category="3,5" min_price="100"}
        <div class="product-block">
            [...]
        </div>
    {/loop}
</div>
```

Vous pouvez bien sûr utiliser une boucle dans une autre boucle et transmettre la sortie d'une boucle à un autre paramètre de boucle.

```smarty
<div>
    {loop type="category" name="my_category_loop"}
        <h2>{$TITLE}</h2>
        {loop type="product" name="my_product_loop" category="{$ID}"}
            <div class="product-block">
                [...]
            </div>
        {/loop}
    {/loop}
</div>
```

Thelia propose de nombreux types de boucles. Vous pouvez voir toutes les boucles et leurs paramètres / sorties dans le menu latéral <strong>Loops</strong>.

### Boucle conditionnelle

Les boucles conditionnelles sont utilisées pour définir un comportement différent en fonction de la manière dont une boucle classique affiche quelque chose ou non.

Une boucle conditionnelle est donc liée à une boucle classique à l'aide de l'attribut ```rel```, qui doit correspondre à l'attribut ```name``` d'une boucle classique.

Par exemple, vous voulez afficher tout le contenu associé d'un produit dans une liste non ordonnée (ul). Si le produit n'a pas de contenu associé, vous ne souhaitez pas afficher de ```<ul></ul>``` vide. Et vous voulez un message pour indiquer qu'il n'y a pas de contenu disponible. Vous pouvez utiliser une boucle conditionnelle pour cela.

```smarty
{ifloop rel="my_associated_content_loop"}
    Associated contents for this product :
    <ul>
        {loop type="associated_content" name="my_associated_content_loop" product="12"}
            <li>
                <a href="{$URL}">{$TITLE}</a>
            </li>
        {/loop}
    </ul>
{/ifloop}
{elseloop rel="my_associated_content_loop"}
    No associated content for this product
{/elseloop}
```
&nbsp;

### Boucle de page

Les boucles de page peuvent être utilisées sur n'importe quelle boucle classique qui a le paramètre ```page```. Les boucles de page répertorient toutes les pages nécessaires à la boucle classique pour afficher tous ses résultats.

Une boucle de page est donc liée à une boucle classique à l'aide de l'attribut ```rel```, qui doit correspondre à l'attribut ```name``` d'une boucle classique.

Par défaut, 10 pages sont affichées. Vous pouvez modifier cette valeur à l'aide du paramètre ```limit```.

Liste des paramètres de sortie :

<div class="table-responsive">
    <table class="table table-striped table-bordered">
        <thead>
        <tr>
            <th>Variable</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    $PAGE
                </td>
                <td>
                    Current page number. This value is equal to the ```page``` loop parameter.
                </td>
            </tr>
            <tr>
                <td>
                    $END
                </td>
                <td>
                    The last displayed page number
                </td>
            </tr>
            <tr>
                <td>
                    $CURRENT
                </td>
                <td>
                    on each loop, this value is incremented. So it's started with the $PAGE value and end with the $END value
                </td>
            </tr>
            <tr>
                <td>
                    $LAST
                </td>
                <td>
                    Max page number. If a loop generates 761 pages, the value of $LAST is 761
                </td>
            </tr>
            <tr>
                <td>
                    $PREV
                </td>
                <td>
                    previous page number. This value is always $PAGE-1 if $PAGE is greater than 1. The value is 1 therefore
                </td>
            </tr>
            <tr>
                <td>
                    $NEXT
                </td>
                <td>
                    next page number. This value is always $PAGE+1 if $PAGE is less than $LAST. The value is $LAST therefore
                </td>
            </tr>
        </tbody>
    </table>
</div>

```smarty
<div class="text-center">
    <ul class="pagination pagination-centered">
    {pageloop rel="customer_list" limit="20"}
        {if $PAGE == $CURRENT && $PAGE > 2}
            <li><a href="{url path="/admin/customers" page=$PREV}">&lsaquo;</a></li>
        {/if}

        {if $PAGE != $CURRENT}
            <li><a href="{url path="/admin/customers" page="{$PAGE}"}">{$PAGE}</a></li>

        {else}
            <li class="active"><a href="#">{$PAGE}</a></li>
        {/if}

        {if $PAGE == $END && $PAGE < $LAST}
            <li><a href="{url path="/admin/customers" page=$NEXT}">&rsaquo;</a></li>
        {/if}
    {/pageloop}
    </ul>
</div>
```

## Implémenter vos boucles

Votre boucle peut être n'importe où (grâce à l'espace de noms) dans votre module, mais il est préférable de créer un répertoire Loop et d'y mettre toutes vos boucles.

La seule chose à faire est de créer une nouvelle classe qui étend la classe `Thelia\Core\Template\Element\BaseLoop` et d'implémenter l'une de ces interfaces :
- `Thelia\Core\Template\Element\ArraySearchLoopInterface` pour une [Boucle de tableau](#boucle-de-tableau)
- `Thelia\Core\Template\Element\PropelSearchLoopInterface` pour une [Boucle Propel](#boucle-propel).

NB : Au lieu de `BaseLoop` vous pouvez étendre `BaseI18nLoop`. Cela fournira des outils pour gérer l'internationalisation dans votre boucle.

Le type de votre boucle sera le nom de classe en snake_case. Par exemple, le `type` de `MyLoop.php` sera `my_loop`
Ainsi, pour l'appeler dans le template : `{loop type="my_loop" name="a_loop_name"}{/loop}`

## Boucle de tableau
Si les données de votre boucle ne proviennent pas directement d'un model, utilisez une boucle de tableau.
Trois fonctions doivent être implémentées :
- `getArgDefinitions` pour décrire quels [arguments](#types-darguments) sont disponibles pour votre boucle
- `buildArray` qui rassemble les données pour les paramètres définis
- `parseResults` pour attribuer des données à des variables Smarty pour chaque itération de boucle
```php
 <?php
 namespace MyModule\Loop;

 use Thelia\Core\Template\Element\BaseLoop;
 use Thelia\Core\Template\Element\LoopResult;
 use Thelia\Core\Template\Element\LoopResultRow;
 use Thelia\Core\Template\Element\ArraySearchLoopInterface;
 use Thelia\Core\Template\Loop\Argument\ArgumentCollection;
 use Thelia\Core\Template\Loop\Argument\Argument;

 class MyLoop extends BaseLoop implements ArraySearchLoopInterface {

    public $countable = true;
    public $timestampable = false;
    public $versionable = false;

     public function getArgDefinitions()
     {
         // Always return an ArgumentCollection
         return new ArgumentCollection(
             Argument::createIntListTypeArgument('start', 0),
             Argument::createIntListTypeArgument('stop', null, true)
         );
     }

     public function buildArray()
     {
         $items = [];

         // These magics methods will get the loop arguments "start" and "stop"
         $start = $this->getStart();
         $stop = $this->getStop();

         // Get the data from where you want
         for ( $i = $start; $i <= $stop; $i++) {
            $items[] = [
                'number' => $i,
                'numberNext' => $i + 1
            ];
         }

         return $items;
     }

     public function parseResults(LoopResult $loopResult)
     {
         // "getResultDataCollection" return an iterator that contain the items given by "buildArray"
         foreach ($loopResult->getResultDataCollection() as $item) {
             // Create a new result
             $loopResultRow = new LoopResultRow();

             // Assign variable that will be accessible in smarty by $CURRENT_NUMBER for Exemple
             $loopResultRow->set("CURRENT_NUMBER", $item['number']);
             $loopResultRow->set("NEXT_NUMBER", $item['numberNext']);

             // Add the result to loop result list
             $loopResult->addRow($loopResultRow);
         }

         return $loopResult;
     }
 }
```

## Boucle Propel
Si les données de votre boucle proviennent directement d'un model, utilisez une boucle Propel.
Trois fonctions doivent être implémentées :
- `getArgDefinitions` pour décrire quels [arguments](#types-darguments) sont disponibles pour votre boucle
- `buildModelCriteria` qui construit une requête Propel à exécuter
- `parseResults` pour attribuer des données à des variables Smarty pour chaque itération de boucle
```php
<?php
namespace Thelia\Core\Template\Loop;

use Propel\Runtime\ActiveQuery\Criteria;
use Thelia\Core\Template\Element\BaseLoop;
use Thelia\Core\Template\Element\LoopResult;
use Thelia\Core\Template\Element\LoopResultRow;
use Thelia\Core\Template\Element\PropelSearchLoopInterface;
use Thelia\Core\Template\Loop\Argument\Argument;
use Thelia\Core\Template\Loop\Argument\ArgumentCollection;
use Thelia\Model\Admin as AdminModel;
use Thelia\Model\AdminQuery;

class Admin extends BaseLoop implements PropelSearchLoopInterface
{
    protected function getArgDefinitions()
    {
         // Always return an ArgumentCollection
        return new ArgumentCollection(
            Argument::createIntListTypeArgument('id'),
            Argument::createIntListTypeArgument('profile')
        );
    }

    public function buildModelCriteria()
    {
        $search = AdminQuery::create();

         // This magic method will get the loop argument "id"
        $id = $this->getId();
        if (null !== $id) {
            $search->filterById($id, Criteria::IN);
        }

        $profile = $this->getProfile();
        if (null !== $profile) {
            $search->filterByProfileId($profile, Criteria::IN);
        }

        $search->orderByFirstname(Criteria::ASC);

        // Don't execute the query, only return it
        return $search;
    }

    public function parseResults(LoopResult $loopResult)
    {
        /** @var AdminModel $admin */
        foreach ($loopResult->getResultDataCollection() as $admin) {
             // Create a new result
            $loopResultRow = new LoopResultRow($admin);

             // Assign variable that will be accessible in smarty by $PROFILE for Exemple
            $loopResultRow->set('ID', $admin->getId())
                ->set('PROFILE', $admin->getProfileId())
                ->set('FIRSTNAME', $admin->getFirstname())
                ->set('LASTNAME', $admin->getLastname())
                ->set('LOGIN', $admin->getLogin())
                ->set('LOCALE', $admin->getLocale())
                ->set('EMAIL', $admin->getEmail())
            ;
            $this->addOutputFields($loopResultRow, $admin);

             // Add the result to loop result list
            $loopResult->addRow($loopResultRow);
        }

        return $loopResult;
    }
}
```

## Types d'arguments
Dans la classe `Argument`, vous avez plusieurs fonctions statiques qui vous aideront à spécifier le type d'argument attendu.

| function                               | argument accepted                                             |
|:---------------------------------------|:--------------------------------------------------------------|
| createAnyTypeArgument()                | N'importe quoi                                                |
| createIntTypeArgument()                | Seulement un int                                              |
| createFloatTypeArgument()              | Seulement un float                                            |
| createBooleanTypeArgument()            | Seulement un booléen                                          |
| createBooleanOrBothTypeArgument()      | Un booléen ou "*" pour les deux                               |
| createIntListTypeArgument()            | Une liste d'int séparés par une virgule                       |
| createAnyListTypeArgument()            | Une liste de n'importe quoi séparée par une virgule           |
| createAlphaNumStringTypeArgument()     | Une chaîne alphanumérique                                     |
| createAlphaNumStringListTypeArgument() | Une liste de chaînes alphanumériques séparées par une virgule |

## Options
La classe BaseLoop déclare 3 propriétés publiques que vous pouvez surcharger dans votre nouvelle boucle.

```php
public $countable = true;
public $timestampable = false;
```

Avec ces propriétés définies sur true, la boucle rendra automatiquement - ou non - les Sorties suivantes :

```php
if($countable === true)
```

* `LOOP_COUNT` Le numéro d'itération actuel (commence à partir de 1)
* `LOOP_TOTAL` Total des éléments dans la boucle actuelle

```php
if($timestampable === true) //available if your table is timestampable
```

* `CREATE_DATE`  Date de création
* `UPDATE_DATE`  Date de la dernière mise à jour
