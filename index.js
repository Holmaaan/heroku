const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta principal
app.get('/', (req, res) => {
    res.send('¡Hola desde Railway!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
