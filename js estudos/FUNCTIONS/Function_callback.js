// function callback

function SayMyName(name) {
    console.log(name)
}

SayMyName(
    () => {
        console.log('estou em uma callback')
    }
)

// Uma callback function é uma função que está sendo passada para outra função como parâmetro.