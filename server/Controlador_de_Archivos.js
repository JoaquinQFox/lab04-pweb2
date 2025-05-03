const fs = require('fs');
const path = require('path');

const directorioMarkdown =path.join(__dirname, 'markdowns');

function listarArchivos() {
    return fs.readdirSync(directorioMarkdown).filter(archivo => archivo.endsWith('.md'))
}

console.log(listarArchivos())