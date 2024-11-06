const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para aceptar solicitudes JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor');
});

// Importar el archivo de servicio
const svcPedirMesa = require('./servicios/svc-pedir_mesa');


// Ruta de los servicios
app.use('/servicios/pedir-mesa', svcPedirMesa);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});