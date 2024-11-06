const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080; // Usar el puerto asignado por Render o 8080 para desarrollo local

// Habilitar CORS
app.use(cors({
    origin: '*' // Permitir solicitudes desde cualquier origen
}));

// Middleware para JSON y archivos estáticos
app.use(express.json());
app.use(express.static(path.join(__dirname, 'ruta/a/tu/proyecto'))); // Cambia esta ruta según sea necesario

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
