const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos (tu index.html)
app.use(express.static(path.join(__dirname, '/')));

// Enviar index.html en cualquier ruta
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ESCUCHAR EN 0.0.0.0 (Esto es la clave para que Railway lo vea)
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
