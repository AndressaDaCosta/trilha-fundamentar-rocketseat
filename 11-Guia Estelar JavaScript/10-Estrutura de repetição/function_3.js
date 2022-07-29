// for...of
 let name = "Mayk";
 let names = ["João","Paulo","Pedro"];

 for(let char of name){
    console.log(char); 
//   resultado console: M
//                      a
//                      y                        
//                      k
  
//   novo escopo vai pegar o name de dentro que ele criou e nao de fora, vai atribuir pra name = joao um nome de cada vez
 for(let name of names){
    console.log(name);
  //   resultado console: 
//                      João
//                      Paulo                     
//                      Pedro
 }
  
