// 1. Thay đổi nội dung HTML (innerHTML)
function changeContent() {
    document.getElementById("demo").innerHTML = "Nội dung đã được thay đổi bởi JavaScript! 🎉";
}

// 2. Thay đổi thuộc tính (Attribute)
function turnOnLight() {
    document.getElementById('myImage').src = 'https://www.w3schools.com/js/pic_bulbon.gif';
}

function turnOffLight() {
    document.getElementById('myImage').src = 'https://www.w3schools.com/js/pic_bulboff.gif';
}

// 3. Thay đổi CSS (Style)
function changeStyle() {
    let element = document.getElementById("styleText");
    element.style.fontSize = "25px";
    element.style.color = "blue";
    element.style.fontWeight = "bold";
    element.style.backgroundColor = "#e0e0e0";
    element.style.padding = "10px";
}
