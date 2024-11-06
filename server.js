const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar CORS para todas las solicitudes
app.use(cors());  // Esto permite todas las solicitudes de origen cruzado

// Middleware para aceptar solicitudes JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor');
});

// Importar el archivo de servicio
const svcPedirMesa = require('./servicios/svc-pedir_mesa');
const svcEnviarpedido = require('./servicios/svc-enviar_registro');


// Ruta de los servicios
app.use('/servicios/pedir-mesa', svcPedirMesa);
app.use('/servicios/enviar-registro', svcEnviarpedido);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});