
    var array = ["red","blue","pink","yellow"];
    
    function searchArray (input,search){
        var resultArray = input.filter(function(element){
            return element.includes(search);
        });
        return resultArray;
    }
    var number = parseInt(prompt("Nhập vào một chuỗi "));
    var result = searchArray(array,number);
    console.log(result);


