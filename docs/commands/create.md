---
title: Create your own
---

## How to declare commands ?

In your config file :

```xml
    <commands>
        <command class="MyModule\Commands\HelloWorld"/>
    </commands>
```

Create now a HelloWorld.php file in directory MyModule/Commands, and create a HelloWorld, which has to extend *Thelia\Command\ContainerAwareCommand* and implement at least the *configure* and
*execute* methods.

For example :

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

You can now test the results using Thelia CLI tools. Go to your Thelia root directory and use this command :

```bash
$ php Thelia hello:world
```

Thelia uses all the features of the Symfony "command" component so you can refer to <a href="http://symfony.com/doc/2.2/components/console/index.html" target="_blank">this component documentation</a> to create your Thelia commands.