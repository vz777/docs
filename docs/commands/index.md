---
title: Commands
sidebar_position: 11
---

Les commandes utilisent le très pratique, composant console de Symfony. Dans votre module, vous pouvez définir votre propre commande qui peut être utilisée avec la ligne de commande (CLI).

Pour créer une commande dans Thelia, créez simplement une nouvelle classe qui étend `Thelia\Command\ContainerAwareCommand` et créez ces fonctions :
- `configure()` pour donner un nom et éventuellement une description et des paramètres
- `execute()` où se trouve le code à exécuter

```php
<?php

namespace MyModule\Commands;

use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

use Thelia\Command\ContainerAwareCommand;

class HelloWorld extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName("hello:world")
            ->setDescription("output hello world");
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->writeln("Hello world !");
    }
}
```

Vous pouvez maintenant tester les résultats à l'aide des outils de ligne de commande Thelia. Allez dans le répertoire racine de votre Thelia et utilisez cette commande :
```shell
php Thelia hello:world
```

Thelia utilise toutes les fonctionnalités du composant "command" de Symfony. Vous pouvez donc vous référer à ce [composant](https://symfony.com/doc/current/console.html#creating-a-command) pour créer vos commandes Thelia.
