
$(function(){
  $('#crud-crear-conductor').click(function(){
      $('#vistas-crud').load("../../modulos/conductor-crud/crear.html");
  })

})



function htmlbodyHeightUpdate(){
var height3 = $( window ).height()
var height1 = $('.nav').height()+50
height2 = $('.main').height()
if(height2 > height3){
  $('html').height(Math.max(height1,height3,height2)+10);
  $('body').height(Math.max(height1,height3,height2)+10);
}
else
{
  $('html').height(Math.max(height1,height3,height2));
  $('body').height(Math.max(height1,height3,height2));
}

}
$(document).ready(function () {
htmlbodyHeightUpdate()
$( window ).resize(function() {
  htmlbodyHeightUpdate()
});
$( window ).scroll(function() {
  height2 = $('.main').height()
    htmlbodyHeightUpdate()
});
});




function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}



/*
$(document).ready(function(){
  var ayudas = document.getElementById("#ayuda-ocultar");
    $("#ayuda").click(function(){

      if(ayudas.style.display == 'block'){
          ayudas.style.display = 'hide';
      }
      if(ayudas.style.display == 'none'){
        ayudas.style.display = 'show';
      }
    })
})

$('#ayuda').on('click', function(){
  $('#ayuda-ocultar').slideToggle('slow');
});

$("#nosotros").on('click', function(){
  $('#nosotros-ocultar').slideToggle('slow');
})
*/
$(document).ready(function(e){
  $("#conductor-crudEditar").on('click', function(){
    $("#vistas").attr('src','../../modulos/conductor-crud/crear.html');
  })
  $("#conductor-crudVer").on('click', function(){
    $("#vistas").attr('src','../../modulos/conductor-crud/ver.html');
  })
})



$('#ayuda-ocultar').hide();
$('#nosotros-ocultar').hide();
$('#vistas-crud-crear').hide();
$("#vistas-crud-ver").hide();
$("#vistas-crud-eliminar").hide();
$("#vistas-crud").hide();

$('#ayuda').click(function(){
  $('#ayuda-ocultar').show();
  $('#nosotros-ocultar').hide();
  $('#inicio-ocultar').hide();
  $('#vistas-crud-crear').hide();
  $("#vistas-crud-ver").hide();
  $("#vistas-crud-eliminar").hide();
  $("#vistas-crud").hide();
})

$("#nosotros").click(function(){
  $('#nosotros-ocultar').show();
  $('#ayuda-ocultar').hide();
  $('#inicio-ocultar').hide();
  $('#vistas-crud-crear').hide();
  $("#vistas-crud-ver").hide();
  $("#vistas-crud-eliminar").hide();
  $("#vistas-crud").hide();
})

$("#inicio").click(function(){
  $('#inicio-ocultar').show();
  $('#ayuda-ocultar').hide();
  $('#nosotros-ocultar').hide();
  $('#vistas-crud-crear').hide();
  $("#vistas-crud-ver").hide();
  $("#vistas-crud-eliminar").hide();
  $("#vistas-crud").hide();
})

$("#vistas-crudCrear").click(function(){
  $('#vistas-crud-crear').show();
  $('#inicio-ocultar').hide();
  $('#ayuda-ocultar').hide();
  $('#nosotros-ocultar').hide();
  $("#vistas-crud-ver").hide();
  $("#vistas-crud-eliminar").hide();
  $("#vistas-crud").hide();
})

$("#vistas-crudVer").click(function(){
  $("#vistas-crud-ver").show();
  $('#vistas-crud-crear').hide();
  $('#inicio-ocultar').hide();
  $('#ayuda-ocultar').hide();
  $('#nosotros-ocultar').hide();
  $("#vistas-crud-eliminar").hide();
  $("#vistas-crud").hide();
})

$("#vistas-crudEliminar").click(function(){
  $("#vistas-crud-eliminar").show();
  $("#vistas-crud-ver").hide();
  $('#vistas-crud-crear').hide();
  $('#inicio-ocultar').hide();
  $('#ayuda-ocultar').hide();
  $('#nosotros-ocultar').hide();
})

$("#conductor-crudEditar").click(function(){
  $("#vistas-crud").show();
  $("#vistas-crud-eliminar").hide();
  $("#vistas-crud-ver").hide();
  $('#vistas-crud-crear').hide();
  $('#inicio-ocultar').hide();
  $('#ayuda-ocultar').hide();
  $('#nosotros-ocultar').hide();
})



$("#intentar").click(function(){

  $('#ayuda-ocultar').toggle();
  $('#nosotros-ocultar').toggle();

});
