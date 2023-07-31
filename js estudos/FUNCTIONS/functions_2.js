// functions expression 
// functions anonymous


// parâmetros (parameters)
const sum = function (number1, number2) {
    let total = (number1 + number2)
    return total
}


let number1 = 34
let number2 = 25


// sum (number1, number2)  arguments - argumentos de uma função

// console.log (`o número 1 é ${number1}`)
// console.log (`o número 2 é ${number2}`)
console.log (`a soma é ${sum(number1, number2)}`)
console.log (total)

/* Para passar valores de dentro da função para o resto do código, usa-se a palavra reservada RETURN seguida do valor à ser retornado,
 parando assim a execução da função e mandando o valor para onde a função foi chamada. */