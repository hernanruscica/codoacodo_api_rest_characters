const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require('./src/routes/mainRoutes');
const charactersRoutes = require('./src/routes/charactersRoutes');
const PORT = 3000;


/* Archivos Estáticos */
app.use(express.static('public'));

/* Convierto el body de los POST en JSON */
app.use(express.json());

/* Configuración del Motor de Plantillas */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

/* Rutas del Servidor */
app.use('/', mainRoutes);
app.use('/api', charactersRoutes);

/* Puerto */
app.listen(PORT, () => console.log(`Servidor corriendo en: http://localhost:3000`));

