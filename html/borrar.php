
<?php

require 'cfg.php';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$ID = $_POST['borrar'];

$sql = " DELETE FROM `pedidos` WHERE `pedidos`.`id_pedido`= $ID";

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

// <!-- DELETE FROM `pedidos` WHERE `pedidos`.`id_pedido` = 30 -->
