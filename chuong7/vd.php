<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ví dụ 1</title>
</head>
<body>
    <h1>kết nối csdl</h1>
    <?php
        $servername = "localhost";
        $database = "quanlybanhang";
        $username = "root";
        $password = "";
        //$data = 
        
        $connect = mysqli_connect($servername, 
        $username, $password, $database );
        // thực hiện select
        $sql = "select * from khachhang";
        if($result = mysqli_query($connect, $sql)){
            if(mysqli_num_rows($result) > 0){
                while($row = mysqli_fetch_array($result)){
                    echo $row ['makh'];
                    echo $row ['tenkh'];
                    echo $row ['namsinh'];
                    echo $row ['dienthoai'];
                    echo $row ['diachi'] . "<br>";
                }
                mysqli_free_result($result);
            }
            else{
            echo "ko có mẫu tin nào hết";
        }
        }
        else
            {
                echo "truy vấn thất bại" .mysqli_error($connect);
            }
        mysqli_close($connect);
        

        // if($connect){
        //     echo "kết nối thành công nhe";
        // }
        
        // else
        //     {
        //         echo "kết nối k thành công nghe: " .mysqli_connect_error();
        //     }
    ?>
</body>
</html>