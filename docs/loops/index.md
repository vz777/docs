---
title: Loops
---

Loops are the most convenient feature in Thelia for front developers. Already there in Thelia's first version, they deserved a makeover for Thelia v2.

Loops allow to get data from your shop back-end and display them in your front view. In Thelia v2, loops are a <a href="http://www.smarty.net" target="_blank">Smarty v3</a> plugin.

From Thelia 2.4.0, when an unknown loop type is found in a template, no exeption is thrown in production mode, and an error is added to the log. In development mode, the exception is thrown as before. This way, disabling a module will no longer break a front office where this plugin's loops are used.

### Classic loop

Here is a piece of html code which intends to list 4 random products from your shop.

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
&nbsp;

How to make this piece of code dynamic ? Gathering the products you set up in your Thelia v2 back-office ?

Just use a Thelia product loop :

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
&nbsp;

And what if you want only the products you tagged as new ? And which are from category 3 and 5 ? And whose price is at least 100 € ?

No problem ! Here you are :

```smarty
<div>
    {loop type="product" name="my_product_loop" limit="4" order="random" new="true" category="3,5" min_price="100"}
    <div class="product-block">
        [...]
    </div>
    {/loop}
</div>
```
&nbsp;

You can of course use a loop into another loop and pass a loop output to another loop parameter

```smarty
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
&nbsp;

Thelia 2 provides a lot of loop types. You can see all the loops and their parameters / outputs in the <strong>Loops</strong> sidebar menu.

### Conditional loop

Conditional loops allow to define a different behaviour depending on if the a classic loop displays something or not.

A conditional loop is therefore linked to a classic loop using the ```rel``` attribute which must match a classic loop ```name``` attribute.

For example, you want to display all the associated content of a product in an unorder list (ul). If the product has no associated contents you won't display empty ```<ul></ul>```. And you want a message to inform there is no available content. You can use a conditional loop to do this.

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

### Page loop

Page loops can be use on any classic loop which has ```page``` parameter. Page loops list all the pages the classic loop needs to display all it's returns.

A page loop is therefore linked to a classic loop using the ```rel``` attribute which must match a classic loop ```name``` attribute.

By default, 10 pages are displayed. You can change this value using ```limit``` parameter.

List of output parameters :

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


## Declare your loops

```xml
<loops>
    <loop name="mymodule_product" class="MyModule\Loop\Product" />
    <loop name="mymodule_myloop" class="MyModule\Loop\MyLoop" />
</loops>
```

You have to create as many loop node as loop you have into the loops node. In this example there is 2 loops. Name and
class properties are mandatory. The name is the loop name used into the template ( like in Thelia v1 : ```<THELIA_name
type="MyModule_Product">...</THELIA_name>```), class property is the class executed by the template engine. This
class must extends the Thelia\Core\Template\Element\BaseLoop abstract class, if not an exception is thrown.
**If you name your loop like a default loop (eg : product), your loop will replace the default loop.**

## Implement your loops

Your loop can be anywhere (Thanks to namespace) in your module but it's better to create a Loop directory and put all your loops in this directory.

You have to extends the Thelia\Core\Template\Element\BaseLoop abstract class and implement either Thelia\Core\Template\Element\PropelSearchLoopInterface or Thelia\Core\Template\Element\ArraySearchLoopInterface. Therefore you will have to create *getArgDefinitions*, *parseResults* and either *buildModelCriteria* or *buildArray* methods.

NB : You can also extend BaseI18nLoop which itself extends BaseLoop. This will provide tools to manage i18n in your loop.

### What's the difference betwen *PropelSearchLoopInterface* and *ArraySearchLoopInterface*

It's a matter of data type. If the data your loop returns come from the database you must implement *PropelSearchLoopInterface* and create *buildModelCriteria* method which return a *Propel\Runtime\ActiveQuery\ModelCriteria*. Conversely if your loop displays data from an array you must implement *ArraySearchLoopInterface* and create *buildArray* method which return an array.

The *parseResults* method is used to render the template. It must return a Thelia\Core\Template\Element\LoopResult instance.

The getArgDefinitions method defines all args used in your loop. Args can be mandatory, optional, with default value, etc. This method must return an Thelia\Core\Template\Loop\Argument\ArgumentCollection. ArgumentCollection contains Thelia\Core\Template\Loop\Argument which contains a Thelia\Type\TypeCollection. Types in the collection must implement Thelia\Type\TypeInterface.

If you don't define your arguments here, you can't use them in your new loop. All arguments are accessible in the ```parseResults``` method.

Baseloop class declares 3 public properties you might overload in your new loop.

```php
public $countable = true;
public $timestampable = false;
public $versionable = false;
```

With these properties set to true, the loop will automatically render - or not - the following outputs :

```php
if($countable === true)
```

* LOOP_COUNT
* LOOP_TOTAL

```php
if($timestampable === true) //available if your table is timestampable
```

* CREATE_DATE
* CREATE_UPDATE

### Example 1

Here an example for my module "MyModule" and my loops in the loop directory. This is the architecture :

 ```
 \local
   \modules
     \MyModule
       ...
       \Loop
         MyLoop.php
 ```

MyLoop.php file :

 ```php
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
         return new ArgumentCollection(
             Argument::createIntListTypeArgument('start', 0),
             Argument::createIntListTypeArgument('stop', null, true)
         );
     }

     public function buildArray()
     {
         $items = array();

         $start = $this->getStart();
         $stop = $this->getStop();

         for($i=$start; $i<=$stop; $i++ {
            $items[] = $i;
         }

         return $items;

     }

     public function parseResults(LoopResult $loopResult)
     {
         foreach ($loopResult->getResultDataCollection() as $item) {

             $loopResultRow = new LoopResultRow();

             $loopResultRow->set("MY_OUTPUT", $item);

             $loopResult->addRow($loopResultRow);
         }

         return $loopResult;
     }
 }

 ```

Of course you can use all classes you want in your own loop class, like model class. All Thelia's model classes are in the
namespace Thelia\Model

So if I want to add some search in my DB and return results from product table I can use something like this :

 ```php
public function buildModelCriteria()
{
    return ProductQuery::create();
}

public function parseResults(LoopResult $loopResult)
{
     foreach ($loopResult->getResultDataCollection() as $product) {

        $loopResultRow = new LoopResultRow($product);

        $loopResultRow->set("REF", $product->getRef());

        $loopResult->addRow($loopResultRow);
    }

    return $loopResult;
}
```

