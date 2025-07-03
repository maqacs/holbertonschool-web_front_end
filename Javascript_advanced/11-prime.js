function countPrimeNumbers() {
    let count = 0;
    let prime;
    for (let i = 2; i <= 100; i++) {
        prime = true;
        for (let j = 2; j <= Math.sqrt(i) ; j++) {
            if (i % j == 0){
                prime = false;
                break;
            }
        }
        if (prime) {
            count++;
        }
    }
    return count;
}

function count() {
    for (let i = 0; i < 100 ; i++) {
        countPrimeNumbers();
    }
}

let t0 = performance.now();
setTimeout(count, 0);
let t1 = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${t1-t0} millisecons`);