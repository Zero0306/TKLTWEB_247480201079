// 1. String (Chuỗi)
let txt = "Xin chào, đây là kiểu chuỗi (String)";
document.getElementById("string-demo").innerHTML = "<b>String:</b> " + txt;

// 2. Number (Số - bao gồm số nguyên và số thập phân)
let num1 = 10;
let num2 = 3.14;
document.getElementById("number-demo").innerHTML = "<b>Number:</b> Số nguyên là " + num1 + " và số thập phân là " + num2;

// 3. Boolean (Luận lý - true/false)
let isTrue = true;
let isFalse = false;
document.getElementById("boolean-demo").innerHTML = "<b>Boolean:</b> Chứa các giá trị " + isTrue + " hoặc " + isFalse;

// 4. Array (Mảng - Cấu trúc dữ liệu chứa nhiều phần tử)
let cars = ["Toyota", "Honda", "Ford", "Mazda"];
document.getElementById("array-demo").innerHTML = "<b>Array (Mảng):</b> Xe thứ 1 là " + cars[0] + ", Xe thứ 2 là " + cars[1];

// 5. Object (Đối tượng - Lưu trữ theo cặp key: value)
let person = {firstName:"Nguyễn Văn", lastName:"A", age:20};
document.getElementById("object-demo").innerHTML = "<b>Object (Đối tượng):</b> Tên sinh viên là " + person.firstName + " " + person.lastName + ", " + person.age + " tuổi.";
