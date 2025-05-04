
document.addEventListener('DOMContentLoaded', cargarArchivos);

function cargarArchivos () {
	fetch ('/api/archivos')
		.then(respuesta => respuesta.json())
		.then(data => {
			listarArchivos(data);
		})
}

function listarArchivos(data) {
	let lista = "";

	for (let i = 0 ; i < data.archivos.length ; i++) {
		lista += "<li><a>" + data.archivos[i] + "</a></li>";
	}

	document.getElementById("listaDiv").innerHTML = lista;
}