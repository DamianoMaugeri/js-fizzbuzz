console.log('fizzBuzz')

for( let i=0 ; i<100 ; i++){

    let numeri = i + 1
    let modulo3 = numeri % 3
    let modulo5 = numeri % 5


    if  (modulo3 === 0 && modulo5 === 0){

        console.log(`FizzBuzz`)

    } else if (modulo3 === 0 ) {
        console.log(`Fizz`)
    } else if (modulo5===0){
        console.log(`Buzz`)
    } else{
        console.log(numeri)
    }


}
