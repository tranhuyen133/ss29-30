function orderCharacters(inputString) {
    let letters = [];
    let digits = [];
    let specials = [];
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString.charAt(i);
        
        if (test(char)) {
            letters.push(char);
        } else if (test(char)) {
            digits.push(char);
        } else {
            specials.push(char);
        }
    }
    let resultArray = letters.concat(digits, specials);
    return resultArray;
}
let inputString = prompt("Nhập vào một chuỗi:");
let resultArray = orderCharacters(inputString);
console.log("Kết quả sau khi sắp xếp ký tự:", resultArray.join(''));
