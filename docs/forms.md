---
title: Forms
sidebar_position: 10
---

## Définitions des formulaires
Pour créer un nouveau formulaire, créez une nouvelle classe qui étend `BaseForm` puis implémentez la méthode `buildForm` pour décrire votre formulaire.

```php
<?php
namespace Thelia\Form;

use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Validator\Constraints;
use Symfony\Component\Validator\Context\ExecutionContextInterface;
use Thelia\Core\Translation\Translator;
use Thelia\Model\AddressQuery;
use Thelia\Model\ModuleQuery;
use Thelia\Module\BaseModule;

class OrderDeliveryForm extends BaseForm
{
    protected function buildForm(): void
    {
        $this->formBuilder
            ->add('delivery-address', IntegerType::class, [
                'required' => true,
                'constraints' => [
                    new Constraints\NotBlank(),
                    new Constraints\Callback(
                        [$this, 'verifyDeliveryAddress']
                    ),
                ],
            ])
            ->add('delivery-module', IntegerType::class, [
                'required' => true,
                'constraints' => [
                    new Constraints\NotBlank(),
                    new Constraints\Callback(
                        [$this, 'verifyDeliveryModule']
                    ),
                ],
            ]);
    }

    public function verifyDeliveryAddress($value, ExecutionContextInterface $context): void
    {
        $address = AddressQuery::create()
            ->findPk($value);

        if (null === $address) {
            $context->addViolation(Translator::getInstance()->trans('Address ID not found'));
        }
    }

    public function verifyDeliveryModule($value, ExecutionContextInterface $context): void
    {
        $module = ModuleQuery::create()
            ->filterActivatedByTypeAndId(BaseModule::DELIVERY_MODULE_TYPE, $value)
            ->findOne();

        if (null === $module) {
            $context->addViolation(Translator::getInstance()->trans('Delivery module ID not found'));
        } elseif (!$module->isDeliveryModule()) {
            $context->addViolation(
                sprintf(Translator::getInstance()->trans("delivery module %s is not a Thelia\Module\DeliveryModuleInterface"), $module->getCode())
            );
        }
    }
}
```

Pour plus d'informations sur les types de champs, vous pouvez vous référer à [Symfony form type documentation](https://symfony.com/doc/current/reference/forms/types.html)

## Utilisation dans les templates
Pour afficher le formulaire dans votre template vous aurez besoin du nom du formulaire, c'est le nom de votre module en minuscule + l'espace de nom complet et la classe de votre formulaire en snake_case (Convention de nommage des mots en minuscule, séparés par des tirets bas.).
Par exemple, le nom du formulaire pour `VotreModule\Form\QuelquechoseForm.php` sera `votremodule_form_quelquechose_form`
Il peut être modifié avec la fonction statique `getName` mais nous ne conseillons pas de le faire, 
car il est plus simple de deviner le nom d'un formulaire en lisant son espace de noms que d'aller dans la classe et de chercher la méthode.
Cela garantit également un nom unique pour votre formulaire.

### Appeler votre formulaire

Tout d'abord, vous devez appeler le formulaire dont vous avez besoin en utilisant le bloc de formulaire :
```smarty
    {form name="yourmodule_form_something_form"}
        ...
    {/form}
```
La référence du formulaire est maintenant disponible dans la variable `$form`.

### Afficher le formulaire
```smarty
    {form name="yourmodule_form_something_form"}
        <form method="post" action="{url path='your/target'}" {form_enctype form=$form}>
        ...
        </form>
    {/form}
```

### Affichage d'un champ de formulaire

#### Champ de formulaire personnalisé
Pour afficher un champ, vous devez utiliser le bloc `{form_field}`, et mettre le nom du champ que vous voulez afficher dans le paramètre "field" :
```smarty
{form name="thelia_form_order_delivery_form"}
    <form method="post" action="{url path='your/target'}" {form_enctype form=$form} >
        {form_hidden_fields form=$form}

        {form_field form=$form field="firstname"}
           <label>{intl l="{$label}"}</label>
           <input type="text" name="{$name}" value="{$value}" {$attr} />
        {/form_field}

        {form_field form=$form field="delivery_options"}
            <select name="{$name}">
                {foreach $choices as $choice}
                    <option value="{$choice->value}">{$choice->label}</option>
                {/foreach}
            </select>
        {/form_field}
    </form>
{/form}
```
Valeurs disponibles dans le bloc `{form_field}` :

