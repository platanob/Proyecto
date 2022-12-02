import { query } from 'express';
import conexion from '../database/db.js';

let update = (req, res) => {
    const id = req.body.id
    const user = req.body.user;
    const email = req.body.email;
    const tel = req.body.telefono;
    const product = req.body.product;
    const comentario = req.body.mensaje;
    console.log(id, " ", user, " ", email, " ", tel, product, " ", comentario)
    conexion.query('UPDATE pedidos SET ? WHERE id_pedido = ?', [{ nombre: user, correo: email, comentario: comentario, telefono: tel, id_producto: product }, id], (error, results) => {
        if (error) {
            console.log(error)
        } else {
            res.redirect("/contacto");
        }
    })
}
export default update;
