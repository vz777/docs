---
title: module:deactivate
---

## Description
Désactiver un module

## Usage
```shell
module:deactivate [options] [--] <module>
```

## Arguments
- `module`                    module à désactiver

## Options
- `--with-dependencies`  désactiver un module de manière récursive
-  `-y`, `--assume-yes`         Assumer de désactiver un module obligatoire


## Exemple
Pour désactiver le module TheliaLibrary
```shell
php Thelia module:deactivate TheliaLibrary
```