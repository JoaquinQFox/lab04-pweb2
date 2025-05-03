const servidor_express=require("express");
 const{listarArchivos,leerArchivoComoHTML,crearArchivoMarkdown}=require("./Controlador_de_Archivos.js");
  const rutas=servidor_express();

rutas.get('/archivos', (solicitud,respuesta) => {
    const archivos = listarArchivos();
    respuesta.json({archivos});
});

rutas.get('/archivos/:nombreArchivo', (solicitud,respuesta) => {
    const nombreArchivo = solicitud.params.nombreArchivo;
    const contenidoHTML = leerArchivoComoHTML(nombreArchivo);
    if (contenidoHTML) {
        respuesta.send(contenidoHTML);
    } else {
        respuest.status(404).send('Archivo no encontrado');
    }
});