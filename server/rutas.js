const servidor_express=require("express");
 const{listarArchivos,leerArchivoComoHTML,crearArchivoMarkdown}=require("./Controlador_de_Archivos.js");
  const rutas=servidor_express.Router();

rutas.get('/archivos', (solicitud,respuesta) => {
    const archivos = listarArchivos();
    respuesta.json({archivos});
});

rutas.get('/archivos/:nombreArchivo', (solicitud,respuesta) => {
    let nombreArchivo = solicitud.params.nombreArchivo;
    const contenidoHTML = leerArchivoComoHTML(nombreArchivo);
    if (contenidoHTML) {
        respuesta.json({contenidoHTML});
    } else {
        respuesta.status(404).json('Archivo no encontrado');
    }
});

rutas.post('/archivo', (solicitud,respuesta) => {
    const { nombreArchivo, contenido } = solicitud.body;
    const exito = crearArchivoMarkdown(nombreArchivo, contenido);
    if (exito) {
        respuesta.status(201).json('Archivo creado con éxito');
    } else {
        respuesta.status(500).json('Error al crear el archivo');
    }
});

module.exports = rutas;