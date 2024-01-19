function a(){
    chu = /^[a-z]/;
    var arr = 'tran thi khanh huyen'
    count =0
    for(let i =0 ; i<arr.length;i++){
        if(chu.test(arr[i])){
            count++
        }
    }
    console.log(count)

}
a()