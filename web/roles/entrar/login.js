
var conductores = "../templates/conductor+/conductor.html";
var secretarias = "../templates/secretaria/secretaria.html";
var contabilidades = "../templates/contabilidad/contabilidad.html";
var despachadores = "../templates/despachador/despachador.html"
var ingenieros = "../templates/ingeniero/ingeniero.html";
var gerentes = "../templates/gerente/gerente.html";
var admin = "../templates/administrador/admin.html";


function login(){

	var usuarios = "admin";
	var contrasena = "12";
	var nombre = document.getElementById("usuario").value;
	var contrasenna = document.getElementById("contrasenna").value;
	if(nombre===usuarios && contrasena===contrasenna){		
		alert(location.href=admin);
	}
	
	var conductorUsuario = "conductor";
	var conductorContrasenna = "123";
	var nombre = document.getElementById("usuario").value;
	var contrasenna = document.getElementById("contrasenna").value;
	if(nombre == conductorUsuario && contrasenna == conductorContrasenna){
		alert(location.href=conductores);
	}

	var despachadorUsuario = "despachador";
	var despachadorContrasenna = "1234";
	var nombre = document.getElementById("usuario").value;
	var contrasenna = document.getElementById("contrasenna").value;
	if(nombre == despachadorUsuario && contrasenna == despachadorContrasenna){
		alert(location.href=despachadores);
	}

	var secretariaUsuario = "secretaria";
	var secretariaContrasenna = "12345";
	var nombre = document.getElementById("usuario").value;
	var contrasenna = document.getElementById("contrasenna").value;
	if(nombre == secretariaUsuario && contrasenna == secretariaContrasenna){
		alert(location.href=secretarias);
	}

	var contabilidadUsuario = "contabilidad";
	var contabilidadContrasenna = "123456";
	var nombre = document.getElementById("usuario").value;
	var contrasenna = document.getElementById("contrasenna").value;
	if(nombre == contabilidadUsuario && contrasenna == contabilidadContrasenna){
		alert(location.href= contabilidades);

	}

	var ingenieroUsuario = "ingeniero";
	var ingenieroContrasenna = "1234567";
	var nombre = document.getElementById("usuario").value;
	var contrasenna = document.getElementById("contrasenna").value;
	if(nombre == ingenieroUsuario && contrasenna == ingenieroContrasenna){
		alert(location.href= ingenieros);

	}

	var gerenteUsuario = "gerente";
	var gerenteContrasenna = "12345678";
	var nombre = document.getElementById("usuario").value;
	var contrasenna = document.getElementById("contrasenna").value;
	if(nombre == gerenteUsuario && contrasenna == gerenteContrasenna){
		alert(location.href= gerentes);

	}

	else{
		alert("Clave incorrecta");
	
	}
}
