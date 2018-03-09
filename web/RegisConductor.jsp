

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Formulario</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    </head>
    
    <body>
        <div class="container">
            <center><h1>Formulario de Registro!</h1></center>
        <form action="#" method="GET">
            <div class="form-group col-sm-6">
            <label for="id">Id:</label>
            <input type="text" id="id" name="id" placeholder="ingrese el Id" class="form-control"/><br>
            </div>
            <div class="form-group col-sm-6">
            <label for="cedula">Cedula:</label>
            <input type="text" id="cedula" name="cedula" placeholder="Cedula" class="form-control"/><br>
            </div>
            <div class="form-group col-sm-6">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Ingrese el Nombre" class="form-control"/><br>
            </div>
            <div class="form-group col-sm-6">
            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" placeholder="Ingrese el Apellido" class="form-control"/><br>
            </div>
            <div class="form-group col-sm-6">
            <label for="telefono">Telefono:</label>
            <input type="text" id="telefono" name="telefono" placeholder="Ingrese el numero de Telefono" class="form-control"/><br>
            </div>
            <div class="form-group col-sm-6">
            <label for="celular">Celular:</label>
            <input type="text" id="celular" name="celular" placeholder="Ingrese el numero de Celular" class="form-control"/><br>
            </div>
            <div class="form-group col-sm-6">
            <label for="direccion">Direccion:</label>
            <input type="text" id="direccion" name="direccion" placeholder="Ingrese la Direccion" class="form-control"/><br>
            </div>
            <div class="form-group col-sm-6">
            <label for="vehiculo">Vehiculo:</label>
            <input type="text" id="vehiculo" name="vehiculo" placeholder="Ingrese el Vehiculo" class="form-control"/><br>
            </div>
            <div class="form-group col-sm-6">
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" placeholder="Ingrese el Email" class="form-control"/><br>
            </div>
            
            <br>
            <div class="form-group col-sm-6">
            <input type="submit" value="Insertar" class="btn btn-primary" />  
            </div>
        </form>
        </div>
    </body>
</html>
