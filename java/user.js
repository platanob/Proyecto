$(buscar_datos());

function buscar_datos(consulta) {
    $.ajax({
        url: "../html/user.php",
        type: "POST",
        dataType: 'html',
        data: { consulta: consulta },
    })
        .done(function (respuesta) {
            $("#user").html(respuesta);
        })
        .fail(function () {
            console.log("error")
        })
}

$(document).on('keyup', '#caja_busqueda', function () {
    var valor = $(this).val();
    if (valor != "") {
        buscar_datos(valor);
    }
    else {
        buscar_datos();
    }
});

async function iniciosecion(datos) {
    const men = await fetch('../html/user.php', {
        method: 'POST',
        body: datos
    });
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