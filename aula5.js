const { alfabeto } = require(`./texto`);
// [abc] -> conjunto [^] -> Negacao
// [0-9]


console.log(alfabeto)
console.log(alfabeto.match(/[0-9]+/g)); 
console.log(alfabeto.match(/[a-k]+/g)); 
console.log(alfabeto.match(/\w+/g)); 
console.log(alfabeto.match(/\W+/g)); 
console.log(alfabeto.match(/\d+/g)); 
console.log(alfabeto.match(/\D+/g)); 
console.log(alfabeto.match(/\S+/g)); 