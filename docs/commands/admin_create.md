---
title: admin:create
---

## Description
Créer un nouvel administrateur

## Usage
```shell
  admin:create [options]
```

## Options
 -    `--login_name[=LOGIN_NAME]`  Login de l'admin
 -    `--first_name[=FIRST_NAME]`  Prénom de l'utilisateur
 -    `--last_name[=LAST_NAME]`    Nom de l'utilisateur
 -    `--email[=EMAIL]`            Email de l'admin
 -    `--locale[=LOCALE]`          Langue préférée (default: en_US)
 -    `--password[=PASSWORD]`      Mot de passe

## Exemple
Créer un admin en une ligne
```shell
php Thelia admin:create --login_name thelia2 --password StRoNgPaSsWoRd --last_name thelia2 --first_name thelia2 --email thelia2@example.com
```