<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<head>
<title> Untitled Document</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<body>
<form name="form1" action="" method="post" enctype="multipart/form-data">
	<input type="file" name="f1"> <br>
	<input type="submit" name="submit1" value="upload">
</form>

<?php
if(isset($_POST["submit1"]))
{
	$fnm=$_FILES["f1"]["name"];
	$dst="assets/".$fnm;
	move_uploaded_file($_FILES["f1"]["tmp_name"],$dst);
}
?>
</body>
</html>
