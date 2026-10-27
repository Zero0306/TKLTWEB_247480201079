<?php
// Hàm tìm USCLN
function tim_uscln($a, $b) {
    while ($b != 0) {
        $r = $a % $b;
        $a = $b;
        $b = $r;
    }
    return $a;
}

// Hàm tìm BSCNN
function tim_bscnn($a, $b) {
    return ($a * $b) / tim_uscln($a, $b);
}

$so1 = "";
$so2 = "";
$kq  = "";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $so1 = $_POST['so1'];
    $so2 = $_POST['so2'];

    if (isset($_POST['btn_uscln'])) {
        $kq = tim_uscln($so1, $so2);
    }
    if (isset($_POST['btn_bscnn'])) {
        $kq = tim_bscnn($so1, $so2);
    }
}
?>

<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Bài 5</title></head>
<body>
    <h3>TÍNH USCLN VÀ BSCNN</h3>
    <form method="POST">
        Số thứ 1: <input type="number" name="so1" value="<?php echo $so1; ?>" ><br><br>
        Số thứ 2: <input type="number" name="so2" value="<?php echo $so2; ?>" ><br><br>
        Kết quả: <input type="text"  value="<?php echo $kq; ?>"><br><br>

        <input type="submit" name="btn_uscln" value="USCLN">
        <input type="submit" name="btn_bscnn" value="BSCNN">
    </form>
</body>
</html>