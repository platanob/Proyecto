import { Router } from "express";
const router = Router();
import conexion from '../database/db.js'
// Importamos funcion save
import save from '../controllers/save.js'
import update from '../controllers/update.js'
import bcrypt from 'bcrypt';
import session from 'express-session';

router.use(session({
    secret:'hola',
    resave: true,
    saveUninitialized:true
}))

router.get("/", (req, res) => res.render('index'))

router.get("/PS", (req, res) => res.render('PS'))

router.get("/historia", (req, res) =>res.render('historia'))

router.get("/equipo", (req, res) => res.render('equipo'))

// Muestra la tabla en contacto
router.get("/contacto", (req, res) => { 
    if (req.session.loggedin) {
    conexion.query('SELECT * FROM pedidos' , (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.render('contacto', { results: results });
        }
    })
}else{
    res.redirect('login')
}})

// Te lleva a la pagina crear
router.get("/create", (req, res) => {
    if(req.session.loggedin){
    res.render('create');}else{
        res.redirect('login')
    }
})
router.get("/edit/:id_pedido", (req, res) => {
    if(req.session.loggedin){
    const id_pedido = req.params.id_pedido;
    conexion.query('SELECT * FROM pedidos WHERE id_pedido = ?', [id_pedido], (error, results) => {
        if (error) { console.log(error) } else {
            res.render('edit', { user: results[0] });
        }
    })}else{res.redirect('login')}
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


//login usuario
router.get("/login", (req, res) => {if (req.session.loggedin){
    res.redirect('/contacto')
}else{res.render('login')}})

router.post("/login",(req,res)=>{
    const usuario = req.body.usuario;
    const contra = req.body.contra ;
    conexion.query('SELECT * FROM usuario_dw WHERE usuario=? ', [usuario], async(error, results) => {
        if(error){
            console.log(error)
        }else{
            const result = await bcrypt.compare(contra , results[0].contrasena)
            if(result){
                req.session.loggedin = true ;
                req.session.usuarioid = results[0].id_usuario;
                req.session.usuario = results[0].usario;
                req.session.email = results[0].email ;
                console.log(req.session.email)
                res.redirect('/')
            }
            else{
                console.log('la contra no concide')
            }
        }
    })
})
//logout
function logout(req,res){
    if (req.session.loggedin) {
        req.session.destroy()
    }
    res.redirect('login')
}
router.get("/nologin" , (req,res)=>logout(req,res))
//registro usuario

router.get("/regis",(req,res)=> res.render('regis'))


router.post("/regis",async(req,res)=>{
    const usuario =req.body.usuario
    const contra = await bcrypt.hash((req.body.contra),10) 
    const email = req.body.correo
    conexion.query('INSERT INTO usuario_dw(usuario,contrasena,email) VALUES(?,?,?)', [usuario,contra,email], (error, results) => {
        if (error) {
            console.log(error)
            res.redirect('/regis')
        } else {
            
            res.redirect('login')
        }
    })
})

router.post('/save', save)

router.post('/update', update)


export default router
