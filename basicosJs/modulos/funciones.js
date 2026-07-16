
function formatearPrecio(precio) {
  return "$" + precio.toLocaleString("es-CO");
}

function validarEmail(email) {
  return email.includes("@") && email.includes(".");
}

function calcularDescuento(precio, porcentaje) {
  return precio - (precio * porcentaje / 100);
}

module.exports = { formatearPrecio, validarEmail, calcularDescuento}