---
title: Product
---

Product loop lists products from your shop. You very probably will have to use the product sale elements loop inside your product loop.   
`{loop type="product" name="the-loop-name" [argument="value"], [...]}`

## Arguments

| Argument         | Description                                                                                                             | Default | Example                                |
|------------------|-------------------------------------------------------------------------------------------------------------------------|---------|----------------------------------------|
| id               | A single or a list of product ids.                                                                                      |         | id="2" or id="1,4,7"                   |
| category         | A single or a list of category ids.                                                                                     |         | limit="10"                             |
| category_default | A single or a list of default category ids allowing to retrieve all products having this parameter as default category. | 0       | offset="10"                            |
| brand            | A single or a list of brand ids.                                                                                        |         | page="2"                               |
| new              | A boolean value to get products by their newness                                                                        |         | new="yes"                              |
| ref              | A single or a list of product references.                                                                               |         | ref="PROD011" or ref="PROD011,PROD018" |
| order            | The order for sorting products, see [sorting possible values](#product-order-possible-values)                           | alpha   | order="category,min_price"             |
Plus the [global arguments](./global_arguments) and [search arguments](./search_arguments)

## Outputs

The product loop has a specific behaviour with the parameter `complex` if set to true some values will not be handled the same way and some other will not be available.   


| Variable          | Value                                                                                                     |                         If complex='true'                         |                    If complex='false'                    |
|-------------------|-----------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------:|:--------------------------------------------------------:|
| $TITLE            | Title                                                                                                     |                                 ✅                                 |✅ | 
| $CHAPO            | Chapo                                                                                                     |                             ✅                                     |✅ | 
| $DESCRIPTION      | Description                                                                                               |                                 ✅                                 |✅ | 
| $POSTSCRIPTUM     | Postscriptum                                                                                              |                                 ✅                                 |✅ |
| $BEST_PRICE       | the product best tax-free price for the received arguments, depending on the attributes and promo status. |                                 ✅                                 |✅ | 
| $BEST_PRICE_TAX   | the best price taxes amount                                                                               |                                 ✅                                 |✅ | 
| $BEST_TAXED_PRICE | the best price including taxes                                                                            |                                 ✅                                 |✅ | 
| $BRAND_ID         | the brand id of this product. Empty if no brand is assigned for this product                              |                                 ✅                                 |✅ | 
| $IS_NEW           | Newness                                                                                                   |  return true if at least one of it's product sale element is new  |  return true if the default product sale element is new  |
| $EAN_CODE          | The default product sale elements EAN Code                                                                | 🚫  |  ✅  |

Plus the [global outputs](./global_arguments)

## Examples

I want to display all products from categories 1 and 2 and their subcategories whose feature `color` (ID : 1) is `blue` (ID : 13) or `lightblue` (ID : 17), order by ascending price

```smarty
<ul>
{loop type="product" name="my_product_loop" category="1,2" depth="2" feature_availability="1:13|17" order="min_price"}
    <li>{$TITLE} ({$REF})</li>
{/loop}
</ul>
``` 


I want to display all products which are in promo for the current category displaying the new products first and then order by decreasing price

```smarty
<ul>
{loop type="product" name="another_product_loop" promo="true" current_category="true" order="new,max_price"}
    <li>{$TITLE} ({$REF})</li>
{/loop}
</ul>
```


## Sorting possible values {#product-order-possible-values}

| Ascending value | Descending value | Field                                                                     |
|-----------------|------------------|:--------------------------------------------------------------------------|
| alpha           | alpha_reverse    | Title                                                                     |
| created         | created_reverse  | Creation date                                                             |
| updated         | updated_reverse  | Last update date                                                          |
| id              | id_reverse       | Id                                                                        |
| ref             | ref_reverse      | Reference                                                                 |
| manual          | manual_reverse   | By position considering a given category, `category` argument must be set |
| min_price       | max_price        | Price                                                                     |
| position        | position_reverse | By position, without considering a parent category                        |
| visible         | visible_reverse  | Visible                                                                   |
| given_id        |                  | Return the same order received in id argument which therefore must be set |
| new             |                  | New products first                                                        |
| promo           |                  | Promo product first                                                       |
| random          |                  | Random order                                                              |