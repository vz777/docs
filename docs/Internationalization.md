---
title: Internationalization
sidebar_position: 13
---

## In templates

If you want to create multilingual compatible templates, you have to pay a special attention to :
- static text
- date formatting
- number formatting
- money formatting

Thelia provides several Smarty functions to help you.

### {intl}

The {intl} function translates a string into the current language.

    {intl l="This is a string to translate"}

    or

    {intl l="This is another string to translate" d="mymodule.ai"}

    or

    {intl l="Hello, %name, how do you do ?" name={$name}}

We have here three typical uses of {intl}

#### `l`

The `l` parameter contains the string that will be translated. This string should not contains any variable, such as `{intl l="Hello, $name, how do you do ?"}`, internal variables should be used instead. Every `%varname` found in the string will be replaced by the value of the `varname` parameter. For example: `{intl l="Hello, %user, how do you do ?" user={$name}}` is fine.

If no translation can be found for a given string, the translator will return either the value of the `l` parameter, or an empty string, depending on the "Languages & URLs" parameters.

#### `d`

The `d` parameter is the message domain, a set of internationalized messages. Thelia contains the following domains :

- `core` => for thelia core translations
- bo.*template_name* (eg : `bo.default`) => for each back-office template
- fo.*template_name* (eg : `fo.default`) => for each front-office template
- pdf.*template_name* (eg : `pdf.default`) => for each PDF template
- email.*template_name* (eg : `email.default`) => for each email template
- In Modules :
    - *module_code* (eg : `paypal`) => fore module core translations
    - *module_code*.ai (eg : `paypal.ai`) => used in AdminIncludes templates (Note: AdminIncludes are now deprecated)
    - *module_code*.bo.*template_name* (eg : `paypal.bo.default`) => used in back office template
    - *module_code*.fo.*template_name* (eg : `paypal.fo.default`) => used in front office template

This parameter is mostly used in modules. Other templates (front-office, back-office, PDF and email) may use the `{default_translation_domain}` function to define a template-wide message domain, and the `d` parameter could then be omitted.

For examples, in the `layout.tpl` file of the default front-office template, you'll find `{default_translation_domain domain='fo.default'}`.

#### `js`

When using `{intl}` in a Javascript string, the translated string may contain simple and/or double quotes, that should be escaped to prevent a syntax error.

To do so, use the `js` parameter, that will escape single and double quotes :

    var myString = '{intl l="A string with 'simple' and \"double\" quotes" js=1}';

The result will be :

    var myString = 'A string \'simple\' and \"double\" quotes';

You may also use the escape:'html' Smarty modifier :

    var myString = '{intl l="A string with 'simple' and \"double\" quotes"|escape:'html'}';

The result will be in this case :

    var myString = 'A string with &#039;simple&#039; and &quot;double&quot; quotes';

The 'quotes' modifier could also be used, with some care as it escapes only simple quotes :

    var myString = '{intl l="A string with 'simple' and \"double\" quotes"|escape:'quotes'}';

will gives :

    var myString = 'A string with \'simple\' and "double" quotes';

#### Translating your templates

Translations is done through the back-office -> Configuration -> Translation. The string are automatically collected in your template, and you'll be able to enter the translation for any language defined in your store (see Configuration, -> Languages & URLs).

### {format_date}

Use this function to format a date according to the current locale standards.

#### Examples

    Return the given date using the locale date format as date and time
    {format_date date=$dateTimeObject}

    Return the given date using a specified format    
    {format_date date=$dateTimeObject format="Y-m-d H:i:s"}

    Return the given date as a date string, using the locale date
    {format_date date=$dateTimeObject output="date"}

    Return the given date as a time string, using the locale date
    {format_date date=$dateTimeObject output="time"}

#### Parameters

- `date`: a DateTime object (required)
- `format`: the expected format. The current locale format will be used if this parameter is empty or missing
- `output`: the type of desired ouput, one of :
    - `date`: the date only
    - `time`: the time only
    - `datetime`: the date and the time (default)


