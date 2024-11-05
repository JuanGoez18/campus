const express = require('express');
const cors = require('cors');
const path = require('path');
const mysql = require('mysql');
const app = express();
const PORT = 8080;

// Habilitar CORS
app.use(cors());
app.use(express.json()); // Para poder manejar JSON en el cuerpo de la solicitud
app.use(express.static(path.join(__dirname, 'ruta/a/tu/proyecto'))); // Cambia esta ruta a la carpeta de tu proyecto

const conexion = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: '',
    database: 'campus'
});

// Conectar a la base de datos
conexion.connect((error) => {
    if (error) {
        console.error('Error conectando a la base de datos:', error);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

module.exports = conexion;


