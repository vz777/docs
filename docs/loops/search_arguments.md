---
title: Search arguments
sidebar_position: 2
---

Ces arguments peuvent être définis sur toutes les boucles qui sont recherchables

| Argument    |                                                                                        Description                                                                                        |          Defaut |                       Exemple |
|-------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|----------------:|------------------------------:|
| search_in   |                 Une liste séparée par des virgules des champs dans lesquels la recherche est effectuée. Valeurs possibles : ref, title, chapo, description, postscriptum.                 |                 |             search_in="title" |
| search_mode | Le mode de recherche :  : `any_word` (recherche de n'importe quel mot séparé par un espace), `sentence` (la phrase, n'importe où dans le champ) ou  `strict_sentence` (la phrase exacte). | strict_sentence | search_mode="strict_sentence" |
| search_term |                                                                                  Le terme à rechercher.                                                                                   |               0 |      search_term="my product" |
