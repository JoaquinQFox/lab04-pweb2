const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const directorioMarkdown =path.join(__dirname, 'markdowns');

function listarArchivos() {
    return fs.readdirSync(directorioMarkdown).filter(archivo => archivo.endsWith('.md'))
}

console.log(listarArchivos())

function leerArchivoComoHTML(nombreArchivo) {
    const rutaArchivo = path.join(directorioMarkdown, nombreArchivo);
    if (!fs.existsSync(rutaArchivo)) return null;
    const markdown = fs.readFileSync(rutaArchivo, 'utf-8');
    return marked(markdown);
}
