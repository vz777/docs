---
title: Dockerize your Thelia
sidebar_position: 6
---

Une configuration Docker est fournie dans le dépôt de Thelia. Elle utilise docker-compose.

Elle nécessite évidemment [docker](https://docker.com/) et [docker-compose](http://docs.docker.com/compose/)

## Démarrer les conteneurs

Exécutez simplement :

```
docker-compose up -d
```

Astuce : créez un alias pour docker-compose, c'est pénible de l'écrire à chaque fois

## Comment l'utiliser

Tous les scripts sont lancés via Docker. Par exemple :

```
docker exec -it thelia_web_1 php Thelia cache:clear
docker exec -it thelia_web_1 php setup/faker.php
docker exec -it thelia_web_1 unit-tests.sh
docker exec -it thelia_web_1 php composer.phar install
```

```thelia_web_1``` est le nom de votre conteneur principal. Exécutez ```docker-compose``` si le nom de votre conteneur est différent.

Vous pouvez maintenant utiliser Thelia exactement comme si vous aviez toute la pile php/apache/mysql installée sur votre machine. Cette configuration contient xdebug, vous pouvez donc également utiliser la fonction pas à pas.

## Informations sur la base de données

* host : mariaDB
* login : root
* password : toor


## Comment changer la configuration

Toute la configuration peut être personnalisée pour votre propre projet. Elle utilise l'image officielle de PHP [php image](https://hub.docker.com/_/php/) fournie par Docker, vous pouvez donc changer la version de PHP comme vous le souhaitez.
Vous pouvez également installer toutes les extensions que vous souhaitez.

Chaque fois que vous modifiez la configuration, vous devez reconstruire les conteneurs : ```docker-composer build --no-cache```
