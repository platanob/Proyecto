document
    .getElementById('formulario')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        const formulario = document.getElementById('formulario');
        const formularioData = new FormData(formulario);
        enviarFormulario(formularioData);
    });
