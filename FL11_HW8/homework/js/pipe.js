function pipe() {
    let n = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        n = arguments[i](n)
    }
    return n;
}

function addOne(x) {
    return x + 1;
}

pipe(1, addOne);
pipe(1, addOne, addOne, addOne);