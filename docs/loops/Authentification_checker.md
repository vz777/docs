---
title: Authentification checker
---

La boucle Auth effectue des vérifications d'autorisation par rapport à l'utilisateur actuel. Cette boucle ne renvoie rien si l'autorisation échoue, ou le contenu de la boucle si elle réussit.
Vous pouvez vérifier dans le front office si un administrateur est connecté et effectuer des fonctions spécifiques dans votre modèle de front office (comme l'édition directe, par exemple).
`{loop type="auth" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#auth-arguments}

| Argument | Description                                                                                                                                                                             | Defaut | Exemple                               |
|----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------:|:--------------------------------------|
| access   | Une liste séparée par des virgules, si elle est vide ou manquante, l'autorisation est vérifiée uniquement concernantg les rôles <br/> [Valeurs attendues](#auth-access-possible-values) |        |                                       |
| module   | Une liste de modules séparée par des virgules                                                                                                                                           |        |                                       |
| resource | Une liste de ressource séparée par des virgules                                                                                                                                         |        |                                       |
| role *   | Une liste de rôles utilisateurs séparée par des virgules                                                                                                                                |        | role="ADMIN" ou sinon role="CUSTOMER" |

## Exemples

Je veux vérifier si l'administrateur actuel est autorisé à utiliser la fonction de recherche du back-office.
```smarty
{loop type="auth" name="can_create" role="ADMIN" resource="admin.administrator" access="CREATE"}
    <a title="{intl l='Create a new administrator'}" href="#administrator_create_dialog" data-toggle="modal">
        <span class="glyphicon glyphicon-plus"></span>
    </a>
{/loop}
```

Le rôle est ADMIN, ce qui signifie que l'utilisateur actuel doit avoir le rôle "ADMIN". L'autorisation est "admin.administrator", qui est l'identifiant de l'autorisation d'administrateur. Selon l'attribut d'accès, l'utilisateur actuel doit avoir l'autorisation CREATE.
I want to check if the customer is logged in, or not.
```smarty
{loop type="auth" name="customer_info_block" role="CUSTOMER"}
    <p>Your are logged in. <a href="{viewurl view='index' action='logoutCustomer'}">Logout</a></p>
{/loop}

{elseloop rel="customer_info_block"}
    You are not logged in. <a href="{viewurl view='login'}">Login now</a> or <a href="{viewurl view='create_account'}">create your account</a>
{/elseloop}
```

## Access possible values {#auth-access-possible-values}
[Arguments](#auth-arguments)

| value  |
|--------|
| CREATE |
| DELETE |
| UPDATE |
| VIEW   |