
function fun() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var producto = document.getElementById("producto").value;
    msj = document.getElementById("mensaje").value;
    alert("Tu nombre es: " + nombre + "\n" +
        "Tu email es:" + email + "\n" +
        "Tu producto es:" + producto + "\n" +
        "Tu mensaje: " + msj);
}

const contacto = document.getElementById("btn");

contacto.addEventListener("click", () => {
    fun()
})
