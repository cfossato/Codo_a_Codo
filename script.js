


/*window.addEventListener('DOMContentLoaded', function() {
    var cantidadInput = document.getElementById('exampleInputCantidad');
    var categoriaSelect = document.getElementById('exampleInputCategoria');
    var totalAPagarInput = document.getElementById('exampleInputTotalapagar');
    var borrarButton = document.getElementById('submitButton');
    var resumenButton = document.getElementById('summaryButton');
  
    borrarButton.addEventListener('click', function(event) {
      event.preventDefault();
      cantidadInput.value = '';
      categoriaSelect.value = 'Estudiantes';
      totalAPagarInput.value = '';
    });
  
    resumenButton.addEventListener('click', function(event) {
      event.preventDefault();
      var cantidad = parseInt(cantidadInput.value);
      var categoria = categoriaSelect.value;
      var descuento = 0;
  
      switch (categoria) {
        case 'Estudiantes':
          descuento = 0.8;
          break;
        case 'Trainee':
          descuento = 0.5;
          break;
        case 'Junior':
          descuento = 0.15;
          break;
        default:
          descuento = 0;
          break;
      }
  
      var totalAPagar = cantidad * 200 * (1 - descuento);
      totalAPagarInput.value = '$' + totalAPagar.toFixed(2);
    });
  });
*/

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

