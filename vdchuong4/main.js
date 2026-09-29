/* =========================================
   FILE MAIN.JS DÙNG CHUNG CHO CẢ CHƯƠNG 4
========================================= */

// Sự kiện chạy sau khi HTML load xong (Dùng chung nên cần check điều kiện để tránh lỗi)
window.addEventListener('DOMContentLoaded', (event) => {
    
    // --- CHO BÀI KIỂU DỮ LIỆU ---
    if (document.getElementById("string-demo")) {
        document.getElementById("string-demo").innerHTML = "<b>String:</b> Xin chào, đây là kiểu chuỗi";
        document.getElementById("number-demo").innerHTML = "<b>Number:</b> Số nguyên là 10 và số thập phân là 3.14";
        document.getElementById("boolean-demo").innerHTML = "<b>Boolean:</b> Chứa các giá trị true hoặc false";
        let cars = ["Toyota", "Honda", "Ford"];
        document.getElementById("array-demo").innerHTML = "<b>Array (Mảng):</b> Xe thứ 1 là " + cars[0];
        let person = {firstName:"Nguyễn Văn", lastName:"A", age:20};
        document.getElementById("object-demo").innerHTML = "<b>Object:</b> " + person.firstName + " " + person.lastName;
    }
    
    // --- CHO BÀI BIẾN (VARIABLES) ---
    if (document.getElementById("demo1") && document.querySelector("h1").innerText.includes("Biến")) {
        var x = 5; var y = 6; var z = x + y;
        document.getElementById("demo1").innerHTML = "Giá trị của z (var) là: " + z;

        let a = 10; a = 20; 
        document.getElementById("demo2").innerHTML = "Giá trị của a (let) đã đổi thành: " + a;

        const PI = 3.14159;
        document.getElementById("demo3").innerHTML = "Giá trị của PI (const) là: " + PI;
    }

    // --- CHO BÀI HÀM (FUNCTIONS) ---
    if (document.getElementById("demo") && document.querySelector("h1").innerText.includes("Hàm")) {
        document.getElementById("demo").innerHTML = "4 * 3 = " + calculateProduct(4, 3);
        document.getElementById("demo2").innerHTML = "77 độ F = " + toCelsius(77) + " độ C";
    }
});

/* =========================================
   CÁC HÀM XỬ LÝ (Dùng chung cho các bài)
========================================= */

// 1. Bài Cú pháp
function scriptInBody() {
    alert("Hàm JS này được gọi từ file main.js dùng chung cho toàn bộ Chương 4!");
}

// 2. Bài Hàm
function calculateProduct(p1, p2) { return p1 * p2; }
function toCelsius(fahrenheit) { return (5/9) * (fahrenheit - 32); }

// 3. Bài Lệnh cơ bản
function checkIfElse() {
    let hour = new Date().getHours();
    let msg = (hour < 12) ? "Chào buổi sáng!" : (hour < 18) ? "Chào buổi chiều!" : "Chào buổi tối!";
    document.getElementById("if-demo").innerHTML = msg;
}
function checkSwitch() {
    let days = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    document.getElementById("switch-demo").innerHTML = "Hôm nay là: " + days[new Date().getDay()];
}
function runFor() {
    let text = "<b>Vòng lặp For:</b><br>";
    for (let i = 1; i <= 5; i++) text += "Lần lặp " + i + "<br>";
    document.getElementById("loop-demo").innerHTML = text;
}
function runWhile() {
    let text = "<b>Vòng lặp While:</b><br>";
    let i = 1; while(i<=5) { text += "Lần lặp " + i + "<br>"; i++; }
    document.getElementById("loop-demo").innerHTML = text;
}
function runDoWhile() {
    let text = "<b>Vòng lặp Do While:</b><br>";
    let i = 1; do { text += "Lần lặp " + i + "<br>"; i++; } while(i<=5);
    document.getElementById("loop-demo").innerHTML = text;
}

// 4. Bài Sự kiện (Events)
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}
function changeHoverStyle(element) {
    element.style.color = "red"; element.style.backgroundColor = "yellow";
}
function resetStyle(element) {
    element.style.color = "black"; element.style.backgroundColor = "transparent";
}

// 5. Bài Thao tác DOM
function changeContent() {
    document.getElementById("demo").innerHTML = "Nội dung đã được thay đổi bởi JavaScript! 🎉";
}
function turnOnLight() {
    document.getElementById('myImage').src = 'https://www.w3schools.com/js/pic_bulbon.gif';
}
function turnOffLight() {
    document.getElementById('myImage').src = 'https://www.w3schools.com/js/pic_bulboff.gif';
}
function changeCSSStyle() {
    let el = document.getElementById("styleText");
    el.style.fontSize = "25px"; el.style.color = "blue";
}

// 6. Bài Tìm kiếm DOM
function thucHanhTimKiemDOM() {
    let result = "";
    let elemById = document.getElementById("demoId");
    result += "<b>By ID:</b> " + (elemById ? elemById.innerHTML : "") + "<br>";
    result += "<b>By Tag Name:</b> Tìm thấy " + document.getElementsByTagName("p").length + " thẻ &lt;p&gt;.<br>";
    result += "<b>By Class Name:</b> Tìm thấy " + document.getElementsByClassName("demoClass").length + " phần tử.<br>";
    result += "<b>By CSS Selector:</b> Tìm thấy " + document.querySelectorAll("p.cssSelector").length + " phần tử.<br>";

    let myForm = document.forms["frm1"];
    if(myForm) {
        let formValues = "";
        for (let i = 0; i < myForm.length; i++) formValues += myForm.elements[i].value + " - ";
        result += "<b>By HTML Collection:</b> " + formValues + "<br>";
    }
    document.getElementById("ketQuaTimKiem").innerHTML = result;
}
