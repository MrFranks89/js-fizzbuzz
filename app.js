//ex 1

// const num1 = parseInt(prompt('scegli un numero')) // number
// const num2 = parseInt(prompt('scegli un altro numero')) //number

// console.log(num1, num2)

// if(num1 > num2){
//     console.log(num1)
// }
// else if(num2 > num1){
//     console.log(num2)}
    
// else{
//     console.log('i numeri sono uguali')
// }

// ex 2

// let somma = 0

// for (let i = 0; i < 10; i++){
//     let number = parseFloat(prompt('scegli un numero'))
//     console.log(number)
//     somma = somma + number 
// }

// console.log('la somma dei numeri inseriti è: ' + somma)


for (let i = 0; i < 100; i++){
    let num = i + 1
    console.log(num)
    if(num % 3 === 0){
        console.log('Fizz')
    }
    else if(num % 5 === 0){
        console.log('Buzz')
    }
    else if(num % 3 === 0, num % 5 === 0){
        console.log('FizzBuzz')
    }

}

