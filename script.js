function sumar() {
    let a = parseInt(document.getElementById("valor1").value);
    let b = parseInt(document.getElementById("valor2").value);
    let resultado = a + b;
    document.getElementById("resultado").innerHTML = "resultado: " + resultado;

}

function restar() {
    let a = parseInt(document.getElementById("valor1").value);
    let b = parseInt(document.getElementById("valor2").value);
    let resultado = a - b;
    document.getElementById("resultado").innerHTML = "resultado: " + resultado;

}


function multiplicar() {
    let a = parseInt(document.getElementById("valor1").value);
    let b = parseInt(document.getElementById("valor2").value);
    let resultado = a * b;
    document.getElementById("resultado").innerHTML = "resultado: " + resultado;

}

function dividir() {
    let a = parseInt(document.getElementById("valor1").value);
    let b = parseInt(document.getElementById("valor2").value);
    let resultado = a / b;
    document.getElementById("resultado").innerHTML = "resultado: " + resultado;

}