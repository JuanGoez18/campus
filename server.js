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
const svcVerificarPermiso = require('./servicios/svc-verificar_permiso');
const svcEleminarSolicitud = require('./servicios/svc-eliminar_solicitud');
const svcPedirPlato = require('./servicios/svc-pedir_plato');
const svcGuardarPedido = require('./servicios/svc-guardar_pedido');
const svcObtenerPedidos = require('./servicios/svc-obtener_pedido');
const svcAdministrarplatos = require('./servicios/svc-administrar_platos');
const svcAdministrarMesas = require('./servicios/svc-administrar_mesas');


// Ruta de los servicios
app.use('/servicios/pedir-mesa', svcPedirMesa);
app.use('/servicios/enviar-registro', svcEnviarpedido);
app.use('/servicios/panel-control', svcPanelControl);
app.use('/servicios/verificar-permiso', svcVerificarPermiso);
app.use('/servicios/eliminar-solicitud', svcEleminarSolicitud);
app.use('/servicios/pedir-plato', svcPedirPlato);
app.use('/servicios/guardar-pedido', svcGuardarPedido);
app.use('/servicios/obtener-pedidos', svcObtenerPedidos);
app.use('/servicios/administrar-plato', svcAdministrarplatos);
app.use('/servicios/administrar-mesa', svcAdministrarMesas);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});