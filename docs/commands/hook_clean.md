---
title: hook:clean
---

## Description
Nettoyer les hooks. Cela supprimera tous les hooks, puis le recréera.

## Usage
```shell
hook:clean [options] [--] [<module>]
```

## Arguments
- `module`                    Le code du module à nettoyer

## Options
- `-y`, `--assume-yes`      Suppose de répondre oui à toutes les questions


## Exemple
Pour nettoyer le hook du Carrousel sans demander de confirmation
```shell
php Thelia hook:clean -y Carousel
```