const { html } = require('./texto');

// $1 $2 $3 <- Retrovisores \1

// console.log(html)
// console.log(html.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g))
console.log(html.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g, '$1 HAHAHA $3 HAhAhAH $4'))