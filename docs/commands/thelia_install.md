---
title: thelia:install
---

## Description
Installer Thelia avec la ligne de commande (CLI)

## Usage
```shell
thelia:install [options]
```

## Options
-   `--db_host[=DB_HOST]`          host for your database [default: "localhost"]
-   `--db_username[=DB_USERNAME]`  username for your database
-   `--db_password[=DB_PASSWORD]`  password for your database
-   `--db_name[=DB_NAME]`          database name
-   `--db_port[=DB_PORT]`          database port [default: "3306"]



## Exemple

Exemple pour installer Thelia en une ligne
```shell
php Thelia thelia:install --db_host localhost --db_username thelia2 --db_password StRoNgPaSsWoRd --db_name thelia --db_port 3306
```