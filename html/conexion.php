<?php
//importamos las variables de conexion 
include_once 'cfg.php';

//creamos conexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobamos conexion

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//Recimos la informacion

$nombre = $_POST['nombre'];
$correo = $_POST['email'];
$mensaje = $_POST['mensaje'];
$telefono = $_POST['telefono'];
$idpro = $_POST['producto'];
//Insertamos la informacion a la base de datos
$sql = "INSERT INTO pedidos(nombre, correo, comentario,telefono,id_producto) VALUES ('$nombre', '$correo', '$mensaje', $telefono, '$idpro')";
$result = $conn->query($sql);

$response = array();

if ($result) {
    $response['success'] = "exito";
    http_response_code(200);
    exit(json_encode($response));
} else {
    $response['error'] = "error: " . $conn->error;
    http_response_code(412);
    exit(json_encode($response));
}
