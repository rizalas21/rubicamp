function prime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function indexPrime(param1) {
    let count = 0;
    let num = 2;
    while (count < param1){
        if (prime(num)) {
            count++; 
        }
        num++;
    }
    console.log(num - 1);
}

indexPrime(4);     // result 7
indexPrime(500);   // result 3571
indexPrime(37786); // result 450881
