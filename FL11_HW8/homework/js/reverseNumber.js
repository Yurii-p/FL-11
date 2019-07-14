function reverseNumber(n) {
    n = n + '';
    const reverse = parseInt(n.split('').reverse().join(''));
    if (n < 0) {
        return -reverse;
    } else {
        return reverse;
    }
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);
