
const bancoDePalabras = ["javascript","programacion","teclado","variable","funcion","bloodstrike","minecraft","terraris","arroz"];
let palabraSecreta, progresoPalabra, intentosRestantes, letrasIngresadas;


function seleccionarPalabra() {
    const idx = Math.floor(Math.random() * bancoDePalabras.length);
    palabraSecreta = bancoDePalabras[idx];
}

function iniciarJuego() {
    seleccionarPalabra();        
    progresoPalabra = Array(palabraSecreta.length).fill("_");
    intentosRestantes = 6;
    letrasIngresadas = [];
    console.clear();
    console.log("¡Bienvenido al Ahorcado!");
    mostrarEstado();
}

function procesarLetra(letra) {
    if (!letra || letra.length>1 || !isNaN(letra)) {
        console.log("⚠️ Ingresa una sola letra válida.");
        return;
    }
    letra = letra.toLowerCase();
    if (intentosRestantes <= 0 || !progresoPalabra.includes("_")) {
        console.log("El juego terminó. inicia uno nuevo con iniciarJuego().");
        return;
    }
    if (letrasIngresadas.includes(letra)) {
        console.log("Ya probaste '" + letra + "'.");
        return;
    }
    letrasIngresadas.push(letra);
    if (palabraSecreta.includes(letra)) {
        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letra) progresoPalabra[i] = letra;
        }
        console.log("✅ ¡Letra correcta!");
    } else {
        intentosRestantes--;
        console.log("❌ Letra incorrecta.");
    }
    mostrarEstado();
    verificarFinDelJuego();
}

function mostrarEstado() {
    console.log("Palabra: " + progresoPalabra.join(" "));
    console.log("Letras usadas: ["+letrasIngresadas.join(", ")+"]");
    console.log("Intentos: " + intentosRestantes);
    console.log("------------------------------");
}

function verificarFinDelJuego() {
    if (!progresoPalabra.includes("_")) {
        console.log("🎉 Ganaste. La palabra era " + palabraSecreta.toUpperCase());
    } else if (intentosRestantes === 0) {
        console.log("💀 Perdiste. Era " + palabraSecreta.toUpperCase());
    }
}

iniciarJuego()