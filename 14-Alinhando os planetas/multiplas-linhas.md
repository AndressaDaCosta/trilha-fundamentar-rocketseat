# flex-wrap

- Podemos usar multi linhas 
- Casa nova linha, um novo flex container

```html

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
    flex-wrap: wrap;

    border: 1px dashed red
}

.box div{
    border: 1 px solid;

    width: 80px;
}
</style>