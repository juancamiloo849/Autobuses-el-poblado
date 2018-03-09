$(function(){
  $('#enviar').click(function(){
      $('#ventana').load("secretaria.html");
  })

})

function enviar(){
	$('#index').load("roles/entrar/login.html");
}

$(document).on('click',function(){
	$('#index').load("roles/entrar/login.html");
})