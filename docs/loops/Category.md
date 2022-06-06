---
title: Category
---

Category loop lists categories from your shop.    
`{loop type="category" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#category-arguments}

| Argument | Description | Default | Example |
| ------------- |:-------------| :-------------: | :-------------|
| content      | One or more content ID. When this parameter is set, the loop returns the categories related to the specified content IDs. |              | content="3" |
| current      | A boolean value which allows either to exclude current category from results either to match only this category |              | current="yes" |
| exclude      | A single or a list of category ids. |              | exclude="2", exclude="1,4,7" |
| exclude_parent      | A single or list of categories id to exclude. |              | exclude_parent="12,22" |
| exclude_product      | A single or list (since 2.3) product id to exclude. |              |  exclude_product="3" |
| id      | A single or a list of category ids. |              |   id="2", id="1,4,7" |
| lang      | A lang id |              |   lang="1" |
| need_count_child      | A boolean. If set to true, count how many subcategories contains the current category | false | need_count_child="yes" |
| need_product_count      | A boolean. If set to true, count how many products contains the current category | false | need_product_count="yes" |
| not_empty      | (**not implemented yet**) A boolean value. If true, only the categories which contains at least a visible product (either directly or through a subcategory) are returned | no | not_empty="yes" |
| order       | A list of values <br/> [Expected values](#category-order-possible-values) | manual | order="random" |
| parent       | A single or a list of category ids. |  | parent="3", parent="2,5,8" |
| product       | A single or list (since 2.3) of product IDs. |  | product="3" |
| return_url       | A boolean value which allows the urls generation. | yes | return_url="no" |
| visible       | A boolean value. | yes | visible="no" |
| with_prev_next_info       | A boolean. If set to true, $PREVIOUS and $NEXT output arguments are available. | false | with_prev_next_info="yes" |

Plus the [global arguments](./global_arguments) and [search arguments](./search_arguments)

## Outputs

| Variable | Value | with_prev_next_info | need_count_child | need_product_count |
| :------------------------------ | :------------------------------ | :-----------------------------------: | :-----------------------------------: | :-----------------------------------: |
| $CHAPO  | the category chapo |  'true' =>  ✅ <br/> 'false' => ✅  |  'true' => ✅ <br/> 'false' => ✅   | 'true' => ✅ <br/> 'false' => ✅ |
| $CHILD_COUNT | Number of subcategories contained by the current category. |  'true' => ✅ <br/> 'false' => ✅  |  'true' => ✅ <br/> 'false' => 🚫   |  'true' => ✅ <br/> 'false' => ✅  |
| $CREATE_DATE | the category create date | 'true' => ✅ <br/> 'false' => ✅   |  'true' => ✅ <br/> 'false' => ✅ |  'true' => ✅ <br/> 'false' => ✅  |
| $DESCRIPTION | the category description | 'true' => ✅ <br/> 'false' => ✅   | 'true' => ✅ <br/> 'false' => ✅  |  'true' => ✅ <br/> 'false' => ✅  |
| $HAS_NEXT	   | true if a category exists after this one in the current parent category, following categories positions.  | 'true' => ✅ <br/> 'false' => 🚫   |  'true' => ✅ <br/> 'false' => ✅  |  'true' => ✅ <br/> 'false' => ✅  |
| $HAS_PREVIOUS	   | true if a category exists before this one in the current parent category, following categories positions. | 'true' => ✅ <br/> 'false' => 🚫   |  'true' => ✅ <br/> 'false' => ✅ |  'true' => ✅ <br/> 'false' => ✅  |
| $ID	   | the category id | 'true' => ✅ <br/> 'false' => ✅  |  'true' => ✅ <br/> 'false' => ✅  | 'true' => ✅ <br/> 'false' => ✅  |
| $IS_TRANSLATED	   | check if the category is translated or not | 'true' => ✅ <br/> 'false' => ✅   |  'true' => ✅ <br/> 'false' => ✅ |  'true' => ✅ <br/> 'false' => ✅  |
| $LOCALE	   | the locale used for this loop | 'true' => ✅ <br/> 'false' => ✅   |  'true' => ✅ <br/> 'false' => ✅ |  'true' => ✅ <br/> 'false' => ✅  |
| $META_DESCRIPTION	   | the category meta description | 'true' => ✅ <br/> 'false' => ✅   |  'true' => ✅ <br/> 'false' => ✅  |  'true' => ✅ <br/> 'false' => ✅ |
| $META_KEYWORD	   | the category meta keyword | 'true' => ✅ <br/> 'false' => ✅   |  'true' => ✅ <br/> 'false' => ✅  | 'true' => ✅ <br/> 'false' => ✅  |
| $META_TITLE	   | the category meta title | 'true' => ✅ <br/> 'false' => ✅   |  'true' => ✅ <br/> 'false' => ✅  |  'true' => ✅ <br/> 'false' => ✅  |
| $NEXT	   | The ID of category after this one in the current parent category, following categories positions, or null if none exists. | 'true' => ✅ <br/> 'false' => 🚫   |  'true' => ✅ <br/> 'false' => ✅  | 'true' => ✅ <br/> 'false' => ✅  |
| $PARENT	   | the parent category | 'true' => ✅ <br/> 'false' => ✅   |  'true' => ✅ <br/> 'false' => ✅  |  'true' => ✅ <br/> 'false' => ✅  |
| $POSITION	   | the category position | 'true' => ✅ <br/> 'false' => ✅  |  'true' => ✅ <br/> 'false' => ✅  |  'true' => ✅ <br/> 'false' => ✅  |
| $POSTSCRIPTUM	   | the category postscriptum | 'true' => ✅ <br/> 'false' => ✅  |  'true' => ✅ <br/> 'false' => ✅  |  'true' => ✅ <br/> 'false' => ✅ |
| $PREVIOUS	   | The ID of category before this one in the current parent category, following categories positions, or null if none exists. | 'true' => ✅ <br/> 'false' => 🚫   |  'true' => ✅ <br/> 'false' => ✅  |  'true' => ✅ <br/> 'false' => ✅  |
| $PRODUCT_COUNT	   | Number of visible products contained by the current category. |'true' => ✅ <br/> 'false' => ✅   |  'true' => ✅ <br/> 'false' => ✅  |  'true' => ✅ <br/> 'false' => 🚫  |
| $TEMPLATE	   | the template id associated to this category | 'true' => ✅ <br/> 'false' => ✅   |  'true' => ✅ <br/> 'false' => ✅ |  'true' => ✅ <br/> 'false' => ✅  |
| $TITLE	   | the category title | 'true' => ✅ <br/> 'false' => ✅   |  'true' => ✅ <br/> 'false' => ✅ |  'true' => ✅ <br/> 'false' => ✅  |
| $UPDATE_DATE	   | the category update date | 'true' => ✅ <br/> 'false' => ✅  |  'true' => ✅ <br/> 'false' => ✅ |  'true' => ✅ <br/> 'false' => ✅  |
| $URL	   | the category URL | 'true' => ✅ <br/> 'false' => ✅   |  'true' => ✅ <br/> 'false' => ✅ |  'true' => ✅ <br/> 'false' => ✅  |
| $VERSION	   | the category version | 'true' => ✅ <br/> 'false' => ✅   |  'true' => ✅ <br/> 'false' => ✅  |  'true' => ✅ <br/> 'false' => ✅  |
| $VERSION_AUTHOR	   | the category version author | 'true' => ✅ <br/> 'false' => ✅   |  'true' => ✅ <br/> 'false' => ✅  |  'true' => ✅ <br/> 'false' => ✅  |
| $VERSION_DATE	   | the category version date | 'true' => ✅ <br/> 'false' => ✅   | 'true' => ✅ <br/> 'false' => ✅  |  'true' => ✅ <br/> 'false' => ✅  |
| $VISIBLE	   | Return if the category is visible or not | 'true' => ✅ <br/> 'false' => ✅   |  'true' => ✅ <br/> 'false' => ✅  |  'true' => ✅ <br/> 'false' => ✅  |

Plus the [global outputs](./global_arguments)

## Order possible values {#category-order-possible-values}
[Arguments](#category-arguments)

| Ascending value  | Descending value | Sorted fields            |
|------------------|------------------|:-------------------------|
| alpha            | alpha_reverse    | title                    |
| created          | created_reverse  | date of content creation |
| id               | id_reverse       | Order ID                 |
| manual           | manual_reverse   | position                 |
| random           |                  |                          |
| updated          | updated_reverse  | date of content update   |
| visible          | visible_reverse  | online items             |
