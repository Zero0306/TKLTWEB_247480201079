// Ví dụ 1: Hàm tính tích 2 số
function calculateProduct(p1, p2) {
    return p1 * p2;
}

let result = calculateProduct(4, 3);
document.getElementById("demo").innerHTML = "4 * 3 = " + result;

// Ví dụ 2: Hàm chuyển đổi nhiệt độ Fahrenheit sang Celsius
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}

let tempC = toCelsius(77);
document.getElementById("demo2").innerHTML = "77 độ F = " + tempC + " độ C";
