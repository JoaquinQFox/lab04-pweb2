const path = require('path');
const express = require('express');
const rutas = require('./rutas.js');
const app = express();

app.use(express.static('../pub'));
app.use(express.json());

app.use('/api', rutas);

app.get('/', (request, response) => {
	response.sendFile(path.resolve(__dirname, '..', 'pub', 'index.html'));
});

app.listen(3000, () => {
	console.log("Escuchando en: http://localhost:3000")
});