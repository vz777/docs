---
title: Internationalization
sidebar_position: 13
---

## Dans les templates

Si vous souhaitez créer des templates multilingues compatibles , vous devez porter une attention particulière à :
- texte statique
- formatage de date
- formatage de nombre
- formatage de la devise

Thelia propose plusieurs fonctions Smarty pour vous aider.

### {intl}

La fonction {intl} traduit une chaîne dans la langue actuelle.

    {intl l="This is a string to translate"}

    ou

    {intl l="This is another string to translate" d="mymodule.ai"}

    ou

    {intl l="Hello, %name, how do you do ?" name={$name}}

Nous avons ici trois utilisations typiques de {intl}.

#### `l`

Le paramètre `l` contient la chaîne qui sera traduite. Cette chaîne ne doit contenir aucune variable, telle que `{intl l="Bonjour, $name, comment ça va ?"}`, les variables internes doivent être utilisées à la place. Chaque `%varname` trouvé dans la chaîne sera remplacé par la valeur du paramètre `varname`. Par exemple : `{intl l="Bonjour, %user, comment ça va ?" user={$name}}` est correct.

Si aucune traduction ne peut être trouvée pour une chaîne donnée, le traducteur renverra soit la valeur du paramètre `l`, soit une chaîne vide, en fonction des paramètres "Langues et URL".

#### `d`

Le paramètre `d` est le domaine du message, un ensemble de messages internationalisés. Thelia contient les domaines suivants :

- `core` => pour les traductions du cœur de Thelia
- bo.*template_name* (par exemple : `bo.default`) => pour chaque template du back-office
- fo.*template_name* (par exemple : `fo.default`) => pour chaque template du front-office
- pdf.*template_name* (par exemple : `pdf.default`) => pour chaque template PDF
- email.*template_name* (par exemple : `email.default`) => pour chaque template d'e-mail
- Dans les modules :
    - *module_code* (par exemple : `paypal`) => pour les traductions de base du module
    - *module_code*.ai (par exemple : `paypal.ai`) => utilisé dans les templates du dossier AdminIncludes (Remarque : AdminIncludes sont désormais obsolètes)
    - *module_code*.bo.*template_name* (par exemple : `paypal.bo.default`) => utilisé dans le template du back-office
    - *module_code*.fo.*template_name* (par exemple : `paypal.fo.default`) => utilisé dans le template du front-office

Ce paramètre est principalement utilisé dans les modules. Les autres modèles (front-office, back-office, PDF et e-mail) peuvent utiliser la fonction `{default_translation_domain}` pour définir un domaine de message global au modèle, et le paramètre `d` pourrait alors être omis.

Par exemple, dans le fichier `layout.tpl` du modèle par défaut du front-office, vous trouverez `{default_translation_domain domain='fo.default'}`.

#### `js`

Lors de l'utilisation de `{intl}` dans une chaîne JavaScript, la chaîne traduite peut contenir des guillemets simples et/ou doubles, qui doivent être échappés pour éviter une erreur de syntaxe.

Pour ce faire, utilisez le paramètre `js`, qui échappera les guillemets simples et doubles :

    var myString = '{intl l="Une chaîne avec des guillemets simples et \"doubles\"" js=1}';

Le résultat sera :

    var myString = 'Une chaîne avec des guillemets simples et \"doubles\"';

Vous pouvez également utiliser le modificateur Smarty `escape:'html'` :

    var myString = '{intl l="Une chaîne avec des guillemets simples et \"doubles\""|escape:'html'}';

Le résultat sera dans ce cas :

    var myString = 'Une chaîne avec des &#039;guillemets simples&#039; et &quot;doubles&quot;';

Le modificateur 'quotes' peut également être utilisé, avec précaution car il échappe uniquement les guillemets simples :

    var myString = '{intl l="Une chaîne avec des guillemets simples et \"doubles\""|escape:'quotes'}';

donnera :

    var myString = 'Une chaîne avec des \'guillemets simples\' et "doubles"';

#### Traduction de vos templates

La traduction se fait via le back-office -> Configuration -> Traduction. Les chaînes sont automatiquement collectées dans votre template, et vous pourrez saisir la traduction pour n'importe quelle langue définie dans votre boutique (voir Configuration, -> Langues & URL).

### {format_date}

Utilisez cette fonction pour formater une date selon les normes locales actuelles.

#### Exemples

    Renvoie la date donnée en utilisant le format de date et d'heure locaux
    {format_date date=$dateTimeObject}

    Renvoie la date donnée en utilisant un format spécifié    
    {format_date date=$dateTimeObject format="Y-m-d H:i:s"}

    Renvoie la date donnée sous forme de chaîne de date, en utilisant la date locale
    {format_date date=$dateTimeObject output="date"}

    Renvoie la date donnée sous forme de chaîne d'heure, en utilisant la date locale
    {format_date date=$dateTimeObject output="time"}

#### Paramètres

- `date` : un objet DateTime (obligatoire)
- `format` : le format attendu. Le format local actuel sera utilisé si ce paramètre est vide ou manquant
- `output` : le type de sortie souhaité, parmi :
    - `date` : la date seule
    - `time` : l'heure seule
    - `datetime` : la date et l'heure (par défaut)

