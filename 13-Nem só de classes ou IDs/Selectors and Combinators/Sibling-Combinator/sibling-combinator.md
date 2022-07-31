## Adjacent sibling combinator

* Identificado pelo sinal ` + ` entre dois seletores
* Seleciona somente o elemento do lado direto que o irmão direto na hierarquia

```css
h1 + p
```

```
HTML

<h1>
  Título
</h1>
<p>
  Esse é um parágrafo
</p>
<p>
  Mais um parágrafo
</p>

CSS

h1 + p {
	color: red;
}

```

## General sibling combinator

* Identificado pelo sinal ` ~ ` entre dois seletores
* Seleciona todos os elementos irmão

```css
h1 ~ p
```

```
HTML

<h1>
  Título
</h1>
<p>
  Esse é um parágrafo
</p>
<p>
  Mais um parágrafo
</p>

CSS

h1 ~ p {
	color: red;
}
```

## Utilizando combinadores

```css
ul > li[class="red"]
```
```
HTML

<ul>
  <li>Alooo</li>
  <li class="red">Hey</li>
</ul>

CSS

ul > li[class="red"] {
	color: red;
}

```

## Dica:
* Seletores muito específicos tendem a causar dificuldades no reuso das regras de estilização.
* Muitas vezes, um simples uso de classes, torna o trabalho mais eficiente.
