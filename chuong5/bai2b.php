<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>bai2b</title>
  </head>
  <body>
    <form method="POST">
      Họ và tên: <input type="text" name="hoten" /> <br />
      <br />
      Ngày sinh: <input type="text" name="ngaysinh" /> <br />
      <br />
      Lớp: <input type="text" name="lop" /> <br />
      <br />
      Điểm: <input type="text" name="diem" /> <br />
      <br />
      <button type="submit" name="submit">Hiển thị</button>
    </form>
    <?php
      if(isset($_POST['submit'])){
        //lấy data từ form gán vô các bín riêng
        $hoten = $_POST['hoten'];
        $ngaysinh = $_POST['ngaysinh'];
        $lop = $_POST['lop'];
        $diem = $_POST['diem'];

        //xuất kq trực tiếp bên trong nhấy kép
        echo "Họ và tên: $hoten <br>";
        echo "Ngày sinh: $ngaysinh <br>";
        echo "Lớp: $lop <br>";
        echo "Điểm: $diem <br>";
      }
    ?>
  </body>
</html>
