<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
.btn-logOK {
  width: 10%; 
  margin: 5% 43%; 
  background-color: #97c83e;
 /* position: relative; */
  height: 2.5rem;
  font-weight: 400;
  font-size: 1.1rem;
  padding: 0.5% 0.8% 0.2% 0.8%;
  color: white;
  justify-content: center;
  align-content: center;
  border-radius: 4px;
  border-color: transparent;
}

</style>


    <title>Read Data</title>
<link rel="stylesheet" type="text/css" href="../css/regData.css">

</head>
<body>
 
<?php
$my_query=mysqli_connect("localhost","root","","cac_2022");
$nombre = $_POST['name'];
$apellido = $_POST['lastname'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['pwd'];

$buscaUser = $my_query->query("SELECT * FROM usuario WHERE username ='$username'");
$buscaMail = $my_query->query("SELECT * FROM usuario WHERE email ='$email'");
// $res=mysqlquery($conexion, $busca);

if(($buscaUser->num_rows==0) && ($buscaMail->num_rows==0)){
// $consulta=mysqli_connect("localhost","root","","cac_2022");
$queryInsertar = "INSERT INTO usuario (apellido, nombre, username, email, pwd) VALUES('$apellido', '$nombre', '$username', '$email', '$password')";

$insert = mysqli_query($my_query,$queryInsertar);

// Check connection
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$result = mysqli_query($my_query,"SELECT * FROM usuario WHERE username = '$username'");

// 
?>
<table class= 'titulo' >
<tr><th class = 'titulo'><h1>Bienvenido, <?php echo($nombre. " ". $apellido) ?></h1></th></tr>
<tr><td class= 'titulo'><center><h2 class="centered-p"> Acá podés verificar si tus datos fueron registrados correctamente </h2></center></td></tr>


<div class='table-responsive'>
<table class='datos'>
<caption><h2>USUARIO REGISTRADO</h2></caption>
<br>
<tr class = 'datos' >
<th class='datos'><h3>Apellido</h3></th>
<th class='datos'><h3>Nombre</h3></th>
<th class='datos'><h3>Usuario</h3></th>
<th class='datos'><h3>E-mail</h3></th>
<th class='datos'><h3>Password</h3></th>
</tr>

<?php
while($row = mysqli_fetch_assoc($result))
{
echo "<tr>";
echo "<td class='datos'>" . $row['apellido'] . "</td>";
echo "<td class='datos'>" . $row['nombre'] . "</td>";
echo "<td class='datos'>" . $row['username'] . "</td>";
echo "<td class='datos'>" . $row['email'] . "</td>";
echo "<td class='datos'>" . $row['pwd'] . "</td>";

echo "</tr>";
}
?>
</table>

</div>
<div class='row justify-content-center'>

<!-- <a class = 'userOK' style='width: 100%  display: inline-block justify-self: center'> -->
<button type='button' class= 'btn-logOK' id='btn_logOK' onclick= "location.href='../registro.html#login';">Logueate</button>

</div> 

<?php


}else if ($buscaUser->num_rows==!0) {

?>
  <center><h1>Nombre de usuario ya registrado</h1></center>
  <a id= "volver"><button type='button'  id='btn_volver' onclick= "location.href='../registro.html';">Volver</button></a>

<?php
}else if ($buscaMail->num_rows==!0){

?>
  <center><h1>Email ya registrado</h1></center>
  <a id= "volver"><button type='button' class= 'btn-verde' id='btn_volver' onclick= "location.href='../registro.html';">Volver</button></a>

<?php
}

?>

</body>
</html>