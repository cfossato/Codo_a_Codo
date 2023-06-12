

 function calcularTotal(cantidad, categoria) {
    let precioEntrada = 200;
    let estudiante = 0.2;
    let trainee = 0.5;
    let junior = 0.85;
    let total = 0;

    if (categoria === "estudiante") {
        total = cantidad * estudiante * precioEntrada;
    } else if (categoria === "trainee") {
        total = cantidad * trainee * precioEntrada;
    } else {
        total = cantidad * junior * precioEntrada;
    }

    return total;
}

let formulario = document.getElementById("form");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");
let divResultado = document.querySelector("resultado");

formulario.addEventListener("reset", () => {
    divResultado.textContent = "Total a pagar $";
});

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    divResultado.textContent = "Total a pagar $ " + calcularTotal(cantidad.value, categoria.value);
}); 

