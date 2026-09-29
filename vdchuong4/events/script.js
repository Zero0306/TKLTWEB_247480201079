// Xử lý sự kiện click
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

// Xử lý sự kiện khi rê chuột vào
function changeStyle(element) {
    element.style.color = "red";
    element.style.backgroundColor = "yellow";
    element.innerHTML = "Bạn đang rê chuột vào đây!";
}

// Xử lý sự kiện khi bỏ chuột ra
function resetStyle(element) {
    element.style.color = "black";
    element.style.backgroundColor = "transparent";
    element.innerHTML = "Rê chuột vào đoạn văn bản này";
}
