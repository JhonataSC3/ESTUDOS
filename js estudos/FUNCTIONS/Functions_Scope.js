// functins scope

let subject = 'create video'

function CreateThink (subject) {
    subject = 'study'
    return subject
}   

console.log (subject)
console.log (CreateThink(subject))
console.log (subject)

/* Parâmetros, mesmo se tiverem o mesmo nome que alguma outra variável do seu código,
 são apenas modificados e persistem no escopo da função. */