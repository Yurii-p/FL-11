let a1 = parseInt(prompt('Enter a1:'))
let a2 = parseInt(prompt('Enter a2:'))
let b1 = parseInt(prompt('Enter b1:'))
let b2 = parseInt(prompt('Enter b2:'))
let c1 = parseInt(prompt('Enter c1:'))
let c2 = parseInt(prompt('Enter c2:'))
let x = 2
let half1 = (a1+b1)/x
let half2 = (a2+b2)/x

let output = c1===half1 && c2===half2

console.log(output)
