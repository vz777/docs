---
title: cache:clear
---

## Description
Vider le cache

## Usage
```shell
cache:clear [options]
```

## Arguments
- `module`                    module à activer

## Options
- `--no-warmup`            Ne pas préchauffer le cache
- `--no-optional-warmers`   Ignorer les préchauffeurs de cache facultatifs (plus rapide)


## Exemple
```shell
php Thelia cache:clear
```
