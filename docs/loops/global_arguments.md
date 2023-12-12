---
title: Arguments communs
sidebar_position: 1
---

Ces arguments peuvent être définis sur toutes les boucles.

| Argument        |                                       Description                                       | Default |              Exemple |
|-----------------|:---------------------------------------------------------------------------------------:|--------:|---------------------:|
| backend_context |             Déterminez si la boucle est utilisée dans un contexte backend.              |   false | backend_context="on" |
| force_return    | forcer le résultat du retour pour les tables i18n même s'il n'y a pas d'enregistrement. |   false |    force_return="on" |
| limit           |                       Le nombre maximum de résultats à afficher.                        |         |           limit="10" |
| name *          |     Le nom de la boucle. Ce nom doit être unique et sert à référencer cette boucle.     |         |  name="my_name_loop" |
| offset          |   Le premier produit à afficher. Ne sera pas utilisé si l'argument `page` est défini.   |       0 |          offset="10" |
| page            |                                   La page à afficher.                                   |         |             page="2" |
