---
title: module:generate:model
---

## Description
Génèrer le model pour un module spécifique

## Usage
```shell
module:generate:model [options] [--] <name>
```

## Arguments
- `name`                   Nom du module

## Options
- `--generate-sql`  Avec cette option, génère le fichier SQL en même temps


## Exemple
Pour générer le modèle et le SQL pour votre module `MyModule`
```shell
php Thelia module:generate:model --generate-sql MyModule
