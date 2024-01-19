function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}
function printPrimeNumbers(arr) {
    console.log("Các số nguyên tố trong mảng là:");

    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            console.log(arr[i]);
        }
    }
}
let integerArray = [2, 5, 8, 11, 13, 17, 20, 23, 29];
printPrimeNumbers(integerArray);
