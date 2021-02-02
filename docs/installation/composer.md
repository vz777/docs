---
title: Installation with composer
---

With this installation you can manage easily your Thelia with composer, require new
dependencies, etc.

## Start a new project

```
$ curl -sS https://getcomposer.org/installer | php
$ php composer.phar create-project thelia/thelia-project your-project-name 2.4.3 (or 2.3.5)
```

Your Thelia is now downloaded and ready to be installed follow this way :

```bash
$ php Thelia thelia:install
```

## How to create an admin account ?

```bash
$ php Thelia admin:create
```

## How to insert demo data ?

For a demo with fake but realistic products

```bash
$ php setup/import.php
```

## How to reset my database

```bash
$ ./reset_install.sh
```

this task reload the database, insert fake data using faker script and create an admin with thelia2 as username and password

Now you are ready to require new dependency in your project like module who already use the [thelia-installer](https://packagist.org/packages/thelia/installer)
or even templates who use the thelia-installer too.

## Update your project

If you have installed Thelia following the instructions before, you can update your files using a script present in your project :

```
$ sh change-version.sh 2.3.1 (or 2.2.3)
```

Then update your database

```bash
php setup/update.php
```

## Known issues

### GitHub and composer

With composer you could encounter an API rate limit exception during the install.

In this case, you must create a new [Personal access token](https://github.com/settings/tokens) on your GitHub account and then add it to your composer configuration with this command :

```bash
composer config --global github-oauth.github.com <YOUR_TOKEN>
```
