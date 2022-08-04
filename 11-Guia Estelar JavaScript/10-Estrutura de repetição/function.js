// for...in

let person = {
    name: "John",
    age: 30,
    weight: 88.6
}

for(let property in person){
    console.log(property);
//  resultado console: name , age , weught
}

for(let property in person){
    console.log(person["name"]);
       console.log(person.name);

}

for(let property in person){
    console.log(person[property]);
//     resultado:    name
//                   John
    //               age    
    //               30    
    //               weight    
    //               88.6    
}
