let a = prompt('Enter side A:')
let b = prompt('Enter side B:')
let c = prompt('Enter side C:')
let result
if (a > 0 && b > 0 && c > 0) {
    if (a === b && a === c) {
        console.log('‘Eequivalent triangle’')
    } else if (a === b || a === c || b === c) {
        console.log('‘Isosceles triangle’')
    } else {
        console.log('‘Normal triangle’')
    }
} else {
    console.log('‘Triangle doesn’t exist’')
}