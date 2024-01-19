//tính diện tích của một hình tam giác 

//Biết cạnh đáy (a),chiều cao (h)

let a = 20;
let h = 20;
let s = (a*h)/2;
console.log("Diện tich của tam giác",s);

triangleS();
console.log("Trước khi khai báo hàm");

function triangleS() {
    //parameter(tham số)
    let a = 20;
    let h = 20;
    let s = (a*h)/2;
    console.log("Diện tisch của tam giác",s);
}
//tại 1 nơi nào đó trong tương lai
triangleS();
triangleS();
triangleS();
triangleS();
//tại sao dùng được hàm trước khi khai báo???
