import mysql from 'mysql'

const conexion = mysql.createConnection({
    host: 'db.inf.uct.cl',
    user: 'A2022_bcarrasco',
    password: 'A2022_bcarrasco',
    database: 'A2022_bcarrasco'
});

conexion.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("bna")
    }
})

export default conexion