-    `$name` : nom du champ utilisé dans la partie nom de votre saisie
-    `$value` : valeur par défaut à afficher
-    `$data` : l'attribut de données de la définition du formulaire
-    `$type` : le type de champ, tel que défini dans la définition du formulaire (choice, radio, number, text, textarea, etc.)
-    `$checked` : le statut de vérification (true / false) d'un champ radio ou d'une case à cocher
-    `$multiple` : true si un champ de sélection peut avoir plusieurs valeurs sélectionnées
-    `$disabled` : true si le champ est désactivé, false sinon
-    `$read_only` : true si le champ est en lecture seule, false sinon
-    `$max_length` : la longueur maximale du champ
-    `$required` : true si le champ est obligatoire, false sinon
-    `$label` : label pour ce champ, peut être utilisé dans la balise html label par exemple
-    `$attr` : tous les attributs définis dans votre classe de formulaire, il peut s'agir de n'importe quel attribut HTML, comme un id, ou tout autre attribut comme la validation de formulaire HTML5 par exemple
-    `$attr_list` : le tableau 'attr' de la définition du formulaire
-    `$options` : toutes les options disponibles pour ce champ. Cette variable est un tableau PHP.
-    `$error` : true si une erreur de validation a été détectée sur le champ
-    `$message` : le message d'erreur, défini si $error est vrai, vide sinon.
-    `$choices` : un tableau de choix disponibles. $choices n'est disponible que si votre champ a des choix définis.

#### Champ de formulaire automatique
Pour accélérer l'écriture des formulaires dans les templates, Thelia fournit un plugin Smarty `render_form_field` qui génère automatiquement le code HTML du champ, et tout le code associé, comme le formatage et le rapport d'erreur.
```smarty
{form name="thelia_form_order_delivery_form"}
    <form method="post" action="{url path='your/target'}" {form_enctype form=$form} >
        {form_hidden_fields form=$form}

        {render_form_field form=$form field="firstname"}
        {render_form_field form=$form field="delivery_options"}
    </form>
{/form}
```

### Afficher les erreurs
Si votre formulaire contient des erreurs, il affiche automatiquement la valeur déjà envoyée par l'utilisateur et peut ensuite afficher un message pour chaque champ contenant des erreurs. Le bloc `{form_field_error}` est utilisé et fonctionne comme le bloc `{form_field}`. Vous pouvez l'appeler en dehors du bloc `{form_field}` :
```smarty
{form name="thelia_form_order_delivery_form"}
    <form method="post" action="{url path='your/target'}" {form_enctype form=$form} >
        {form_hidden_fields form=$form}

        {form_field form=$form field="firstname"}
            {form_error form=$form.firstname}
                {$message}
            {/form_error}

            <label>{intl l="{$label}"}</label>
           <input type="text" name="{$name}" value="{$value}" {$attr} />
        {/form_field}
    </form>
{/form}
```

### Champs cachés
Thelia utilise des champs cachés en interne. Pour afficher ces champs (et tous les champs cachés définis dans votre formulaire), utilisez le plugin `form_hidden_fields`.
N'oubliez pas ceci, car il contient les données de validation CRSF :
```smarty
{form name="thelia_form_order_delivery_form"}
    <form method="post" action="{url path='your/target'}" {form_enctype form=$form} >
         {form_hidden_fields form=$form}
            ...
    </form>
{/form}
```

## Utilisation dans les contrôleurs
Les formulaires sont utiles pour valider les données soumises par les utilisateurs. Ceci est fait par deux fonctions dans les contrôleurs :
- `createForm` qui crée un objet formulaire
- `validateForm` qui valide les données du formulaire

```php
<?php

namespace Front\Controller;

class OrderController extends BaseFrontController
{
    public function submitRoute()
    {
        $form = $this->createForm(OrderDeliveryForm::getName);

       try {
            $data = $this->validateForm($form)->getData();

            // Do what you want with submitted data

        } catch (\Exception $e) {
           // Do something when the form is not valid
        }
    }
}
```
