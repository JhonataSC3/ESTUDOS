//aqui eu tenho um comentário em linha

/*
comentario estilo multi linha

*/

//o codigo abaixo escreve alguma mensagem no Devtools

console.log('bem vindos ao starter')


// para usar um conjunto de "" (aspas) é necessário a utilização de ' (aspas simple) e logo em seguida "" (aspas duplas)
console.log('eu sou jhonata') //sem conjunto de aspas 
console.log('eu sou "jhonata"') //com conjunto de aspas
// ficando assim como esta acima


//temos tambem as crases ´ que sobrepoem o aspas 
//o que temos abaixo e acima são chamados de template string 

console.log(`eu sou jhonata " ' " ' "`)

// assim permitindo usar quantas aspas quisermos e alem disso conseguirmos codificar com espaçamento de linhas

console.log(`eu sou 


jhonata`) 

//funcionando assim da mesma forma


//tem tambem uma função que as crases nos permite colocarmos expressões "dentro" da própria string 

console.log(`jhonata ${1+1}`)

//acima temos uma interpolação que seria esse conjunto de expressão "${1+1}"

//trabalhando com numeros 

/* 
   number
          *números 
          12.5 // reais - float 
          NaN // Not a Number - não números 
          Infinity // infinito 
          33 // inteiros 
*/

// simbolos matematicos 

/* simbolos 
+ soma 
/ divisão 
- subtração 
* multiplicação 
===  igualdade
*/
//exemplos abaixo
console.log(3+3)
console.log(5/5)
console.log(1-1)
console.log(1*1)
console.log(1===2)
//o console do navegador obviamente dara os resultados correto, de acordo com o calculo matematico 

//tipos de dados

/* 
      Boolean 
        *somente dois valores
        true // verdadeiro 
        false // falso 
*/
console.log(true)
console.log(false)

/* 
*  undefined
         * indefinido

*  null
         * nulo
         * objeto que não possui nada
         * diferente de indefinido     
*/

console.log(undefined)
console.log(null)

console.log(undefined===null)
//o consolelog dara como falso, pois um não é igual ao outro


//tipo de dado estrutural

/* 
*   Object
         * Objeto
         * propriedades / atributos
         * funcionalidades / métodos
   { propriedade: "valor" }
*/
console.log({
   name:"Jhonata",
   idade: 22,
   andar: function() {
      console.log('andar');
   }
})

/* 
   * Array (vetores)
        * uma lista
        * Agrupamento de dados
      ["Jhonata, 36"]
*/
console.log(["Leite","ovos","carne"])

// Variáveis 

/* 
    
* 3 palavras reservadas para criar uma variável
   * Var
   * Let 
   * Const
* Variáveis são nome simbólicos para receber um valor
* Atalhos de códigos
* indentificação 
*/

// irei inserir um novo documento para explicar melhor sobre variável
// documento ./variavel.html


/* 
   *Scope 
      * Escopo determina a visibilidade de alguma variável no JS
*/

/* Block Statement 
// conhecido como declaração de bloco
*/ 

```js 
// vamos iniciar um bloco
{
     // aqui dentro é um bloco e posso colocar qualquer código
} //aqui fechamos o bloco```

//o bloco, também criará um novo escopo. chamamos de `block-scoped`

//criarei um documento chamado de Scope para explicar melhor sobre o "Scope"


// nomeando variáveis 

/* Para nomearmos variáveis corretamente e de um jeito inteligente, 
precisamos saber de algumas coisas, como: JavaScript é case-sensitive (sensível à letras maiúsculas e minúsculas) e aceita a cadeia de caracteres Unicode,
podendo receber acentuações. 
Em um nome de variável em JS você pode: Iniciar com caracteres especiais, 
iniciar com letras e colocar acentos, lembrando sempre que letras maiúsculas e minúsculas fazem a diferença. 
Em contraste, você não pode: Iniciar com números e colocar espaços vazios. 
Idealmente você deve colocar nomes significativos, que fazem sentido na aplicação, explicando o que a variável é, usando camel case, 
onde a primeira palavra de uma frase é toda minúscula, e as subsequentes não se separam por espaço e tem a primeira letra maiúscula, por exemplo: oNomeDessaVariável, e usar nomes em inglês.
*/

// variáveis e tipos de dados
// declaração or decoration 
var name 

// assignment or atribuição de valores
name =  "jhonata"

// que tipo de dado foi colocado  na variável 
console.log(typeof name)


let age = 18
let isHuman = true 

// ou 
// agrupamento de declarações

/* 

let age, isHuman; 
age = 18 
isHuman =  true 

*/ 

// multiplos argumentos colocados na função log ou consolelog
 console.log(name, age, isHuman)

// escrita do texto + variável 

// concatenando valores
 console.log('O' + name + 'tem' + age + 'anos')
// ficando assim no consolelog "O Jhonata tem 18 anos"


// interpolando valores com template literals or template strings
// console.log(`o ${name} tem ${age} anos`)
// ficando assim no consolelog "O Jhonata tem 18 anos"



// object

/* 

const person = {
   name:'Jhonata'
   age: 30
   weight: 88.6
   isAdmin: true
}

console.log(${person.name} 'tem' ${person.age} 'anos')

*/

// Array
/* 

const animals = {
   'lion'
   'monkey'
   'cat'
}

*/ 
// acessar valores dentro do array
console.log(animals[2])

// resultado 
// consolelog dara "monkey" como resultado
