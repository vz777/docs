---
title: Title
---

Title loop lists titles.   
`{loop type="title" name="the-loop-name" [argument="value"], [...]}`

## Arguments {#title-arguments}

| Argument | Description                                                                | Default | Example             |
|----------|:---------------------------------------------------------------------------|:-------:|:--------------------|
| id       | A single or a list of title ids.                                           |         | id="2", id="1,4,7"  |

Plus the [global arguments](./global_arguments) 

## Outputs

| Variable  | Value                                   |
|:----------|:----------------------------------------|
| $DEFAULT  | return if the title is by default title |
| $ID       | the title id                            |
| $LONG     | the full title                          |
| $POSITION | the title position                      |
| $SHORT    | the short title                         |

Plus the [global outputs](./global_outputs)