<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>update</title>
	<style >
		body{
  margin:0;
  color:#FFFFFF;
  background:#c8c8c8;
  font:600 16px/18px 'Open Sans',sans-serif;
}
*,:after,:before{box-sizing:border-box}
.clearfix:after,.clearfix:before{content:'';display:table}
.clearfix:after{clear:both;display:block}
a{color:inherit;text-decoration:none}

.login-wrap{
  width:100%;
  margin:auto;
  max-width:525px;
  min-height:850px;
  position:relative;
  background:url(https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg) no-repeat center;
  box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);
}
.login-html{
  width:100%;
  height:100%;
  position:absolute;
  padding:90px 70px 50px 70px;
  background:rgba(40,57,101,.9);
}
.button{
  position: relative;
  text-align: center;
  width: 220px;
  padding: 5px;
  font-size: 25px;
  color: #15f4ee;
  font-family: poppins;
  font-weight: 400;
  border: 5px solid #15f4ee;
  letter-spacing: 15px;
  cursor: pointer;
  border-radius: 100px;
  transition:1.5s;
}
.button:hover{
	box-shadow: 0 5px 50px 0 #15f4ee inset, 0 5px 50px 0 #15f4ee,
	0 5px 50px 0 #15f4ee inset, 0 5px 50px 0 #15f4ee;
	text-shadow: 0 0 5px #15f4ee,0 0 5px #15f4ee;

}
.login-form .group .input{
  width:100%;
  color:#fff;
  display:block;
}
.login-form .group .input{
  border:none;
  padding:15px 20px;
  border-radius:25px;
  background:rgba(255,255,255,.1);
}
	</style>
</head>
<body>
<form action="dologin.php" method="POST">  
<div class="login-wrap">
	<div class="login-html">
		
		<h3 color="#fffff"> <center>WELCOME TO MONEY CONVERSION</center><br><center>AND</center><br><center> SIP CALCULATOR</center><br><center> Sign In </center><br></h1>
			<div class="login-form">
			<div class="group">   
<label> Username </label>         
<input type="text" name="username" size="15" class="input" /> </div> <br> <br>
<div class="group">    
<label> password </label>         
<input type="password" name="pass" size="15" class="input" /> </div><br> <br>
<center>
<input type="submit" class="button" value="submit" name="submit"/> </center>
</div>
</div>
</div>
</form>  
</body>
</html>