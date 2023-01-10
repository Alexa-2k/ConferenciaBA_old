<?php 
	session_start();
	$db = mysqli_connect('localhost', 'root', '', 'cac_2022');

	// inicializa variables
	$nombre = "";
	$apellido = "";
	$email = "";
	$password = "";
	$username = "";
	$ID = 0;
	$update = true;
	if (isset($_POST['update'])) {
		$ID = $_POST['ID'];
		$nombre = $_POST['nombre'];
		$apellido = $_POST['apellido'];
		$username = $_POST['username'];
		$email = $_POST['email'];
		$password = $_POST['pwd'];

		mysqli_query($db, "UPDATE usuario SET nombre='$nombre', apellido='$apellido', username ='$username', email = '$email', pwd = '$password' WHERE ID=$ID");
		$_SESSION['message'] = "Usuario actualizado!"; 
		header('location: admin.php');
		exit();
}


if (isset($_GET['del'])) {
	$ID = $_GET['del'];
	mysqli_query($db, "DELETE FROM usuario WHERE ID=$ID");
	$_SESSION['message'] = "Usuario eliminado!"; 
	header('location: admin.php');
	exit();
}
	// $update = false;
	// if (isset($_POST['save'])) {
	// 	$nombre = $_POST['nombre'];
	// 	$apellido = $_POST['apellido'];
	// 	$email = $_POST['email'];
	// 	$password = $_POST['pwd'];
	// 	$username = $_POST['username'];
	

	// 	mysqli_query($db, "INSERT INTO usuario (nombre, apellido, email, pwd, username) VALUES ('$nombre', '$apellido', '$email', '$password', '$username')"); 
	// 	$_SESSION['message'] = "Usuario guardado"; 
	// 	header('location: admin.php');
	//	exit();	
	// }

// ...
