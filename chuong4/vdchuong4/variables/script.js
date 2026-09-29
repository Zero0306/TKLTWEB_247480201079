// 1. Sử dụng var (cách cũ, có function scope)
var x = 5;
var y = 6;
var z = x + y;
document.getElementById("demo1").innerHTML = "Giá trị của z là: " + z;

// 2. Sử dụng let (cách mới, block scope, có thể gán lại giá trị)
let a = 10;
a = 20; // Hợp lệ
document.getElementById("demo2").innerHTML = "Giá trị của a đã được thay đổi thành: " + a;

// 3. Sử dụng const (cách mới, block scope, là hằng số không thể gán lại)
const PI = 3.14159;
// PI = 3.14; // Lỗi: Assignment to constant variable.
document.getElementById("demo3").innerHTML = "Giá trị của PI là: " + PI;
