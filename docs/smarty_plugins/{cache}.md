Le bloc de cache utilise le service `thelia.cache`.

Vous pouvez ajouter ce bloc sur des parties statiques (menu, pied de page, etc.) de votre site pour améliorer le temps de génération de vos pages web.

:::info

En mode développement, le cache est désactivé.
:::

## Paramètres

| Nom du paramètre | Description                                                          |
|:-----------------|:---------------------------------------------------------------------|
| `key`            | (obligatoire) une clé unique pour identifier le cache                |
| `ttl`            | (obligatoire) un temps de vie en secondes                            |
| `lang`           | Cache spécifique par langue, (par défaut : id de la langue actuelle) |
| `currency`       | Cache spécifique par devise, (par défaut : id de la devise actuelle) |

Vous pouvez également ajouter autant d'arguments que nécessaire. Ces arguments seront utilisés pour générer une clé unique.


## Exemples

### Simple
```
{cache key="my-cache" ttl=600}
    ... HTML or Smarty code ...
{/cache}
```

### Par client
```
{cache key="my-cache" ttl=600 customer_id=$CUSTOMER_ID}
    ... HTML or Smarty code specific by customer ...
{/cache}
```

### Par admin
```
{cache key="my-cache" ttl=600 admin_id_=$ADMIN_ID}
    ... HTML or Smarty code specific by admin ...
{/cache}
```

### Désactiver le cache spécifique à la devise
```
{cache key="my-cache" ttl=600 currency"no"}
    ... HTML or Smarty code same for every currency ...
{/cache}
```

### Cache conditionnel
Vous pouvez désactiver le cache d'un bloc sans le supprimer. Pour cela, vous devez spécifier un ttl à 0.
```
{$ttl = 600}
{if $myCondition}
    {$ttl = 0}
{/if}

{cache key="my-cache" ttl=$ttl}
    ... HTML or Smarty code ...
{/cache}

```