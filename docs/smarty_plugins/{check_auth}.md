La fonction `check_auth` peut être utilisée pour déterminer si l'utilisateur est autorisé à voir quelque chose.

```
{check_auth role="CUSTOMER" login_tpl="login"}

{check_auth resource="admin.address" access="VIEW" login_tpl="login"}
```


## rôle
Un utilisateur peut avoir uniquement l'un de ces deux rôles :
 - ADMIN : un administrateur du site
 - CUSTOMER : un client enregistré et connecté

## login_tpl
Cet argument est le nom de la vue (la page de connexion est “login”). Si l'utilisateur n'est pas autorisé et que cet argument est défini, il est redirigé vers cette vue.

## resource
L'argument resource peut être utile dans le back-office. Voici la liste des ressources disponibles dans Thelia 2 :
- admin.address
- admin.configuration.administrator
- admin.configuration.advanced
- admin.configuration.area
- admin.configuration.attribute
- admin.category
- admin.configuration
- admin.content
- admin.configuration.country
- admin.coupon
- admin.configuration.currency
- admin.customer
- admin.configuration.feature
- admin.folder
- admin.home
- admin.configuration.language
- admin.configuration.mailing-system
- admin.configuration.message
- admin.module
- admin.order
- admin.product
- admin.configuration.profile
- admin.configuration.shipping-zone
- admin.configuration.tax
- admin.configuration.template
- admin.configuration.system-logs
- admin.configuration.admin-logs
- admin.configuration.store
- admin.configuration.translations
- admin.configuration.update
- admin.export
- admin.export.customer.newsletter
- admin.tools

## module
Nom du module auquel l'utilisateur doit avoir accès. Exemple :
```
    {check_auth role="ADMIN" module="Carousel" access="UPDATE" login_tpl="login"}
```

## access

Il existe 4 types d'accès à une ressource :

- CREATE : créer une nouvelle entrée
- VIEW : voir la ressource
- UPDATE : mettre à jour la ressource
- DELETE : supprimer la ressource

Ces accès peuvent être configurés depuis le back-office, onglet "Configuration", sur "Profils d'administration".
