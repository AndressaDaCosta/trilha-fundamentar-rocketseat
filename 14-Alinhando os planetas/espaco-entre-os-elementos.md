# gap

- Espaço entre os elementos

## valores 

unidades de medidas
fixa: px, pt
flevíveis: %, em, rem

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

    border: 1px dashed red;

    gap: 2m;
}

.box div{
    border: 1px solid;
}
<style>