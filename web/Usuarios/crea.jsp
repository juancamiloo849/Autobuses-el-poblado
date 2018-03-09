<!DOCTYPE html>
<html>
    <head>
        <title>Crear-rutas</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">
        
        <!-- Bootstrap core CSS-->
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">    
        <link href="../../../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">      
        <link href="vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet">     
        <link href="css/sb-admin.css" rel="stylesheet">
        <!--estilo-->
        <link rel="stylesheet" href="css/estilo.css">
        <link rel="stylesheet" type="text/css" href="css/vehiculo.css">

        <!-- Funciones Javascript -->
        <script type="text/javascript" src="registro.js"></script>
        <script type="text/javascript" src="validacion.js"></script>
        <link rel="stylesheet" href="../../../css/estilo.css">
        <link rel="stylesheet" type="text/css" href="../../../css/vehiculo.css">
    </head>

    <body>

        <div class="container">

            <form>
                <h1>VEHICULOS</h1>



                <div class="contentform">
                    <div class="leftcontact">
                        <div class="form-group">
                            <p>Placa<span>*</span></p>
                            <span class="icon-case"><i class="fa fa-bus"></i></span>
                            <input type="text" name="nom" id="placa" data-rule="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Nom' doit être renseigné." required/>
                            <div class="validation"></div>
                        </div>

                        <div class="form-group">
                            <p>Vinculado <span>*</span></p>
                            <span class="icon-case"><i class="fa fa-etsy"></i></span>
                            <input type="text" name="prenom" id="prenom" data-rule="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Prénom' doit être renseigné." required/>
                            <div class="validation"></div>
                        </div>

                        <div class="form-group">
                            <p>Propietario <span>*</span></p>
                            <span class="icon-case"><i class="fa fa-male"></i></span>
                            <input type="email" name="email" id="email" data-rule="email" data-msg="Vérifiez votre saisie sur les champs : Le champ 'E-mail' est obligatoire." required/>
                            <div class="validation"></div>
                        </div>

                        <div class="form-group">
                            <p>Tipo_documento <span>*</span></p>
                            <span class="icon-case"><i class="fa fa-id-card"></i></span>
                            <input type="text" name="society" id="society" data-rule="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Société' doit être renseigné." required/>
                            <div class="validation"></div>
                        </div>



                    </div>

                    <div class="rightcontact">

                        <div class="form-group">
                            <p>Marca <span>*</span></p>
                            <span class="icon-case"><i class="fa fa-bus"></i></span>
                            <input type="text" name="sujet" id="sujet" data-rule="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Sujet' doit être renseigné." required/>
                            <div class="validation"></div>
                        </div>

                        <div class="form-group">
                            <p>Modelo <span>*</span></p>
                            <span class="icon-case"><i class="fa fa-bus"></i></span>
                            <input type="text" name="sujet" id="sujet" data-rule="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Sujet' doit être renseigné." required/>
                            <div class="validation"></div>
                        </div>

                        <div class="form-group">
                            <p>Color <span>*</span></p>
                            <span class="icon-case"><i class="fa fa-bus"></i></span>
                            <input type="text" name="sujet" id="sujet" data-rule="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Sujet' doit être renseigné." required/>
                            <div class="validation"></div>
                        </div>

                        <div class="form-group">
                            <p>Conductor <span>*</span></p>
                            <span class="icon-case"><i class="fa fa-user-circle-o"></i></span>
                            <input type="text" name="adresse" id="adresse" data-rule="required" data-msg="Vérifiez votre saisie sur les champs : Le champ 'Adresse' doit être renseigné." required/>
                            <div class="validation"></div>
                        </div>



                    </div>
                </div>
                <button type="submit" class="bouton-contact">Send</button>

            </form>



    </body>
</html>
<!--
https://developer.mozilla.org/es/docs/Learn/HTML/Forms/Validacion_formulario_datos  
-->
