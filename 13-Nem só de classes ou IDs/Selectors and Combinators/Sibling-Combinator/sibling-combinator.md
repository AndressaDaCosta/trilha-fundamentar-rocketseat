## Adjacent sibling combinator

* Identificado pelo sinal ` + ` entre dois seletores
* Seleciona somente o elemento do lado direto que o irmão direto na hierarquia

```css
h1 + p
```

## General sibling combinator

* Identificado pelo sinal ` ~ ` entre dois seletores
* Seleciona todos os elementos irmão

```css
h1 ~ p
```

## Utilizando combinadores

```css
ul > li[class="red"]
```

## Dica

* Seletores muito específicos tendem a causar dificuldades no reuso das regras
de estilização dos elementos
* Muitas vezes, um simples uso de classes, torna o trabalho muito mais eficiente.