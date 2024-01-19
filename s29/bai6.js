
function capitalizeFirstLetter(inputString) {
         
    var words = inputString.split(" ");
    var result = words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return result.join(" ");
}
var originalString = "hello javascript";

var resultString = capitalizeFirstLetter(originalString);
console.log(resultString);


