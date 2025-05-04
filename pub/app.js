
document.addEventListener('DOMContentLoaded', cargarArchivos);

function cargarArchivos () {
	fetch ('/api/archivos')
		.then(respuesta => respuesta.json())
		.then(data => {
			listarArchivos(data);
		})
}

function listarArchivos(data) {
	let lista = "<ul>";

	for (let i = 0 ; i < data.length ; i++) {
		lista += "<li><a>" + data[i] + "</a></li>";
	}

	lista += "</ul>";
	document.getElementById("listaDiv").innerHTML = lista;
}