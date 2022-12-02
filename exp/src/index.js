import express from "express";
import ejs from 'ejs';
import { dirname, join } from 'path'
import { fileURLToPath } from "url";

import indexRoute from './routes/index.js'

const app = express()

//
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))

//view engine extiende el html y permite añadir logica al html
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express(JSON));
app.use(indexRoute)
app.use(express.static(join(__dirname, 'public')))

app.listen(process.env.PORT || 3000)
console.log("puerto", process.env.PORT || 3000)