---
title: Introduction
slug: /
sidebar_position: 1
---

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/thelia/thelia/test.yml?branch=main&style=flat-square)
![Scrutinizer code quality (GitHub/Bitbucket)](https://img.shields.io/scrutinizer/quality/g/thelia/thelia?style=flat-square)
![GitHub](https://img.shields.io/github/license/thelia/thelia?style=flat-square)
![Last commit](https://img.shields.io/github/last-commit/thelia/thelia.svg?style=flat-square)
![GitHub Repo stars](https://img.shields.io/github/stars/thelia/thelia?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/thelia/thelia?style=flat-square)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/thelia/thelia?label=latest%20release&style=flat-square)

Thelia est un outil open source pour la création de sites web e-business et la gestion de contenu en ligne. Ce logiciel est publié sous LGPL.

:::attention

Ceci est la documentation pour Thelia >= 2.5.0, si vous utilisez une précédente version, regardez [Legacy documentation](http://thelia.github.io).

:::

Compatibilité
------------


| Thelia version |          2.3          |          2.4          |             2.5             |
|----------------|:---------------------:|:---------------------:|:---------------------------:|
| PHP            | 5.5 / 5.6 / 7.0 / 7.1 | 7.0 / 7.1 / 7.2 / 7.3 | 8.0.2       /     8.1 / 8.2 |
| MySQL          |       5.5 / 5.6       |    5.5 / 5.6 / 5.7    |       5.6 / 5.7 / 8.0       |
| Symfony        |          2.8          |          2.8          |         6.0  / 6.3          |
| Maintained     |          No           |  Security fixes only  |             Yes             |


Exigences
------------

* PHP
  * Extensions requises :
    * PDO_Mysql
    * openssl
    * intl
    * gd
    * curl
    * dom
  * safe_mode off
  * memory_limit at least 128M, preferably 256M.
  * post\_max\_size 20M
  * upload\_max\_filesize 2M
  * date.timezone must be defined
* Web Server Apache 2 or Nginx
