async function iniciosecion(datos){
    const men = await fetch('../html/login.php', {
        method: 'POST',
        body: datos});
    const mensaje = await men.json();
    alert(mensaje.status)
}

document
.getElementById('inicio_sesion')
.addEventListener('submit', function (event) {
    event.preventDefault();
    const formulario = document.getElementById('inicio_sesion');
    const formularioData = new FormData(formulario);
    iniciosecion(formularioData);
    });