const { ips, CPFS } = require(`./texto`);

//console.log(CPFS.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g))
//console.log(CPFS.match(/(\d{3}\.){2}\d{3}\-\d{2}/g))


const regex = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g


console.log(ips.match(regex))