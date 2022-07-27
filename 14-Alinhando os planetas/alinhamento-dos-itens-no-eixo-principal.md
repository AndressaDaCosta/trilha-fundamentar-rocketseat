
# justify-content

- Alinhamento dos elementos dentro do container
- Distribuição dos elementos

## Valores

- flex-start
- flex-end
- center
- space-around
- space-between
- space-evenly

```HTML

<div class="box">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
</div>

```

```CSS

<style>
.box{
    display: flex;

    justify-content: space-evenly;

    border: 1px dashed red;
}

.box{
    border: 1px solid;
}
</style>

```