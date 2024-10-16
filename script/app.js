console.log('fizzBuzz')

for( let i=0 ; i<100 ; i++){

    let numeri = i + 1
    let modulo3 = numeri % 3
    let modulo5 = numeri % 5
    let mess = numeri


    if  (modulo3 === 0 && modulo5 === 0){

        mess = 'FizzBuzz'

    } else if (modulo3 === 0 ) {
        mess = 'Fizz'
    } else if (modulo5===0){
        mess = 'Buzz'
    } 

    console.log(mess)


}