### {format_number}

Utilisez cette fonction pour formater un nombre selon les standards de la langue actuelle ou un format spécifique.

#### Exemples

    Sorties "1 246,1"
    {format_number number="1246.12" decimals="1" dec_point="," thousands_sep=" "}

    Sorties "1246,12" if locale is fr_FR, 1 246.12 if locale is en_US
    {format_number number="1246.12"}


#### Paramètres

- `number`: int or float number
- `decimals`: how many decimals format expected
- `dec_point`: separator for the decimal point
- `thousands_sep`: thousands separator


### {format_money}

Use this function to format an amount of money according to the current locale standards, or a specific format.

#### Exemples

    Renvoie "1 246,1 €"
    {format_money number="1246.12" decimals="1" dec_point="," thousands_sep=" " symbol="€"}

    Renvoie "1246,12 €" if locale is fr_FR, "€ 1 246.12" if locale is en_US
    {format_money number="1246.12"}

#### Paramètres

- `number` : nombre entier ou flottant
- `decimals` : le nombre de décimales attendu
- `dec_point` : séparateur pour la virgule décimale
- `thousands_sep` : séparateur des milliers
- `symbol`: symbole de la devise
- `remove_zero_decimal` (depuis la version 2.4.0) : Ne pas afficher les décimales si elles sont nulles. Exemple : 1234,00 € deviendra 1234 €

### {format_address}

Utilisez cette fonction pour formater une adresse selon les normes du pays actuel.

#### Exemples

```smarty
{* Formate l'adresse 1 en HTML *}
{format_address address="1"}

{* Formate l'adresse 1 en HTML et en français (la langue par défaut est la langue de la session) *}
{format_address address="1" locale="fr_FR"}

{* Formate l'adresse 1 en HTML avec une balise et des attributs personnalisés *}
{format_address address="1" html_tag="address" html_class="customer-address" html_id="address1" }

{* Formate l'adresse 1 en texte brut *}
{format_address address="1" html="0"}

{* Formate l'adresse 1 comme une adresse postale *}
{format_address postal="1" address="1"}

{* Formate l'adresse 1 comme une adresse postale et définis le pays d'origine (la valeur par défaut est le pays du magasin, puis le pays par défaut) *}
{format_address postal="1" address="1" origin_country='FR'}

{* Formate l'adresse de commande 1 *}
{format_address order_address="1"}

{* Formate une adresse personnalisée *}
{format_address
    recipient="M. Barack Obama"
    organization="The White House"
    address_line1="1600 Pennsylvania Avenue NW"
    postal_code="20500"
    locality="Washington"
    country_code="US"
    administrative_area="US-DC"
```

#### Parameters

Informations sur l'adresse :

- `address`: un id d'adresse
- ou `order_address`: un id d'adresse de commande
- ou une liste séparée d'informations :
    - `country_code` : le code du pays, par exemple: US
    - `administrative_area` : code de l'État ou de la province. par exemple:  US-CA
    - `locality` : la ville
    - `dependent_locality`
    - `postal_code`
    - `sorting_code`
    - `address_line1`
    - `address_line2`
    - `organization`
    - `recipient`

Options de formatage :

- `postal` : (booléen) formater l'adresse comme une adresse postale. Prend en charge la mise en majuscules des champs là où cela est nécessaire pour faciliter le tri automatisé du courrier. Par défaut : `false`
- `origin_country` :  utilisé lorsque `postal` est true pour spécifier le pays d'origine, permettant de différencier entre le courrier national et international. La valeur par défaut est le pays du magasin, puis le pays par défaut si le pays du magasin n'est pas spécifié
- `html` : (booléen) formater l'address en html (`true`) ou en texte brut (`false`)
- `html_tag` : balise externe principale utilisée si le format HTML est utilisé. par défaut : `p`
- `html_*` :  liste des attributs HTML à ajouter à la balise principale. par exemple : `html_class="address"` générera `<p class="address">...`
- `locale` :  la locale utilisée pour générer le nom du pays. Par défaut : la locale actuelle en session.

## Dans les fichiers PHP

Si vous avez des chaînes à traduire dans vos classes PHP telles que des messages d'erreur, vous devez utiliser le traducteur.
Le traducteur est une classe singleton qui vous aide à enregistrer votre chaîne comme traduisible comme ceci :

```php
Translator::getInstance()
    ->trans("A string that need to be translated");
```

Si vous voulez insérer une valeur dynamique qui peut changer et qui n'a pas besoin d'être traduite, vous pouvez la passer dans le second paramètre :

```php
Translator::getInstance()
    ->trans("A string that need to be translated with %variable", ['%variable' => $myVariable]);
```

Le troisième paramètre de la fonction trans est le domaine. Si vous êtes dans un fichier de module, le mieux est de prendre le domaine global du module présent dans une constante de la classe de base :

```php
Translator::getInstance()
    ->trans(
        "A string that need to be translated with %variable",
        ['%variable' => $myVariable]
        MyProject::DOMAIN_NAME
    );
```
