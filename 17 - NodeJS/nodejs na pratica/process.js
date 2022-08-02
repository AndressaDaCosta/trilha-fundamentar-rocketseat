//lista de argumentos

console.log(process.argv)

console.log("seu nome é", process.argv[2] + " " + process.argv[3])

/*
❯ node process Mayk Brito
[
  '/usr/local/bin/node',
  '/Users/andressadacosta/Desktop/dentro pasta fundamentar/17- NodeJS/NODEJS/process',
  'Mayk',
  'Brito'
]
seu nome é Mayk Brito.*/

const firstName = process.argv[2]
const lastName = process.argv[3]

console.log("Seu nome é ${firstName} ${lastName}")


// 

❯ node process --name "Mayk Brito" --greeting "Tudo bem com voce?"    

[
  '/usr/local/bin/node',
  '/Users/andressadacosta/Desktop/dentro pasta fundamentar/17- NodeJS/NODEJS/process',
  '--name',
  'Mayk Brito',
  '--greeting',
  'Tudo bem com voce?'