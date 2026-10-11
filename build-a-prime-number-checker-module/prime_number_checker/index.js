function isPrime(num) {
    let i = 2;

    if (num < 2) return false;
    if (num === 2 || num === 3) return true;

    while (i <= Math.sqrt(num)) {
        if (num % i === 0) return false;
        i++;
    }

    return true;
}

console.log(isPrime(3));

module.exports = {
    isPrime
}