const Usuario = require("./usuario.js");
const Producto = require("./producto.js").default;
const { formatearPrecio, validarEmail } = require("./funciones.js").default;

let u1      = new Usuario("Pepita", "ana@email.com");
let p1      = new Producto("Teclado", 250000);

console.log(u1.saludo());
console.log(formatearPrecio(p1.calcularTotal()));