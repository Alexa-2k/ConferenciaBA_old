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
        // borrarData();
        cantidad.value = "";
      }

     calcTotal();
 
     verifMail = true ;
     verifNomb = true;
     verifApell = true;
    
}

function calcTotal() {
    correo.style.outline="1px solid #e4eaf5";
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
        correo.value = ""
        // correo.style.outline="4px solid #fa7373";
        alertaMail();
        verifMail = false;   
}}

function validateData () {
    if ((nombre.value == "") ||(apellido.value == "" )) {
        // alert ("Nombre y apellido son datos requeridos");
       alertaNombre();
        verifNomb = false;
        verifApell = false;  
    }  
}

function noAlertaMail() {
    console.log("NO alerta mail");
    document.getElementById("alerta-email").style.display = 'none';
    document.getElementById("venta").style.display = 'block';
    console.log("NO alerta mail");
    
}

function alertaMail() {
    console.log("alerta mail");
    document.getElementById("alerta-email").style.display = 'block';
    document.getElementById("venta").style.display = 'none';
    console.log("alerta mail");
}

function alertaNombre() {
    console.log("alerta nombre");
    document.getElementById("alerta-nombre").style.display = 'block';
    document.getElementById("venta").style.display = 'none';
    console.log("alerta nombre");
}

function noAlertaNombre () {
    console.log("NO alerta nombre");
    document.getElementById("alerta-nombre").style.display = 'none';
    document.getElementById("venta").style.display = 'block';
    console.log("NO alerta nombre");
}