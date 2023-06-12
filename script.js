window.addEventListener('DOMContentLoaded', function() {
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