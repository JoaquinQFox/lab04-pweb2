
document.addEventListener('DOMContentLoaded', cargarArchivos);
document.addEventListener('DOMContentLoaded', formularioVerificador);
document.querySelector("#formEditarMd").onsubmit = crearArchivo;

function formularioVerificador () {
	const nombre = document.querySelector("#nombreArchivoMd");
	const texto  = document.querySelector("#textoMd");
	const boton  = document.querySelector("#guardarArchivo");
	boton.disabled = true;

	document.onkeyup = () => {
		if (nombre.value.length > 0 && texto.value.length > 0) {
			boton.disabled = false;
		} else {
			boton.disabled = true;
		}
	};
}

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

	document.getElementById("nombreMostrarMd").innerHTML = nombreArchivo;

	fetch ("/api/archivos/"+nombreArchivo)
		.then(respuesta => respuesta.json())
		.then(data => {
			document.getElementById("divTextoArchivo").innerHTML = data.contenidoHTML;
		})
}

function crearArchivo () {
	
	const nombre = document.getElementById("nombreArchivoMd").value;
	const texto = document.getElementById("textoMd").value;
	const data = {nombre, texto}

	const solicitud = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringfy(data);
	}
	
	fetch ("/api/archivo")
}