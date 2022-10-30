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
    document.getElementById("calculado").textContent = "Total a pagar: $ ";
}

function dataInput() {
    validateData();
    validateEmail();
    if ((verifMail == false) || (verifNomb == false) || (verifApell == false)) {
        borrarData();
        cantidad.value = "";
     }

     calcTotal();
 
     verifMail = true ;
     verifNomb = true;
     verifApell = true;
}

function calcTotal() {
    let cant = Math.trunc(cantidad.value);
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
        correo.value = "";
        alert("Dirección de e-mail inválida");
        verifMail = false;   
}}

function validateData () {
    if ((nombre.value == "") ||(apellido.value == "" )) {
        alert ("Nombre y apellido son datos requeridos");
        verifNomb = false;
        verifApell = false;  
    }  
}