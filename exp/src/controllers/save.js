import conexion from '../database/db.js'

//Creamos funcion save
let save = (req, res) => {
    const user = req.body.user;
    const email = req.body.email;
    const tel = req.body.telefono;
    const product = req.body.product;
    const comentario = req.body.mensaje;
    conexion.query('INSERT INTO pedidos SET ?', { nombre: user, correo: email, comentario: comentario, telefono: tel, id_producto: product }, (error, results) => {
        if (error) {
            console.log(error)
        } else {
            res.redirect("/contacto");
        }
    })
}

// Exportamos funcion save
export default save;