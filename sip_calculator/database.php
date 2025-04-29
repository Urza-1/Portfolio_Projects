<?php 
    $servername = "localhost";
    $username = "root";
    $password = '';
    $dbname = "sip";

    $conn = mysqli_connect($servername, $username,$password,$dbname);

    if(!$conn)
    {
        echo "Not Connected";
    }
    else
    {
        echo "Connected";
    }
?>