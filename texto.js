const texto = `João Evangelista ou Apóstolo João (em grego: Ἰωάννης; romaniz.: Iōánnēs; em hebraico: יוחנן, romaniz.: Yoḥanan; em siro-aramaico: ܝܘܚܢܢ; romaniz.: Yuḥanan) foi um dos doze apóstolos de Jesus e além do Evangelho segundo João, também escreveu as três epístolas de João (1, 2, e 3) e o livro do Apocalipse. Há que destacar aqui a existência de uma controvérsia sobre o verdadeiro autor do Apocalipse, mas uma tradição representada por São Justino e amplamente difundida no século II Ireneu de Lyon, Clemente de Alexandria, Tertuliano, o Cânone Muratori, identifica o autor como sendo o apóstolo João, o autor do quarto evangelho. Mas até ao século V as igrejas da Síria, Capadócia e mesmo da Palestina não pareciam ter incluído o apocalipse no cânon das escrituras, prova de que não o consideraram como obra do apóstolo. Apresenta inegável parentesco com os escritos joaninos, mas também se distingue claramente deles por sua linguagem, seu estilo e por seus pontos de vista teológicos (referentes, sobretudo à parúsia de Cristo), comentário de introdução ao apocalipse na Bíblia de Jerusalém.

João seria o mais novo dos doze discípulos. Tinha provavelmente cerca de vinte e quatro anos de idade à altura do São João chamado por Jesus. Consta que seria solteiro e vivia com os seus pais em Betsaida. Era pescador de profissão, consertava as redes de pesca. Trabalhava junto com seu irmão Santiago Maior, e em provável sociedade com André e Pedro.

As heranças deixadas nos escritos de Joooooooãooooo demonstram uma personalidade extraordinária. De acordo com as descrições ele seria imaginativo nas suas comparações, pensativo e introspectivo nas suas dissertações e pouco falador como discípulo. É notório o seu amadurecimento na fé através da evolução da sua escrita.`


const arquivos = [
  'atencao.jpg',
  'Foto.jpeg',
  'meu Gatinho.jpg',
  'meu Gatinho.JPG',
  'meu gatinho.JPeeeeeeeeeeEeeEEEEEEEEEeeeeG',
  'Marigo.png',
  'lista de compras.txt'
];

const CPFS = `Os Cpfs sao:
254.224.877-45
215.978.462-12
043.258.369-96
332.331.873-91
`

const ips = `Os ips sao:
0.0.0.0
255.255.255.255
192.32.0.23
10.5.12.10
321.233.999.888
`

const lookahead = `
ONLINE 192.0.0.1 ABDCEF inactive
OFFLINE 192.0.0.2 ABDCEF active
ONLINE 192.0.0.3 ABDCEF active
ONLINE 192.0.0.4 ABDCEF active
OFFLINE 192.0.0.5 ABDCEF active
OFFLINE 192.0.0.6 ABDCEF inactive
`;

const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 '


const html = '<p\n>Ola mundo</p> <p className="oi mun">Ola de nova</p> <div> sou a div</div>';

module.exports = {
  texto, arquivos, html, alfabeto, ips, CPFS, lookahead

}