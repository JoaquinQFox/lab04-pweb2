
document.addEventListener('DOMContentLoaded', cargarArchivos);

function cargarArchivos () {
	fetch ('/api/archivos')
		.then(respuesta => respuesta.json())
		.then(data => {
			console.log(data);
		})
}