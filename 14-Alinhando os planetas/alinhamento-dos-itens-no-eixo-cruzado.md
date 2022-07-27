# align-items

- Alinhamento dos elementos no eixo cruzado 

# Valores 

- stretch
- flex-start
- flex-end
- center


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

    flex-direction: column;

    align-items: stretch;

    border: 1px dashed red;

    height: 150px;
}
.box div{
    border: 1px solid;
}
</style>