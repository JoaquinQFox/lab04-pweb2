
document.addEventListener('DOMContentLoaded', cargarArchivos);
document.addEventListener('DOMContentLoaded', formularioVerificador);
document.addEventListener('submit', crearArchivo);

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

function listarArchivos (data) {
	
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
	
	const nombreArchivo = document.getElementById("nombreArchivoMd").value;
	const contenido     = document.getElementById("textoMd").value;
	const data          = {nombreArchivo, contenido}

	const solicitud = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data)
	}

	fetch ("/api/archivo", solicitud)
		.then(respuesta => respuesta.json())
		.then(data => {
			alert(JSON.stringify(data));
			cargarArchivos();
		})

	return false;
}