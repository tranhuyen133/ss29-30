function a(){
    var number1 = [1,2,3];
var chan = [];
var le = [];
for(var i = 0 ; i < number1.length ; i++){
    if(number1[i]%2==0){
        chan.push(number1[i]);
    }else{
        le.push(number1[i]);
    }
}
console.log(chan,le);
}
a();