### {format_number}

Use this function to format a number according to the current locale standards, or a specific format.

#### Examples

    Outputs "1 246,1"
    {format_number number="1246.12" decimals="1" dec_point="," thousands_sep=" "}

    Outputs "1246,12" if locale is fr_FR, 1 246.12 if locale is en_US
    {format_number number="1246.12"}


#### Parameters

- `number`: int or float number
- `decimals`: how many decimals format expected
- `dec_point`: separator for the decimal point
- `thousands_sep`: thousands separator


### {format_money}

Use this function to format an amount of money according to the current locale standards, or a specific format.

#### Examples

    Outputs "1 246,1 €"
    {format_money number="1246.12" decimals="1" dec_point="," thousands_sep=" " symbol="€"}

    Outputs "1246,12 €" if locale is fr_FR, "€ 1 246.12" if locale is en_US
    {format_money number="1246.12"}

#### Parameters

- `number`: int or float number
- `decimals`: how many decimals format expected
- `dec_point`: separator for the decimal point
- `thousands_sep`: thousands separator
- `symbol`: Currency symbol
- `remove_zero_decimal` (since 2.4.0) : Do not show decimals if they are zero. example: 1234.00 € will become 1234 €

### {format_address}

Use this function to format an address according to the current country standards.

#### Examples

```smarty
{* format Address 1 in html *}
{format_address address="1"}

{* format Address 1 in html and in french (default is the session lang) *}
{format_address address="1" locale="fr_FR"}

{* format Address 1 in html with custom tag and attributes *}
{format_address address="1" html_tag="address" html_class="customer-address" html_id="address1" }

{* format Address 1 in plain text *}
{format_address address="1" html="0"}

{* format Address 1 as a postal label *}
{format_address postal="1" address="1"}

{* format Address 1 as a postal label and set the origin country (default is the shop country, then the default country) *}
{format_address postal="1" address="1" origin_country='FR'}

{* format order address 1 *}
{format_address order_address="1"}

{* format a custom address *}
{format_address
    recipient="M. Barack Obama"
    organization="The White House"
    address_line1="1600 Pennsylvania Avenue NW"
    postal_code="20500"
    locality="Washington"
    country_code="US"
    administrative_area="US-DC"
}
```

#### Parameters

Address information:

- `address`: an address id
- or `order_address`: an order address id
- or separated list of information :
    - `country_code` : the country code. eg: US
    - `administrative_area` : state or province code. eg: US-CA
    - `locality` : The city
    - `dependent_locality`
    - `postal_code`
    - `sorting_code`
    - `address_line1`
    - `address_line2`
    - `organization`
    - `recipient`

Formatting options:

- `postal` : (boolean value) format address as a postal label. Takes care of uppercasing fields where required by the format (to facilitate automated mail sorting). Default: `false`.
- `origin_country` : used when `postal` is true to specify the origin country. allowing it to differentiate between domestic and international mail. The default value is the store country, then the default country if store country is not specified.
- `html` : (boolean value) format address in html (`true`) or in plain text (`false`)
- `html_tag` : main outer tag used if html formatting is used. default : `p`
- `html_*` : list of html attributes to add to the main tag. eg : `html_class="address"` will generate `<p class="address">...`
- `locale` : the locale used to generate country name. Default: the current locale in session.

## In php files

If you have string to translate in your php classes like error messages you have to use the translator.
Translator is a singleton class that help you to register your string as translatable like this :

```php
Translator::getInstance()
    ->trans("A string that need to be translated");
```

If you want to insert dynamic value that can change and that don't need to be translated you can pass it in the second parameter :

```php
Translator::getInstance()
    ->trans("A string that need to be translated with %variable", ['%variable' => $myVariable]);
```

Third parameter of the trans function is the domain so if you are in a module file the best is to take the global module domain present in a constant of base class :
```php
Translator::getInstance()
    ->trans(
        "A string that need to be translated with %variable",
        ['%variable' => $myVariable]
        MyProject::DOMAIN_NAME
    );
```
