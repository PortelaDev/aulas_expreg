const { CPFS } = require(`./texto`);

// ^ -> comeca com 
// [^] -> negacao
// $ -> termina com
// m -> multiline

const cpf = '215.978.462-12';
const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;


console.log(CPFS.match(cpfRegExp));