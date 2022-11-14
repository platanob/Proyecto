document
    .getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        const formulario = document.getElementById('form');
        const formularioData = new FormData(formulario);
        borrar(formularioData);
    });
