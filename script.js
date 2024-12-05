// Definir las cantidades de mesas y precios
let mesas750 = 6;
let mesas850 = 17;
let mesas950 = 7;
let otrosMontos = [450,1700,650,450,1400,450,1400,650,,1400,1165,450,,450,450];

// Precios por mesa
let precio750 = 750;
let precio850 = 850;
let precio950 = 950;

// Calcular totales
let total750 = mesas750 * precio750;
let total850 = mesas850 * precio850;
let total950 = mesas950 * precio950;
let totalOtrosMontos = otrosMontos.reduce((acc, monto) => acc + monto, 0);

// Calcular el total general
let totalGeneral = total750 + total850 + total950 + totalOtrosMontos;

// Actualizar los valores en el HTML
document.getElementById("mesa750").innerText = "Son: " + mesas750;
document.getElementById("mesa850").innerText = "Son: " + mesas850;
document.getElementById("mesa950").innerText = "Son: " + mesas950;
document.getElementById("mesa850c").innerText = "Son: " + otrosMontos.length;

document.getElementById("total750").innerText = "Total: " + total750 + " Bs";
document.getElementById("total850").innerText = "Total: " + total850 + " Bs";
document.getElementById("total950").innerText = "Total: " + total950 + " Bs";
document.getElementById("total850c").innerText = "Total: " + totalOtrosMontos + " Bs";
document.getElementById("totalGeneral").innerText = "Total General: " + totalGeneral + " Bs";

// Definir las comisiones y otros gastos con sus nombres
let comisionesDetalle = [
    { nombre: "adrian cespedes", monto: 70 },
    { nombre: "leonardo capdepont", monto: 70 },
    { nombre: "nataly garcia", monto: 70 },
    { nombre: "santiago blancourt", monto:100 },
    { nombre: "alexia rodriguez", monto: 300 },
    { nombre: "nicolai cardenas", monto: 100 },
    { nombre: "nicolai cardenas", monto: 100 },
    { nombre: "gabriela zambrano", monto: 200 },
    { nombre: "camila zabala", monto: 200 },
    { nombre: "jhusara rivera ", monto: 50 }
]; 

let otrosGastosDetalle = [
    { nombre: "tarjeta de credito libelula jet club", monto: 300 },
    { nombre: "tarjeta de credito libelula jet club", monto: 100 },
    { nombre: "michael aaron rios co2 chispas", monto: 1000},
    { nombre: "gabriel delgado pantallas", monto: 440 },
    { nombre: "rios aaron pago dj 23", monto: 600 },
    { nombre: "capuma cristhin vj y diseños", monto: 3000 },
    { nombre: "roberto tejerina pedidos", monto: 16000 }
];

// Calcular los totales de comisiones y otros gastos
let totalComisiones = comisionesDetalle.reduce((acc, gasto) => acc + gasto.monto, 0);
let totalOtrosGastos = otrosGastosDetalle.reduce((acc, gasto) => acc + gasto.monto, 0);
let gastoTotal = totalComisiones + totalOtrosGastos;

// Función para actualizar los detalles en la tarjeta de gastos
function actualizarDetallesGastos() {
    const comisionesLista = document.getElementById("comisionesDetalle");
    const otrosGastosLista = document.getElementById("otrosGastosDetalle");

    // Llenar detalles de comisiones con formato solicitado
    comisionesLista.innerHTML = comisionesDetalle.map(item => `<li>${item.nombre}: -${item.monto} Bs</li>`).join("");

    // Llenar detalles de otros gastos con formato solicitado
    otrosGastosLista.innerHTML = otrosGastosDetalle.map(item => `<li>${item.nombre}: -${item.monto} Bs</li>`).join("");
}

// Llamar a la función para llenar los detalles cuando la página se cargue
actualizarDetallesGastos();

// Actualizar los totales en la tarjeta
document.getElementById("gastoComision").innerText = "Comisiones: -" + totalComisiones + " Bs";
document.getElementById("gastoOtros").innerText = "Otros Gastos: -" + totalOtrosGastos + " Bs";
document.getElementById("gastoTotal").innerText = "Gasto Total: -" + gastoTotal + " Bs";

// Función para alternar la expansión de la tarjeta
document.getElementById("gastoCard").addEventListener("click", function() {
    this.classList.toggle("expanded");
});

