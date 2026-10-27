<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bai2b</title>
</head>
<body>
    <form method ="POST">
        Họ tên: <input type="text" name = "ten"> <br> <br>
        Ngày sinh: <input type="text" name="ngayde"> <br> <br>
        Lớp: <input type="text" name="class" > <br> <br>
        Điểm: <input type="text" name="point"> <br><br>
        <button type = "submit" name = "a1" >hiện</button>
    </form>

    <?php
        if(isset($_POST['a1'])){
            $hoten = $_POST['ten'];
            $ngaysinh = $_POST['ngayde'];
            $lop = $_POST['class'];
            $diem = $_POST['point'];

            echo "họ và tên: $hoten <br>";
            echo "ngày sinh: $ngaysinh <br>";
            echo "lớp: $lop <br>";
            echo "điểm: $diem <br>";
        }
    ?>
</body>
</html>