<?php
// Bài 3a: Thực hiện phép tính từ 2 biến cố định ban đầu
$x = 3;
$y = 5;

echo "<h3>Bài 3a</h3>";
echo "$x + $y = " . ($x + $y) . "<br>";
echo "$x - $y = " . ($x - $y) . "<br>";
echo "$x * $y = " . ($x * $y) . "<br>";
if ($y != 0) {
    echo "$x / $y = " . round($x / $y, 2) . "<br>";
    echo "$x % $y = " . ($x % $y) . "<br>";
}
?>

<hr>

<?php
// Bài 3b: Phép tính với 2 số sinh ngẫu nhiên
echo "<h3>Bài 3b</h3>";
$x = rand(1, 100);
$y = rand(1, 100);

echo "Số x = $x, Số y = $y <br>";
echo "$x + $y = " . ($x + $y) . "<br>";
echo "$x - $y = " . ($x - $y) . "<br>";
echo "$x * $y = " . ($x * $y) . "<br>";
echo "$x / $y = " . round($x / $y, 2) . "<br>";
echo "$x % $y = " . ($x % $y) . "<br>";
?>

<hr>

<?php
// Bài 3c: Sinh ngẫu nhiên cho đến khi thỏa mãn x > y
echo "<h3>Bài 3c</h3>";
do {
    $x = rand(1, 100);
    $y = rand(1, 100);
} while ($x <= $y);

echo "Số x = $x, Số y = $y (x > y)<br>";
echo "$x + $y = " . ($x + $y) . "<br>";
echo "$x - $y = " . ($x - $y) . "<br>";
echo "$x * $y = " . ($x * $y) . "<br>";
echo "$x / $y = " . round($x / $y, 2) . "<br>";
echo "$x % $y = " . ($x % $y) . "<br>";
?>