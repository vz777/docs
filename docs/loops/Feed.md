---
title: Feed
---

Get data from an Atom or RSS feed.   
`{loop type="feed" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#feed-arguments}

| Argument | Description                                                                        | Default | Example                                |
|----------|:-----------------------------------------------------------------------------------|:-------:|:---------------------------------------|
| timeout  | Delay in seconds after which the loop closes the connection with the remote server |         | timeout=10                             |
| url      | An Atom or RSS feed URL.                                                           |         | url='http://thelia.net/feeds/?lang=en' |

Plus the [global arguments](./global_arguments)

## Outputs

| Variable     | Value                                   |
|:-------------|:----------------------------------------|
| $AUTHOR      | The feed item author                    |
| $DATE        | the feed item date, as a Unix timestamp |
| $DESCRIPTION | the feed item description               |
| $TITLE       | The feed item title                     |
| $URL         | the feed item URL                       |

Plus the [global outputs](./global_arguments)