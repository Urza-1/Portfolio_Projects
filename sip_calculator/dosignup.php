<?php
    include_once "database.php";

    if(isset($_POST["submit"]))
    {
        $un = $_POST["username"];
        $pw = $_POST["pass"];
        $cn=$_POST['country'];
        $p=$_POST['phone'];
        $sql="insert into signup(username,password,country,phone)
        values('$un','$pw','$cn','$p')";
        if(mysqli_query($conn,$sql))
        {
         echo"Data inserted successfully";
         header("Location:login.php");
        }
        else
        {
         echo " error";
        }
        mysqli_close($conn);
    }

?>