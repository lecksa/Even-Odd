// let users = ['everybody calls', 'Hello my name is', 'rusya', ['Ruslan but', 'me artyom'], 'comeon i am not artyom', 'I am']
// console.log(
//     users[1] + " " + users[3][0] + " " + users[0] + " " + users[3][1] + " " + users[4] + " " + users[5] + " " + users[2] + "."
// )

//let arr = ['alex', 'jordan', 'michael', 'amira', 'dilruh', 'allayor', 'tangir']
// let name = prompt('Напиши имя')
// let idx = arr.indexOf(name)
// if(idx === -1){
//     alert('Такого в списке нету')
// }else{
//     arr.splice(idx, 1)
// }
//console.log(
    // arr.find((name) => name[0] === 'd'),
    // arr.filter((name) => name[0] === 'd'),
    // arr.map((name) => name[0] === 'd'),
    // arr.forEach((name) => name[0] === 'd')
//)







let arr = ['alex', 'jordan', 'michael', 'amira', 'dilruh', 'allayor', 'tangir', 'daler']

let evenname = arr.filter(letter => (letter.match(/[a-z]/gi)).length === 4 || (letter.match(/[a-z]/gi)).length === 6 || (letter.match(/[a-z]/gi)).length === 8)

console.log(evenname)



let num = [1,2,3,4,5,6,7,8,9]

let evens = num.filter(evens => (evens % 2 === 0))

let odds = num.filter(evens => (evens % 2 !== 0))

console.log(evens, odds)
