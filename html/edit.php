<?php

require 'cfg.php';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$ID = $_POST['ID'];
$nombre = $_POST['nombre'];
$correo = $_POST['email'];
$mensaje = $_POST['mensaje'];
$telefono = $_POST['telefono'];
$idpro = $_POST['producto'];

$sql = "UPDATE `pedidos` SET `nombre` = '$nombre',`correo` = '$correo', `comentario` ='$mensaje', `telefono` = '$telefono', `id_producto` = '$idpro' WHERE `pedidos`.`id_pedido` = $ID";

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
