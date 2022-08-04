// Adicionando elementos
const div = document.createElement('div');
div.innerText = "Olá Devs!"

// insertBefore
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script)

// usando insert before simulando um insert after
const body = document.querySelector('body')
const header = body.querySelector('header')
body.insertBefore(div. header.nextSibling)
