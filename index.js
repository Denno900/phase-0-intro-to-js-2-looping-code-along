// Code your solutions in this file
const myArray = ["Guadalupe", "Ollie", "Aki"]

function writeCards(array, event){
    let newArray = []

    for(let i = 0; i < array.length; i++){
        let message = `Thank you, ${myArray[i]}, for the wonderful ${event} gift!`
        newArray.push(message)
    }

    return newArray
}

function countDown(){
    let n = 10
    while(n >= 0){
        console.log(n)
        n--
    }
}
