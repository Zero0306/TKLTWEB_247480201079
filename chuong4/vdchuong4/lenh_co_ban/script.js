// --- Cấu trúc IF / ELSE ---
function checkIfElse() {
    let hour = new Date().getHours();
    let message = "";
    
    if (hour < 12) {
        message = "Bây giờ là " + hour + " giờ: Chào buổi sáng! (if)";
    } else if (hour < 18) {
        message = "Bây giờ là " + hour + " giờ: Chào buổi chiều! (else if)";
    } else {
        message = "Bây giờ là " + hour + " giờ: Chào buổi tối! (else)";
    }
    document.getElementById("if-demo").innerHTML = message;
}

// --- Cấu trúc SWITCH ... CASE ---
function checkSwitch() {
    let day = new Date().getDay();
    let dayName = "";
    
    switch (day) {
        case 0: dayName = "Chủ nhật"; break;
        case 1: dayName = "Thứ 2"; break;
        case 2: dayName = "Thứ 3"; break;
        case 3: dayName = "Thứ 4"; break;
        case 4: dayName = "Thứ 5"; break;
        case 5: dayName = "Thứ 6"; break;
        case 6: dayName = "Thứ 7"; break;
        default: dayName = "Không xác định"; // default
    }
    document.getElementById("switch-demo").innerHTML = "Hôm nay là: " + dayName;
}

// --- VÒNG LẶP FOR ---
function runFor() {
    let text = "<b>Vòng lặp For (chạy từ 1 đến 5):</b><br>";
    for (let i = 1; i <= 5; i++) {
        text += "Lần lặp thứ " + i + "<br>";
    }
    document.getElementById("loop-demo").innerHTML = text;
}

// --- VÒNG LẶP WHILE ---
function runWhile() {
    let text = "<b>Vòng lặp While (chạy từ 1 đến 5):</b><br>";
    let i = 1;
    while (i <= 5) {
        text += "Lần lặp thứ " + i + "<br>";
        i++;
    }
    document.getElementById("loop-demo").innerHTML = text;
}

// --- VÒNG LẶP DO WHILE ---
function runDoWhile() {
    let text = "<b>Vòng lặp Do While (chạy từ 1 đến 5):</b><br>";
    let i = 1;
    do {
        text += "Lần lặp thứ " + i + "<br>";
        i++;
    } while (i <= 5);
    document.getElementById("loop-demo").innerHTML = text;
}
