# Combinators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim de
aplicar uma estilização

## Descendant combinator

* Identificado por um espaço entre os seletores.
* Busca um elemento dentro de outro

```css
body article h2
```

HTML

<body>
	<article>
		<h2>Um Título</h2>
	</article>
</body>

CSS

body article h2 {
	color: red;
}
