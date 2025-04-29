<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $captchaInput = $_POST['captchaInput'];
    $captchaSession = $_SESSION['captcha'];

    // Simple CAPTCHA validation
    if ($captchaInput !== $captchaSession) {
        die('CAPTCHA validation failed.');
    }

    // Password hashing
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    // Save user data (you need to implement database storage here)
    // Example: insert into database

    echo "Registration successful!";
}
?>
