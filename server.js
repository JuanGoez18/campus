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
const svcPanelControl = require('./servicios/svc-panel_control-1');
const svcverificarPermiso = require('./servicios/svc-verificar_permiso');
const svceleminarSolicitud = require('./servicios/svc-eliminar_solicitud');
const svcpedirPlato = require('./servicios/svc-pedir_plato');
const svcguardarPedido = require('./servicios/svc-guardar_pedido');
const svcobtenerPedidos = require('./servicios/svc-obtener_pedido');


// Ruta de los servicios
app.use('/servicios/pedir-mesa', svcPedirMesa);
app.use('/servicios/enviar-registro', svcEnviarpedido);
app.use('/servicios/panel-control', svcPanelControl);
app.use('/servicios/verificar-permiso', svcverificarPermiso);
app.use('/servicios/eliminar-solicitud', svceleminarSolicitud);
app.use('/servicios/pedir-plato', svcpedirPlato);
app.use('/servicios/guardar-pedido', svcguardarPedido);
app.use('/servicios/obtener-pedidos', svcobtenerPedidos);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});