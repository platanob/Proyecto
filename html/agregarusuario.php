<?php
//creamos conexion
$conn = mysqli_connect("db.inf.uct.cl","A2022_bcarrasco","A2022_bcarrasco","A2022_bcarrasco");
// Comprobamos conexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//Recimos la informacion


$usuario = $_POST['usuario'];
$correo = $_POST['correo'];
$contra = md5($_POST['contra']);
echo $nombre;
//Insertamos la informacion a la base de datos
$sql = "INSERT INTO usuario_dw(usuario,contrasena,email)
    VALUES ('$usuario','$contra','$correo')";
$result = $conn->query($sql);

?>