<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
		<link href="https://fonts.googleapis.com/css?family=Muli|Playfair+Display|Poppins|Raleway&display=swap" rel="stylesheet">
		<link rel="stylesheet" href="style.css">
		<link rel="stylesheet" href="css/sidenav.css">
		<link rel="stylesheet" href="css/upload.css">
		<title>Nota</title>
	</head>
	<body>

		<nav id="mySidenav" class="nav sidenav">
			<a href="javascript:void(0)" id="closebtn" onclick="closeNav()">&times;</a>
			<a class="nav-link" href="index.html">Home</a>
			<a class="nav-link active" href="selection.html">Browse Notes</a>
			<a class="nav-link" href="documentList.html">Upload</a>
			<a class="nav-link" href="about.html">Help</a>
			<a class="nav-link" href="login(typeII).html">Log In</a>
		</nav>

		<a class="navbar-brand">nota</a>
		<img id="menu" onclick="openNav()" src="images/menu.png">

		<div id="main">
		<h2 id="intro" style="font-size:11vh;"> <center>Upload Notes</center> </h2>

		<div class="container main-container">
			<div class="row justify-content-center align-items-center main-row mb-5">
				<div class="col main-col">
					<div class="row mb-4">
						<div class="col-md-12">
							<div id="quarter-group" class="form-group">
								<label class="large-label" for="quarter">Quarter</label>
								<div class="row mb-4">
									<div class="col-md-3">
										<div id="quarter" class="form-check form-check-inline">
											<input class="form-check-input" type="radio" name="quarter-radios" id="exampleRadios1" value="fall" checked>
											<label class="form-check-label" for="exampleRadios1">
												Fall
											</label>
										</div>
									</div>
									<div class="col-md-3">
										<div id="quarter" class="form-check form-check-inline">
											<input class="form-check-input" type="radio" name="quarter-radios" id="exampleRadios2" value="winter">
											<label class="form-check-label" for="exampleRadios2">
												Winter
											</label>
										</div>
									</div>
									<div class="col-md-3">
										<div id="quarter" class="form-check form-check-inline">
											<input class="form-check-input" type="radio" name="quarter-radios" id="exampleRadios3" value="spring">
											<label class="form-check-label" for="exampleRadios3">
												Spring
											</label>
										</div>
									</div>
									<div class="col-md-3">
										<div id="quarter" class="form-check form-check-inline">
											<input class="form-check-input" type="radio" name="quarter-radios" id="exampleRadios4" value="summer">
											<label class="form-check-label" for="exampleRadios4">
												Summer
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row mb-4">
						<div class="col-md-6">
							<label class="large-label" for="location-input">Course</label>
							<select id="course-input" class="form-control form-control-md">
								<option>CS 180</option>
								<option>CS 185</option>
								<option>Physics 1</option>
								<option>CS 184</option>
								<option>Math 4A</option>
							</select>
						</div>
						<div class="col-md-6">
							<label class="large-label" for="location-input">Professor</label>
							<select id="professor-input" class="form-control form-control-md">
								<option>Linqi Yan</option>
								<option>Tobias Hollerer</option>
								<option>Ernest Freund</option>
								<option>Sebastian</option>
								<option>Shaya Shakerian</option>
							</select>
						</div>
					</div>
					<div class="row mb-4">
						<div class="col-md-12">
							<div class="form-group">
								<label class="large-label" for="time-input">Time</label>
								<input type="time" class="form-control" id="time-input">
							</div>
						</div>
					</div>
					<div class="row mb-4">
						<div class="col-md-12">
							<div class="row">
								<div class="col-md-12">
									<label class="large-label" for="week-button-group">Week</label>
								</div>
							</div>
							<div id="week-button-group" class="btn-group" role="group" aria-label="Basic example">
								<button type="button" class="btn btn-secondary">1</button>
								<button type="button" class="btn btn-secondary">2</button>
								<button type="button" class="btn btn-secondary">3</button>
								<button type="button" class="btn btn-secondary">4</button>
								<button type="button" class="btn btn-secondary">5</button>
								<button type="button" class="btn btn-secondary">6</button>
								<button type="button" class="btn btn-secondary">7</button>
								<button type="button" class="btn btn-secondary">8</button>
								<button type="button" class="btn btn-secondary">9</button>
								<button type="button" class="btn btn-secondary">10</button>
							</div>
						</div>
					</div>
					<div class="row mb-4">
						<div class="col-md-12">
							<form name="form1" action="" method="post" enctype="multipart/form-data">
								<input type="file" name="f1"> <br>
								<input class="btn btn-secondary btn-lg btn-block mb-4" type="submit" href="notes.html" style="margin-top:2vh;" name="submit1" value="upload">
								<a  href="notes.html"> <input class="btn btn-secondary btn-lg btn-block mb-4" style="margin-top:2vh;" name="submit1" value="return"> </a>
							</form>
						</div>
					</div>
				</div>
			</div> 
		</div>
</div>

<?php
if(isset($_POST["submit1"]))
{
	$fnm=$_FILES["f1"]["name"];
	$dst="assets/".$fnm;
	move_uploaded_file($_FILES["f1"]["tmp_name"],$dst);
}
?>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.13.0/umd/popper.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.min.js"></script>
		<script src="js/navbar.js"></script>
		<script>

			var hashParams = window.location.hash.substr(1).split('&'); // substr(1) to remove the `#`
for(var i = 0; i < hashParams.length; i++){
	var p = hashParams[i].split('=');
	document.getElementById(p[0]).value = decodeURIComponent(p[1]);;
}

		</script>
	</body>
</html>
