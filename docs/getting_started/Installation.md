---
title: Installation
sidebar_position: 1
---

Vous devez suivre les prérequis et avoir Composer installé.
Avec cette installation, vous pouvez gérer facilement votre version de Thelia avec Composer, installer de nouvelles
dépendances, etc.

:::info

Si vous souhaitez utiliser **docker**, veuillez suivre [ceci](./docker).

:::

### Téléchargez le projet
```
composer create-project thelia/thelia-project YourProject 2.5.3
```

### Lancez l'installation de la base de données

```bash
cd YourProject
php Thelia thelia:install
```

C'est tout, votre Thelia est maintenant installé. Cependant, selon votre serveur web, vous devrez peut-être effectuer quelques configurations :
- Guide pour [Apache](./apache_configuration)
- Guide pour [Nginx](./nginx_configuration)


### Insérez des données de démo

Maintenant, si vous souhaitez des données de démo avec des produits fictifs mais réalistes, exécutez

```bash
php local/setup/import.php
```

### Créez un compte administrateur

```bash
php Thelia admin:create
```

### Ajouter un module
Si vous souhaitez ajouter un module créé par notre communauté, vous pouvez parcourir [this](../../modules) et exécuter la commande `composer require` qui y est associée pour le télécharger.
Ensuite, vous pouvez activer et désactiver le module dans les pages des modules de votre back-office.
