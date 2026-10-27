<?php
// 1. Tạo biến kết quả rỗng ban đầu để không bị lỗi khi mới mở trang
$kq = "";

// 2. Kiểm tra nếu form được gửi lên (người dùng bấm nút)
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Lấy 2 số từ ô nhập liệu dựa vào thuộc tính name
    $so1 = $_POST['so1'];
    $so2 = $_POST['so2'];

    // 3. Kiểm tra người dùng đã nhấn vào nút submit nào
    if (isset($_POST['btn_cong'])) {
        $kq = $so1 + $so2;
    }
    if (isset($_POST['btn_tru'])) {
        $kq = $so1 - $so2;
    }
    if (isset($_POST['btn_nhan'])) {
        $kq = $so1 * $so2;
    }
    if (isset($_POST['btn_chia'])) {
        // Phép chia cần tránh chia cho 0
        if ($so2 != 0) {
            $kq = $so1 / $so2;
        } else {
            $kq = "Không chia được cho 0";
        }
    }
    if (isset($_POST['btn_mod'])) {
        // Phép chia lấy dư cũng không chia cho 0
        if ($so2 != 0) {
            $kq = $so1 % $so2;
        } else {
            $kq = "Không chia được cho 0";
        }
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Bài 4</title>
</head>
<body>
    <h3>TÍNH TOÁN SỐ HỌC</h3>

    <form method="POST">
        Số thứ 1: <input type="number" name="so1" required> <br><br>
        Số thứ 2: <input type="number" name="so2" required> <br><br>
        Kết quả: <input type="text" readonly value="<?php echo $kq; ?>"> <br><br>

        <!-- Mỗi nút có name riêng để PHP phân biệt người dùng bấm nút nào -->
        <input type="submit" name="btn_cong" value="Cộng">
        <input type="submit" name="btn_tru" value="Trừ">
        <input type="submit" name="btn_nhan" value="Nhân">
        <input type="submit" name="btn_chia" value="Chia">
        <input type="submit" name="btn_mod" value="Mod">
    </form>
</body>
</html>