const servidor_express=require("express");
 const{listarArchivos,leerArchivoComoHTML,crearArchivoMarkdown}=require("./Controlador_de_Archivos.js");
  const rutas=servidor_express();

rutas.get('/archivos', (solicitud,respuesta) => {
    const archivos = listarArchivos();
    respuesta.json({archivos});
});