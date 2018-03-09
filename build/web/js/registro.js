
function registrar(){

	var nombres = document.getElementById("usuario").value;	
	var cedulas =document.getElementById("cedula").value;
	var celulares =document.getElementById("celular").value;
	var correos = document.getElementById("correo").value;
	var direccions = document.getElementById("direccion").value;
	var contrasennas = document.getElementById("contrasenna").value;
	var confirmarContrasennas = document.getElementById("confirmarContrasenna").value;



	var nombreCrea = document.createElement("td");
	var cedulaCrea = document.createElement("td");
	var celularCrea = document.createElement("td");
	var correoCrea = document.createElement("td");
	var direccionCrea = document.createElement("td");
	var contenedor = document.createElement("tr");

	
	
	contenedor.appendChild(nombreCrea);
	contenedor.appendChild(cedulaCrea);
	contenedor.appendChild(celularCrea);
	contenedor.appendChild(correoCrea);
	contenedor.appendChild(direccionCrea);

	
	nombreCrea.innerHTML = nombres;
	cedulaCrea.innerHTML= cedulas;
	celularCrea.innerHTML= cedulares;
	correoCrea.innerHTML = correos;
	direccion.innerHTML = direccions;


	document.getElementById("usuarios").appendChild(contenedor)

	
	
	
	


}