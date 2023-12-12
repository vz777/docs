---
title: thelia:config
---

## Description
Gèrer les variables de configuration

## Usage
```shell
thelia:config [options] [--] <COMMAND> [<name> [<value>]]
```

## Arguments
- `COMMAND`    Commande : list, get, set, delete
- `name`    Le nom de la variable
- `value`   La valeur de la variable


## Options
- `--secured`  Lors de la définition d'une nouvelle variable, indique que la variable est sécurisée.
- `--visible`  Lors de la définition d'une nouvelle variable, indique que la variable est visible.


## Exemple

Exemple pour changer la valeur de la configuration `url_site` et la garder visible
```shell
php Thelia thelia:config set url_site "https://thelia.net" --visible
```