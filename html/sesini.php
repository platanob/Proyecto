<?php
session_start();
$salida = array("status" => "no");
if (isset($_SESSION['usuario'])){
    $salida['status']= "si";
}
exit (json_encode($salida));