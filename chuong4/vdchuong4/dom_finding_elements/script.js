function thucHanhTimKiemDOM() {
    let result = "";

    // 1. Finding HTML elements by id
    let elemById = document.getElementById("demoId");
    result += "<b>1. By ID ('demoId'):</b> Nội dung tìm được là: <i>" + elemById.innerHTML + "</i><br><br>";

    // 2. Finding HTML elements by tag name
    let elemsByTag = document.getElementsByTagName("p");
    result += "<b>2. By Tag Name ('p'):</b> Tìm thấy " + elemsByTag.length + " thẻ &lt;p&gt; trên toàn bộ trang.<br><br>";

    // 3. Finding HTML elements by class name
    let elemsByClass = document.getElementsByClassName("demoClass");
    result += "<b>3. By Class Name ('demoClass'):</b> Tìm thấy " + elemsByClass.length + " phần tử có class này.<br><br>";

    // 4. Finding HTML elements by CSS selectors
    // Tìm tất cả thẻ p có class là cssSelector
    let elemsBySelector = document.querySelectorAll("p.cssSelector");
    result += "<b>4. By CSS Selector ('p.cssSelector'):</b> Tìm thấy " + elemsBySelector.length + " phần tử.<br><br>";

    // 5. Finding HTML elements by HTML object collections
    // Lấy đối tượng form (document.forms)
    let myForm = document.forms["frm1"];
    let formValues = "";
    // Vòng lặp duyệt qua các phần tử input của form
    for (let i = 0; i < myForm.length; i++) {
        formValues += myForm.elements[i].value + " - ";
    }
    result += "<b>5. By HTML Collection (document.forms):</b> Dữ liệu trong form là: <i>" + formValues + "</i><br>";

    // Đổ kết quả ra màn hình
    document.getElementById("ketQuaTimKiem").innerHTML = result;
}
