$(function () {
  var operation = "C";
  var selected_index = -1;
  var tblPersons = localStorage.getItem("tblPersons");
  tblPersons = JSON.parse(tblPersons);
  if (tblPersons === null)
      tblPersons = [];

  function Create() {

    var person = JSON.stringify({

			ID: $("#txtID").val(),
      Name: $("#txtName").val(),
			Apellido:$("#txtApellido").val(),
			Cedula:$("#txtCedula").val(),
      Phone: $("#txtPhone").val(),
      Email: $("#txtEmail").val(),
			Labor: $("#txtLabor").val()
    });

    tblPersons.push(person);

    localStorage.setItem("tblPersons", JSON.stringify(tblPersons));
    alert("Los datos han sido almacenados");
    return true;
  }

  function Edit() {

    tblPersons[selected_index] = JSON.stringify({

				Name: $("#txtName").val(),
				Apellido:$("#txtApellido").val(),
				Cedula:$("#txtCedula").val(),
	      Phone: $("#txtPhone").val(),
	      Email: $("#txtEmail").val(),
				Labor: $("#txtLabor").val()
    });

    localStorage.setItem("tblPersons", JSON.stringify(tblPersons));
    alert("Los datos han sido editados");
    return true;
  }

  function Delete() {

    tblPersons.splice(selected_index, 1);

    localStorage.setItem("tblPersons", JSON.stringify(tblPersons));
    alert("Persona Eliminada");
  }


  function List() {
		var i = 1;
    $("#tblList").html(
            "<thead>" +
            "<tr>" +
						"<th>ID</th>" +
            "<th>Nombre</th>" +
						"<th>Apellido</th>" +
						"<th>Cedula</th>" +
            "<th>Teléfono</th>" +
            "<th>Email</th>" +
						"<th>Labor</th>" +
            
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            "</tbody>"
            );
    for ( i  in tblPersons) {
        var per = JSON.parse(tblPersons[i]);
        $("#tblList tbody").append("<tr>" +
                "<td>" + i + "</td>" +
                "<td>" + per.Name + "</td>" +
								"<td>" + per.Apellido +"</td>"+
								"<td>" + per.Cedula +"</td>" +
                "<td>" + per.Phone + "</td>" +
                "<td>" + per.Email + "</td>" +
								"<td>" + per.Labor +"</td>" +

                "</tr>"
                );
    }
  }

  $("#frmPerson").bind("submit", function () {
    if (operation === "C")
        return Create();
    else
        return Edit();
  });

  List();

  $(".btnEdit").bind("click", function () {
    operation = "E";

    selected_index = parseInt($(this).attr("alt").replace("Edit", ""));

    var per = JSON.parse(tblPersons[selected_index]);
		$("#txtID").val(per.ID);
    $("#txtName").val(per.Name);
		$("#txtApellido").val(per.Apellido);
		$("#txtCedula").val(per.Cedula);
    $("#txtPhone").val(per.Phone);
    $("#txtEmail").val(per.Email);
		$("#txtLabor").val(per.Labor);

    $("#txtID").attr("readonly", "readonly");
    $("#txtName").focus();
  });

  $(".btnDelete").bind("click", function () {
    selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
    Delete();
  });
});

document.getElementById("#ocultar").style.display = 'none';
