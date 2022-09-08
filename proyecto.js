//Calculadora de IMC

let pesoUsuario
let esturaUsuario
let imcUsuario
let salir
do {
    nombre();
    function nombre(){
    let nombreCliente=  prompt ("Coloque su nombre: ")
        alert ("Hola señor " + nombreCliente);
    }
pesoUsuario = parseFloat (prompt ("¿Cual es tu peso en KG?"));
peso();
function peso() {
let edad= prompt ("Coloque su edad: ")

}

    esturaUsuario = parseFloat ( prompt ("¿Cual es tu estatura en metros cuadrados?"));
imcUsuario = pesoUsuario / (esturaUsuario * esturaUsuario);
alert ("Tu IMC es "+imcUsuario);
if (imcUsuario < 18.5) {
    alert ("Tu peso es delgado, deberás subir de peso.");

}

else if ((imcUsuario >= 18.5)  && (imcUsuario <= 24.99) ) {
    alert ("Tu peso es normal, mantente así.");
}
else if ((imcUsuario >= 25) && (imcUsuario < 30)) {
    alert ("Estás en sobrepeso, deberás bajar de peso.");
}
else if (imcUsuario >= 30) {
    alert ("Estás en estado de obesidad, debes bajar tu peso, ve al medico!");
}
salir = prompt ("Si deseas calcular otro IMC usa s, si deseas salir usa n");
} while (salir != "n")

