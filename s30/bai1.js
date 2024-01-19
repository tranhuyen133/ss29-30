function isPalindrome(arr) {
    return arr.join('') === arr.reverse().join('');
}
function printResult(array, result) {
    console.log("Mảng:", array);
    console.log(result ? "Mảng là đối xứng." : "Mảng không là đối xứng.");
}

function main() {
 
    var randomArray = [1, 2, 3, 2, 1];

    var result = isPalindrome(randomArray);
    printResult(randomArray, result);
}
main();
