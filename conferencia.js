var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var correo = document.getElementById("correo");
var cantidad = document.getElementById("input-cantidad");
var categ = document.getElementById("input-categoria");
var verifMail = true;
var verifNomb = true;
var verifApell = true;
const precio = 200;

function borrarData() {
    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    cantidad.value = "0";
    categ.value = "";
    document.getElementById("calculado").textContent = "Total a pagar:  $  ";
    correo.style.outline="1px solid #e4eaf5";
}

function dataInput() {
    validateData();
    validateEmail();
    if ((verifMail == false) || (verifNomb == false) || (verifApell == false)) {
        cantidad.value = "";
      }

     calcTotal();
 
     verifMail = true ;
     verifNomb = true;
     verifApell = true;
    
}

function calcTotal() {
    let cant = Math.abs(Math.trunc(cantidad.value));
    cantidad.value = "";
    cantidad.value = cant;
    let cat = categ.value;
    let descuento= (cant * cat);
    let precioFinal = (precio * descuento).toFixed(2);
    let textoTotal = document.getElementById("calculado").textContent = "Total a pagar: $ " + precioFinal;    
}

function validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo.value)){
        verifMail = true;   
    } else {
        correo.value = ""
        alertaMail();
        verifMail = false;   
}}

function validateData () {
    if ((nombre.value == "") ||(apellido.value == "" )) {
        alertaNombre();
        verifNomb = false;
        verifApell = false;  
    }  
}

function noAlertaMail() { 
    document.getElementById("alerta-email").style.display = 'none';
}

function alertaMail() {
    document.getElementById("alerta-email").style.display = 'block';
}

function alertaNombre() {
    document.getElementById("alerta-nombre").style.display = 'block';
}

function noAlertaNombre () {
    document.getElementById("alerta-nombre").style.display = 'none';
}
