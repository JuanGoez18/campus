const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor');
});

// Importar el archivo de servicio
const svcPedirMesa = require('./servicios/svc-pedir-mesa');

// Ruta de los servicios
app.get('/servicios/pedir-mesa', (req, res) => {
    res.json(svcPedirMesa);  // Envía los datos del servicio
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});