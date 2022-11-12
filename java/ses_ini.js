async function enviarFormulario() {
    const response = await fetch('../html/sesini.php')
    const res = await response.json();
    if(res.status == "no"){

        location.href = "../html/login.html";
    }
}
window.onload(enviarFormulario());