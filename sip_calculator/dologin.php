<?php
session_start();
    include_once 'database.php';

    if(isset($_POST['submit']))
    {  
        $un = $_POST['username'];
        $pw = $_POST['pass'];
        $sql=mysqli_query($conn,"select * from signup where username='$un' and password='$pw'"); 
        $r=mysqli_fetch_array($sql);
        if(is_array($r))
        {
         $_SESSION['un']=$r['$un'];
         $_SESSION['pw']=$r['$pw'];
         header("Location:index.html");
         echo"valid user";

        }
        else
        {
         echo " error";
        }
        mysqli_close($conn);
    }

?>