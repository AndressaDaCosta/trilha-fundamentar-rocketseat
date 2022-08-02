// modulos nativos

// objeto
// console.log(require('path'))


const path = require('path');

console.log(path.basename(__filename))

console.log(path.basename("/Users/starter/docs.js"))

//  meus módulos

const myModule = require('./exports')

console.log(myModule)