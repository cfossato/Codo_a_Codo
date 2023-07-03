


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
document.addEventListener('DOMContentLoaded', function() {
 
    let divResultado = document.getElementById("total");
    let resetButton= document.getElementById("reset")
    resetButton.addEventListener("click", () => {
       
        
        divResultado.textContent = "Total a pagar $";
    })
    let submitButton= document.getElementById("submit")
    submitButton.addEventListener("click", (e) => {
        e.preventDefault()
        
        const cantidad = document.getElementById("cantidad");
        const categoria = document.getElementById("categoria");
        divResultado.textContent = "Total a pagar $ " + calcularTotal(cantidad.value, categoria.value)
 
     })
});






