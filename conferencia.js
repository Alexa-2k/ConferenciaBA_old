var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var correo = document.getElementById("correo");
var cantidad = document.getElementById("input-cantidad");
var categ = document.getElementById("input-categoria");

const precio = 200;

function borrarData() {
    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    cantidad.value = "";
    categ.value = "";
    document.getElementById("calculado").textContent = "Total a pagar: $ ";
}

function dataInput() {
    calculaTotal();
    validateEmail()
}

function calculaTotal() {
    let cant = Math.trunc(cantidad.value);
    console.log(cant);
    cantidad.value = "";
    cantidad.value = cant;
    let cat = categ.value;
    let descuento= (cant * cat);
    let precioFinal = (precio * descuento).toFixed(2);
    let textoTotal = document.getElementById("calculado").textContent = "Total a pagar: $ " + precioFinal;    
}

function validateEmail() {
   console.log(correo.value);
   
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo.value))
  {
    return (true)
  }
    correo.value = "";
    alert("Dirección de e-mail inválida");
        
    return (false)
}
