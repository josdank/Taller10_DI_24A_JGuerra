function realizarCalculos() {
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const correo = document.getElementById("correo").value;
    const anoNacimiento = document.getElementById("anoNacimiento").value;
    const edad = document.getElementById("edad").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    if (!nombre || !apellidos || !correo || !anoNacimiento || !edad || !peso || !altura) {
        alert("Por favor, ingrese todos los campos.");
        return;
    }
    
    const anoNacimientoInt = parseInt(anoNacimiento);
    const currentYear = new Date().getFullYear();
    const calculadaEdad = currentYear - anoNacimientoInt;
    const esMayorDeEdad = calculadaEdad >= 18 ? "Mayor de edad" : "Menor de edad";
    const esParImpar = anoNacimientoInt % 2 === 0 ? "par" : "impar";
    
    const alturaMetros = altura / 100;
    const imc = (peso / (alturaMetros * alturaMetros)).toFixed(2);

    document.getElementById("Nombre").innerHTML = "<strong>Nombre:</strong><br> " + nombre;
    document.getElementById("Apellidos").innerHTML = "<strong>Apellidos:</strong><br> " + apellidos;
    document.getElementById("Correo").innerHTML = "<strong>Correo:</strong><br> " + correo;
    document.getElementById("ParImpar").innerHTML = "<strong>Año de Nacimiento:</strong><br> " + anoNacimiento + " (" + esParImpar + ")";
    document.getElementById("Edad").innerHTML = "<strong>Edad Calculada:</strong> " + calculadaEdad;
    document.getElementById("MayorMenor").innerHTML = "<strong>Condición:</strong> " + esMayorDeEdad;
    document.getElementById("IMC").innerHTML = "<strong>IMC:</strong> " + imc;

}