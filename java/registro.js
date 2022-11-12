
async function enviarcuenta(datosFormulario){
    await fetch('../html/agregarusuario.php', {
        method: 'POST',
        body: datosFormulario});
    alert ("usuario creado exitosamente");
}
async function usreg(datosFormulario){
        const men = await fetch('../html/usureg.php', {
            method: 'POST',
            body: datosFormulario});
        const mensaje = await men.json();
        if(mensaje.status == "si"){
            enviarcuenta(datosFormulario);        
        }else{
            alert("usuario o correo ya registrado");
        }
}
document
.getElementById('formulario_registro')
.addEventListener('submit', function (event) {
    event.preventDefault();
    const formulario = document.getElementById('formulario_registro');
    const formularioData = new FormData(formulario);
    usreg(formularioData);
    });


