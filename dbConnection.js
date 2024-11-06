const express = require('express');
const cors = require('cors');
const path = require('path');
const mysql = require('mysql2');
const app = express();
const PORT = 8080;

// Habilitar CORS
app.use(cors({
    origin: '*' // Permitir solicitudes desde cualquier origen
}));
app.use(express.json()); // Para poder manejar JSON en el cuerpo de la solicitud
app.use(express.static(path.join(__dirname, 'ruta/a/tu/proyecto'))); // Cambia esta ruta a la carpeta de tu proyecto

const conexion = mysql.createConnection({
    host: 'junction.proxy.rlwy.net',  // Solo el dominio o IP pública
    user: 'root',
    password: 'MwSowCmWHcEIcfisZWGBIIuaoMsCBVGD',
    database: 'railway',
    port: 39659, // El puerto correcto según tu configuración
    connectTimeout: 100000
});

// Conectar a la base de datos
conexion.connect((error) => {
    if (error) {
        console.error('Error conectando a la base de datos:', error);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

conexion.on('error', (err) => {
    if (err.code === 'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR') {
        console.log('Error fatal en la conexión. Reintentando...');
        conexion.connect(); // Reintentar conexión si ocurre un error fatal
    } else {
        console.error('Otro error en la conexión:', err);
    }
});

module.exports = conexion;


