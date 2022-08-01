// Eventos
// argumento Event
const input = document.querySelector('input')

input.onkeydown = function(event) {
    console.log(event.currentTarget.value)
}
input.onkeypress = function(event) {
    console.log(event.key)
}

input.onclick = function(event) {
    console.log(event)
}
