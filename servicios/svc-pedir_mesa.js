const express = require('express');
const router = express.Router();
const conexion = require('../dbConnection'); // Asegúrate de que esta conexión esté funcionando correctamente
const fs = require('fs');

// Ruta que maneja la petición para pedir la mesa
router.get('/', (req, res) => {
    conexion.query('SELECT id, nombre_mesa, cantidad_asiento, estado FROM mesa', (error, resultados) => {
        if (error) {
            console.error('Error en la consulta:', error);
            res.status(500).json({ error: 'Error en la consulta' });
            return;
        }

        // Si todo va bien, respondemos con los resultados de la consulta
        res.json(resultados);
    });
});

module.exports = router;