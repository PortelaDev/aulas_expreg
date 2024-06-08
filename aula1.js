// g - global (encontra todas as ocorrencias)
// i - insensitive
// () - groups

const { texto } = require(`./texto`)

const regexp1 = /(doze|discípulos) (demonstram uma personalidade)/i;
const found = regexp1.exec(texto);

if(found){

  console.log(found[1])

}else{
  console.log(`isso esta nulo`)
}