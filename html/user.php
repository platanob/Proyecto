<?php

require 'cfg.php';

$usuario = $_POST['usuario'];

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

session_start();
$_SESSION['usuario'] = $usuario;

$salida = "";
$query = "SELECT * FROM pedidos, usuario_dw WHERE nombre = '$usuario' and usuario = '$usuario'";

if (isset($_POST['consulta'])) {
    $q = $conn->real_escape_string($_POST['consulta']);
    $query = "SELECT id_pedido,nombre,correo,comentario,telefono,id_producto FROM pedidos
WHERE correo LIKE '" . $q . "%'";
}

$resultado = $conn->query($query);

if ($resultado->num_rows > 0) {
    "
    <table>
    <thead>
        <th>pedido</th>
        <th>nombre</th>
        <th>correo</th>
        <th>mensaje</th>
        <th>telefono</th>
        <th>producto</th>
    </thead>
    <tbody>";
    while ($fila = $resultado->fetch_assoc()) {
        $salida .= "<tr>
        <td>" . $fila['id_pedido'] . "</td>
        <td>" . $fila['nombre'] . "</td>
        <td>" . $fila['correo'] . "</td>
        <td>" . $fila['comentario'] . "</td>
        <td>" . $fila['telefono'] . "</td>
        <td>" . $fila['id_producto'] . "</td>
        </tr>";
    }
    $salida .= "</tbody></table>";
} else {
    $salida .= "No hay datos";
}
echo $salida;
