// <.+>.+<\/.+>
const {html} = require(`./texto`);


console.log(html);
console.log(html.match(/<.+>.+<\/.+>/g)); // greedy
console.log(html.match(/<.+?>.+?<\/.+?>/g)); // non-greedy