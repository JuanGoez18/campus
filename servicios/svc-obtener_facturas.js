const express = require('express');
const router = express.Router();
const conexion = require('../dbConnection');

router.get('/facturas', (req, res) => {
    const sql = 'SELECT pago_total, fecha, nombre_mesa, nombre_usuario, cc, numero FROM factura';
    
    conexion.query(sql, (err, resultados) => {
        if (err) {
            console.error("Error al obtener facturas:", err);
            res.status(500).send("Error al obtener las facturas.");
        } else {
            res.json(resultados);
        }
    });
});

module.exports = router;
