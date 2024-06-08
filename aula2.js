const { texto } = require('./texto')

const regExp2 = /João|obra/gi;

//console.log(texto.match(regExp2));
console.log(texto.replace(/(João|Jesus)/gi, function(input){
  return `      `+ input.toUpperCase() + `      ` ;
}))