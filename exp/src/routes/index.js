import { Router } from "express";
const router = Router();
import conexion from '../database/db.js'
// Importamos funcion save
import save from '../controllers/save.js'
import update from '../controllers/update.js'


router.get("/", (req, res) => res.render('index'))

router.get("/PS", (req, res) => res.render('PS'))

router.get("/historia", (req, res) => res.render('historia'))

router.get("/equipo", (req, res) => res.render('equipo'))

// Muestra la tabla en contacto
router.get("/contacto", (req, res) => {
    conexion.query('SELECT * FROM pedidos', (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.render('contacto', { results: results });
        }
    })
})

// Te lleva a la pagina crear
router.get("/create", (req, res) => {
    res.render('create');
})
router.get("/edit/:id_pedido", (req, res) => {
    const id_pedido = req.params.id_pedido;
    conexion.query('SELECT * FROM pedidos WHERE id_pedido = ?', [id_pedido], (error, results) => {
        if (error) { console.log(error) } else {
            res.render('edit', { user: results[0] });
        }
    })
})

// Elimina registro
router.get("/delete/:id_pedido", (req, res) => {
    const id_pedido = req.params.id_pedido;
    conexion.query('DELETE FROM pedidos WHERE id_pedido= ?', [id_pedido], (error, results) => {
        if (error) {
            console.log(error)
        } else {
            res.redirect('/contacto')
        }
    })
})


router.get("/login", (req, res) => res.render('login'))


router.post('/save', save)

router.post('/update', update)


export default router
