// Encontra todas as palavras
const palavrasRegEx = /([\wÀ-ú]+)/g

// Nao numeros
const naoNumerosRegEx = /\D/g

// Valida IP
const ipRegEx = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g

//Valida CpF
const cpfRegEx = /^(?:\d{3}\.){2}\d{3}-\d{2}$/g

// Telefones
const telRegEx = /^(\(\d{2}\)s*)?(9\s*)?(\d{4})-(\d{4})$/g

// Validar Senhas Fortes
const pwdRegEx = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/g

// Validar email
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g