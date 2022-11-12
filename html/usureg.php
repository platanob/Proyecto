<?php
//creamos conexion
$conn = mysqli_connect("db.inf.uct.cl","A2022_bcarrasco","A2022_bcarrasco","A2022_bcarrasco");
// Comprobamos conexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$salida = array("status" => "si");
//Recimos la informacion
$usuario = $_POST['usuario'];
$correo = $_POST['correo'];
//Insertamos la informacion a la base de datos
$sql = "SELECT usuario,email from usuario_dw ";

$result = $conn->query($sql);
while ($fila = $result->fetch_assoc()) {
    if ($fila['usuario']== $usuario or $fila['email']==$correo){
        $salida['status']="no" ;
    }
}
exit(json_encode($salida)); 
?>