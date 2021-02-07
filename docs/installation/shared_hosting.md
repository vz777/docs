---
title: Installation on shared hosting
---

### Download the full distribution on Thelia website

Go to this page and download the zip file : [http://thelia.net/#download](http://thelia.net/#download)

Then unzip the file.

Installing thelia with the web install wizard allow to create an administrator, add some informations about your shop, etc

The install wizard in accessible with your favorite browser :

```bash
http://yourdomain.tld/[/subdomain_if_needed]/install
```

For example, I have thelia downloaded at http://thelia.net and my vhost is correctly configured, I have to reach this address :

```bash
http://thelia.net/install
```

### After installation

Remove the ```web/install``` directory

<div class="page-header">
    <h1>Update to latest version</h1>
</div>

## How to update Thelia ?

<div class="alert alert-warning">
<p>Before proceeding to the update, it's strongly recommended to backup your website (files and database).</p>
<em>You can backup your database with tools such as phpmyadmin or mysqldump.</em>
</div>

### Short story

1. Download the new version on [Thelia web site](http://thelia.net/#download).
2. Be sure to close your shop, so that only you can access the shop (using a .htaccess, list of allowed IP, ...)
2. Unzip the downloaded archive in your Thelia directory, overwriting all files with those from the archive
3. Go to `http://yourshop.tld/install` to start the update wizard. **This may take a long time !**
4. Delete or rename the web/install directory.
5. Done !

### Detailed instructions and alternative update methods

Once the backup is done, The update process only takes a few minutes, in 2 main step:

- Update your files
- Update your database

#### Step 1 : update your files

You have three options to update Thelia files :

- download the new version archive at [http://thelia.net/#download](http://thelia.net/#download) and replace all your files with those from the archive.
- copy all files from the Thelia new distribution (including local/modules/* files)
- using git, you can ```git checkout``` to the current version to switch to your target version.


Note: if you've moved your admin/install directories, your index_dev.php or any other
file/directory, don't forget to update them too.

In both case, clear all caches running ```php Thelia cache:clear```

#### Step 2 : update your database

If you're updating to a version > 2.1.x, simply run ```php setup/update.php```.
This script automatically backup your database and restore it if a problem is detected.
However, if your database is really large, it's recommended to backup it manually and not to use the script backup.

It's strongly advised to clear the cache in all environments :
- ```php Thelia cache:clear```
- ```php Thelia cache:clear --env=prod```

##### Alternative way to update your database: use the web wizard (since Thelia 2.1)

An update wizard is available in the ```web/install``` directory. It's the same directory used by the install wizard.

> **During the update process, you should protect the web folder from public access (htaccess,  list of allowed IP, ...).**

The update wizard is available through your favourite browser :

```bash
http://yourdomain.tld/[/subdomain_if_needed]/install
```

Note:

- the wizard is available only if your Thelia is not already updated to the latest version.
- if your database is large (many products, many orders, ...), it's recommended to backup your database manually instead of using the database backup wizard.


##### For updating a Thelia 2.0.x ONLY, use Thelia cli tools

- run ```php Thelia thelia:update```
- again clear all caches in all environment :
    - ```php Thelia cache:clear```
    - ```php Thelia cache:clear --env=prod```

This command **may fail** on some updates and you will have to use an alternative update method.
