const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor');
});

// Ruta de los servicios
app.get('/servicios/pedir-mesa', (req, res) => {
    res.json({ message: "Aquí están los datos de la mesa" });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
