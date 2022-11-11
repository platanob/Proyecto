document
    .getElementById('formulario2')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        const formulario = document.getElementById('formulario2');
        const formularioData = new FormData(formulario);
        enviarFormulario(formularioData);
    });
