---
title: debug:event-dispatcher
---

## Description
Afficher tous les listeners configurés

## Usage
```shell
debug:event-dispatcher [options] [--] [<event>]
```

## Arguments
- `event`        Un nom d'évènement ou une partie de son nom

## Options
- `--dispatcher=DISPATCHER`  Pour afficher les événements d'un gestionnaire d'événements spécifique [default: "event_dispatcher"]
- `--format=FORMAT`  Le format de sortie (txt, xml, json, or md) [default: "txt"]
- `--raw`  Pour afficher une description brute



## Exemple
Pour lister tous les évènements qui ont "product" dans leurs noms et leurs listeners
```shell
php Thelia debug:event-dispatcher product
```