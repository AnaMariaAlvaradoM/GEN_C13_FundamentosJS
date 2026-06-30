for (let i = 1; i <= 3; i++) {
  console.log("Empacando producto #" + i);
  console.log(i);
}

let carrito = ["Arroz", "Pollo", "Gaseosa"];

for (let i = 0; i < carrito.length; i++) {
  console.log("Producto: " + carrito[i]);
}


let carrito = [
  { nombre: "Arroz", precio: 8000 },
  { nombre: "Pollo", precio: 25000 },
  { nombre: "Gaseosa", precio: 6000 }
];

for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].precio > 20000) {
    console.log(carrito[i].nombre + " tiene 5% de descuento 💰");
  } else {
    console.log(carrito[i].nombre + " no tiene descuento ✅");
  }
}