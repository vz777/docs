---
title: module:generate
---

## Description
Génére tous les fichiers nécessaires pour créer un nouveau module

## Usage
```shell
module:generate [options] [--] <name>
```

## Arguments
- `name`                   Le nom que vous souhaitez pour votre Module

## Options
- `--force`   Si défini, mettra à jour le module avec les répertoires et fichiers manquants (pas de remplacement).

## Exemple
Pour créer un module qui s'appele `MyModule`
```shell
php Thelia module:generate MyModule
