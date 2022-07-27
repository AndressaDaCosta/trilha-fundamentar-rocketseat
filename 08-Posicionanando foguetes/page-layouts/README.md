Nessa aula vamos ver alguns dos métodos usados para posicionar os elementos na tela.

Tables
Floats e clear
Frameworks e Grid Systems
Flexbox
Grid

Name: position
Value: static | relative | absolute | fixed

- top, right,bottom, left, z-index

Por padrão os elementos são static. Isso significa que os elementos irão seguir o fluxo normal do HTML.

O position indica onde o elemento vai ser posicionado na página. Ao usar o position podemos adicionar outras propriedades como top, right, bottom, left e z-index, que vão determinar o posicionamento final do elemento.

Quando o position é relative os elementos são deslocados do seu posicionamento normal, mas sem afetar o posicionamento de outros elementos da página.

Quando o position é absolute o elemento é deslocado saindo do fluxo normal. O elemento de position absolute é posicionado em relação ao seu parent element mais próximo. Se esse elemento "pai" não existir, ele será posicionando em relação ao bloco contendo a raiz do elemento.

Quando aplicado o position fixed é como se criasse um elemento flutuante que fica fixo na página, independente do scrolling feito.


É o empilhamento de elementos. Podemos usar o z-index para determinar a ordem da posição do elemento. Quanto maior o z-index, mais "acima" vai aparecer o elemento.

------------------------------------------------------------------------------------
==================================================================================

Nessa aula vamos ver uma introdução de como posicionar elementos usando o CSS Flexbox

# Flexbox
Nos permite posicionar os elementos dentro da caixa
Controle em uma dimensão (horizontal ou vertical)
Alinhamento, direcionamento, ordenar e tamanhos


div.parent {
	display: flex;
}

## Flex-direction
* Qual a direção do flex: horizontal ou vertical
* row | column

## Alinhamento
* justify-content
* align-items

==================================================================================

# Grid

* Posicionamento dos elementos dentro da caixa
* Posicionamento horizontal e vertical ao mesmo tempo
* Pode ser flexível ou fixo
* Cria espaços para os elementos filhos habitarem

