---
title: Contribute
---

## Comment contribuer ?

Thelia est hébergé sur [GitHub](https://github.com/thelia/thelia).
Pour contribuer, il vous suffit de forker le projet et de soumettre une [Pull Request](https://help.github.com/articles/using-pull-requests) ou [Issues](https://github.com/thelia/thelia).

## Normes de codage

Thelia suit les normes [PSR-I](http://www.php-fig.org/psr/psr-1/) et [PSR-2](http://www.php-fig.org/psr/psr-2/), vous devez donc suivre ces règles. Ne vous inquiétez pas, vous pouvez utiliser des outils tels que le [PHP Coding Standards Fixer](http://cs.sensiolabs.org/) pour cela.

## Pull Request

[Créer une Pull Request](https://help.github.com/articles/creating-a-pull-request) est la meilleure façon de soumettre un correctif, mais il y a certaines règles à suivre.
Tout d'abord, forkez [Thelia](https://github.com/thelia/thelia), créez une nouvelle branche, ne travaillez jamais sur la branche `main`, utilisez-la uniquement pour synchroniser avec le dépôt [Thelia](https://github.com/thelia/thelia).


```
$ git checkout -b new-branch main
```

Après avoir terminé vos modifications, vous devez rebaser votre branche et la pousser vers votre dépôt.

```
$ git remote add upstream https://github.com/thelia/thelia.git
$ git checkout main
$ git pull --ff-only upstream main
$ git checkout new-branch
$ git rebase main
$ git push origin new-branch
```

Ensuite, la dernière étape consiste à soumettre une Pull Request comme indiqué dans la documentation GitHub.

Si vous souhaitez en faire plus, lisez cet utile [article de blog](http://williamdurand.fr/2013/11/20/on-creating-pull-requests/).


## Modification des scripts SQL

Si vous soumettez des modifications qui ajoutent de nouvelles données ou modifient la structure de la base de données, veuillez lire la documentation suivante.

### Modifications dans le modèle Thelia

.Si vous avez modifié le fichier `schema.xml`, qui est le schéma Propel des modèles Thelia, vous devez générer le nouveau fichier thelia.sql et les classes de base de Propel.

Vous devez exécuter cette commande à la racine de votre site Thelia :

```sh
# generates classes
bin/propel build -v --input-dir=local/config/ --output-dir=core/lib/ --enable-identifier-quoting
# generates thelia.sql
bin/propel sql:build -v --input-dir=local/config/ --output-dir=setup/
rm setup/sqldb.map
```

Générer SQL pour les données par défaut et mettre à jour les scripts SQL

### Générer SQL pour les données par défaut et mettre à jour les scripts SQL

Ces fichiers SQL ne doivent pas être modifiés directement car ils sont générés par une commande Thelia. Au lieu de cela, vous devez modifier les templates Smarty. Le premier fichier est `setup/insert.sql.tpl` qui est utilisé pour générer le fichier `insert.sql`. Les autres fichiers sont situés dans `setup/update/tpl` et sont utilisés pour générer tous les fichiers SQL de mise à jour.

Ces templates diffèrent uniquement des SQL pour les tables **i18n**. Mais on pourrait imaginer d'autres utilisations avec Smarty.
Une application typique :

```smarty
...

INSERT INTO  `module_i18n` (`id`, `locale`, `title`, `description`, `chapo`, `postscriptum`) VALUES
{foreach $locales as $locale}
  (@max_id+1, '{$locale}', {intl l='Navigation block' locale=$locale}, NULL,  NULL,  NULL),
  (@max_id+2, '{$locale}', {intl l='Currency block' locale=$locale}, NULL,  NULL,  NULL),
  ...
  (@max_id+12, '{$locale}', {intl l='New Products block' locale=$locale}, NULL,  NULL,  NULL),
  (@max_id+13, '{$locale}', {intl l='Products offer block' locale=$locale}, NULL,  NULL,  NULL){if ! $locale@last},{/if}

{/foreach}
;

...
```

- `{foreach $locales as $locale}` est utilisé pour itérer sur la liste des locales : en_US, fr_FR, ...
- `{intl l='Navigation block' locale=$locale}` est utilisé pour afficher la traduction correspondant à l'attribut `l`. Cette fonction intl
diffère de celle utilisée classiquement dans Thelia. Si la traduction n'existe pas, aucun fallback ne sera utilisé par défaut.
Le texte sera échappé pour SQL et des guillemets seront placés autour de la chaîne d'entrée. Si la chaîne est vide, elle sera remplacée par une valeur `NULL`.
L'attribut `in_string="1"` est utilisé pour désactiver la mise en place de guillemets autour de la chaîne. L'attribut `use_default="1"` vous permet d'utiliser l'attribut `l` comme fallback si la traduction n'existe pas.
- n'oubliez pas d'utiliser `{if ! $locale@last},{/if}` avant `{/foreach}` sinon votre SQL ne sera pas valide.

Faites attention aux crochets `{` or `}` qui sont utilisés par Smarty. Vous pouvez utiliser `{ldelim}`, `{rdelim}` ou `{literal}...{/literal}` pour échapper le code qui n'est pas Smarty.

Pour traduire la nouvelle chaîne, vous pouvez utiliser la page de traduction dans le back office.

Si vous modifiez des templates, vous devrez régénérer tous les fichiers SQL. Vous pouvez utiliser cette commande Thelia : `php Thelia generate:sql`

Vous pouvez également limiter à une liste spécifique de locales si vous utilisez le paramètre `locales`.

Actuellement, comme toutes les langues ne sont pas entièrement traduites, nous utilisons cette ligne de commande pour générer les fichiers SQL :

```sh
php Thelia generate:sql --locales='de_DE,en_US,es_ES,fr_FR'
```


Comment contribuer aux nouvelles traductions ou aux mises à jour de Thelia

Les traductions sont contribuées par des utilisateurs de Thelia du monde entier. Le travail de traduction est coordonné sur Crowdin.
Le projet Thelia est situé sur http://translate.thelia.net/.

Les traductions pour les langues autres que **l'anglais** ne doivent être effectuées que sur http://translate.thelia.net/, et non sur un site de développement Thelia,
## Comment contribuer aux nouvelles traductions ou aux mises à jour de Thelia

Les traductions sont effectuées par des utilisateurs de Thelia du monde entier. Le travail de traduction est coordonné sur [Crowdin](http://crowdin.com).
Le projet Thelia est situé sur  <http://translate.thelia.net/>.

Les traductions pour les langues autres que **l'anglais** ne doivent être effectuées que sur http://translate.thelia.net/, et non sur un site de développement Thelia, et nous être envoyées avec une pull request sur GitHub. Translations for **non english** languages should only be done on <http://translate.thelia.net/>.
Pendant la phase de développement, seules les chaînes en anglais doivent être utilisées dans Thelia et soumises avec une pull request.
Avant chaque sortie, les mainteneurs de Thelia feront une annonce et nous aurons quelques semaines de gel des chaînes pour donner aux gens le temps de compléter les traductions.
Une fois les traductions terminées, les mainteneurs de Thelia intégreront toutes les traductions dans Thelia.

Si vous souhaitez contribuer à la traduction ou discuter de traductions spécifiques, rendez-vous sur [Thelia project page](http://translate.thelia.net/).

Si vous souhaitez aider à traduire ou ajouter une langue qui n'est pas encore traduite, voici ce que vous devez faire :

- Visitez [page Thelia](http://translate.thelia.net/).
- Inscrivez-vous sur [Crowdin](http://crowdin.com) ou connectez-vous si vous avez déjà un compte.
- Sur la page du projet Thelia, cliquez sur le bouton **Rejoindre le projet de traduction.**.
- Choisissez la langue sur laquelle vous souhaitez travailler ou, si la langue n'existe pas encore, demandez une nouvelle langue en cliquant sur le lien **Contact** de l'un des responsables du projet.
- Ensuite, sélectionnez un fichier dans la liste et commencez la traduction. Si vous rencontrez des problèmes, veuillez consulter la [la Base de connaissances Crowdin](https://support.crowdin.com/) ou démarrez [une nouvelle discussion sur la page du projet Thelia](http://translate.thelia.net/project/thelia/discussions).
