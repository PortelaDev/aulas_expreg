const { texto, arquivos } = require('./texto')

// * (opicionais) 0 or n
// + (obrigatorio) 1 ou n
// ? (opicionais) 0 or 1
// \ (Caractere de escape)
// {n, m} (n = minimo d vezes q aparece, m = maximo de vezes que aparece)

const regExp = /\.((jp|JP)(e|E)*(g|G))/gi;

for (const arquivo of arquivos){
  const valido = arquivo.match(regExp);

  if(!valido) continue;   

  console.log(arquivo, valido)
} 