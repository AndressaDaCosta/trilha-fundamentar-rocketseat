
```

<!-- event module -->
const events = require('events')

console.log(events)

<!-- eventEmitter -->
const { EventEmitter } = require('events');
const ev = new EventEmitter()

<!-- Ouvindo e executando ações para eventos
-->


const { EventEmitter } = require('events');
const ev = new EventEmitter()

ev.on('saySomething', () => {
  console.log(Eu ouvi você)
})

ev.emit('saySomething')
ev.emit('saySomething')

<!--
-->


ev.on('saySomething', (message) => {
  console.log('Eu ouvi você: ', message)
})

ev.emit('saySomething', "Mayk")
ev.emit('saySomething', "Joao")


<!-- ouvindo eventos uma unica vez -->

ev.once('saySomething', (message) => {
  console.log('Eu ouvi você: ', message)
})

ev.emit('saySomething', "Mayk")
ev.emit('saySomething', "Joao")<!-- vai ignorar esse -->



```