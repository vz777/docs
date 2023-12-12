---
title: Apache configuration
sidebar_position: 4
---

Seul le répertoire ```web``` doit être accessible avec Apache, vous pouvez configurer votre hôte virtuel (vhost) comme suit :

```
<virtualhost *:80>

	ServerName http://domain.tld
	DocumentRoot "/var/www/thelia/web"

	<Directory "/var/www/thelia/web">
	    AllowOverride All

        # on apache 2.2 use :
        #Order allow,deny
        #Allow from all

        # on apache 2.4 use :
        Require all granted
    </Directory>

	# Custom log file
    Loglevel warn
    ErrorLog /var/log/apache2/yoursite.error.log
    CustomLog /var/log/apache2/yoursite.log combined

</virtualHost>

```

Remplacez `/var/www/thelia/web` par le chemin complet vers le répertoire web de votre projet.

Apache écrit dans certains répertoires, assurez-vous donc de vérifier ces répertoires et de modifier leurs permissions :

* cache
* log
* local/session
* local/media
* web