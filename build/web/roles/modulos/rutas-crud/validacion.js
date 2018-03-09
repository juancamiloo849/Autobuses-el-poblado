var placas = document.getElementById("placa");

email.addEventListener("keyup", function (event) {
  if (placas.validity.typeMismatch) {
    placas.setCustomValidity("¡Yo esperaba una PLACA de vehículo, cariño!");
  } else {
    placas.setCustomValidity("");
  }
});
