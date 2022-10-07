async function enviarFormulario(datosFormulario) {
    const response = await fetch('../html/conexion.php', {
        method: 'POST',
        body: datosFormulario
    });

    const respuesta = await response.text();
    const obj = JSON.parse(respuesta);
    alert("su conexion es : " + obj.success + "\ncodigo:" + response.status)
    document.getElementById('respuesta').innerHTML = obj.success;
}
