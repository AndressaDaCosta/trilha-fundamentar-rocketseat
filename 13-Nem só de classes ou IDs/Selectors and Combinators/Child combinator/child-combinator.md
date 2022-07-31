## Child combinators

* Identificado pelo sinal `>` entre dois seletores
* Seleciona somente o elemento que é filho direto do pai
* Elementos depois do filho direto serão desconsiderados

```css
body > ul > li
```

HTML

<body>
  <ul>
    <li>Item 1</li>
    <ul>
      <li>Item 2</li>
    </ul>
  </ul>
</body>


CSS

body > ul > li {
	color: blue;
}
