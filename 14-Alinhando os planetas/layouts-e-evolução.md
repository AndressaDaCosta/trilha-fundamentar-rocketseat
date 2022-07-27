# Layouts e evolução 

Layout tem a ver com a maneira que os elementos estão distribudos na tela

## Normal flow

ou Flow Layout é a maneira que os elementos `block` e `inline` ficam na página

```html
<p> Texto block com  <strong>inlene</strong> dentro </p>
```

## Tables 

É a maneira de tabelas onde a tag `table` recebe um display `table` fazendo com que os elementos internos como `td` e `tr` possam ser usados para montar uma tabela

```html
<table>
    <tr>
        <td>Hora</td>
        <td>20:00</dt>
    </tr>
    <tr>
        <td>Horas</td>
        <td>20:37</dt>
    </dt>
```

## tabless

Uso das propriedades `float`, `clear` para que os elementos possam mudar possição na tela.

```html
<div style="float: left">
    esqueda
</div>

<div style="float: right">
    direita
</div>

<div style="clear:both">
    normal
</div>
```

## Flexbox

A caixa se torna flex, fazendo com que os elementos internos possam receber melhor:

- Alinhamento 
- Ordenação
- Tamanho flexíveis