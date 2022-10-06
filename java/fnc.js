async function enviarFormulario(datosFormulario) {
    const response = await fetch('conn.php', {
        method: 'POST',
        body: datosFormulario,
    });

    const respuesta = await response.text();
    const obj = JSON.parse(respuesta);

    document.getElementById('respuesta').innerHTML = obj.success;
}
