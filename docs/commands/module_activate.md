---
title: module:activate
---

## Description
Activer un module

## Usage
```shell
module:activate [options] [--] <module>
```

## Arguments
- `module`                    module à activer

## Options
- `--with-dependencies`  Activer le module de manière récursive
- `-s`, `--silent`             Ne lève pas d'exception en cas d'erreur


## Exemple
Pour activer silencieusement le module TheliaLibrary
```shell
php Thelia module:activate -s TheliaLibrary
```