<?php
session_start();
header('Content-type: image/png');

$width = 100;
$height = 30;
$image = imagecreatetruecolor($width, $height);

$bg_color = imagecolorallocate($image, 255, 255, 255);
$line_color = imagecolorallocate($image, 64, 64, 64);
$text_color = imagecolorallocate($image, 0, 0, 0);

imagefill($image, 0, 0, $bg_color);
for ($i = 0; $i < 5; $i++) {
    imageline($image, mt_rand(0, $width), mt_rand(0, $height), mt_rand(0, $width), mt_rand(0, $height), $line_color);
}

$captcha_code = substr(str_shuffle('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'), 0, 5);
$_SESSION['captcha_code'] = $captcha_code;

imagettftext($image, 14, 0, 10, 20, $text_color, 'arial.ttf', $captcha_code);

imagepng($image);
imagedestroy($image);
?>
