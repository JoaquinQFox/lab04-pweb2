
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
		lista += "<li><a onclick='cargarArchivo(\""+ data.archivos[i] +"\")'>" + data.archivos[i] + "</a></li>";
	}

	document.getElementById("listaDiv").innerHTML = lista;
}

function cargarArchivo (nombreArchivo) {
	console.log(nombreArchivo);
	fetch ("/api/archivos/"+nombreArchivo)
		.then(respuesta => respuesta.json())
		.then(data => {
			console.log(data);
		});
}