console.log("app.js está conectado correctamente.");

alert("Bienvenida y bienvenido a Un Mundo Distinto.");

let intereses = 0;

const contador = document.getElementById("contador");
const botonNebula = document.getElementById("btn-nebula");
const botonRuidos = document.getElementById("btn-ruidos");
const botonVela = document.getElementById("btn-vela");

botonNebula.addEventListener("click", function () {
    intereses = intereses + 1;
    contador.textContent = intereses;
    console.log("Interés registrado en Nébula Cardinal. Total:", intereses);
});

botonRuidos.addEventListener("click", function () {
    intereses = intereses + 1;
    contador.textContent = intereses;
    console.log("Interés registrado en Los Ruidos del Sur. Total:", intereses);
});

botonVela.addEventListener("click", function () {
    intereses = intereses + 1;
    contador.textContent = intereses;
    console.log("Interés registrado en Vela Corriente. Total:", intereses);
});