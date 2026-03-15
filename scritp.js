let username = getUserInput("What is your name?"); // COMENTA esta linea cuando empieces a programar.


// ------------------- Función para pedir datos al usuario ----------------------
// Esta función se encarga de obtener la entrada del usuario a través de la consola.
// Toma una pregunta como argumento, la muestra al usuario y espera su respuesta.
// Una vez que el usuario ingresa su respuesta, la función devuelve esa respuesta como una cadena de texto.
function getUserInput(question) {
    return prompt(question);
}

//-------------------- Fin del código Espacio Educa ----------------------

// Recuerda que debes seguir las instrucciones del proyecto para completar el juego.
// Y no borres el código que ya está escrito, ya que es necesario para el funcionamiento del juego.
// Solo comenta las líneas indicadas más arriba.

// Get ur coffee and Empieza a codear!!

// Lista de palabras para el juego
const palabras = ['javascript', 'programacion', 'ahorcado', 'computadora', 'desarrollo', 'algoritmo'];

// Función para elegir una palabra aleatoria
function elegirPalabra() {
    return palabras[Math.floor(Math.random() * palabras.length)];
}

// Función para mostrar el estado actual de la palabra
function mostrarPalabra(palabra, letrasAdivinadas) {
    return palabra.split('').map(letra => letrasAdivinadas.includes(letra) ? letra : '_').join(' ');
}

// Declara las variables que necesitas para el juego antes de llamar a la función startGame.

// Luego llama a la función startGame para iniciar el juego.

startGame();

function startGame(){
    // Aquí va la lógica principal del juego.
    console.log("¡Bienvenido al juego del Ahorcado!");
    console.log("Adivina la palabra letra por letra. Tienes 6 intentos.");

    const palabraSecreta = elegirPalabra();
    const letrasAdivinadas = [];
    let intentos = 0;
    const maxIntentos = 6;

    while (intentos < maxIntentos) {
        console.log("Palabra: " + mostrarPalabra(palabraSecreta, letrasAdivinadas));
        console.log("Letras usadas: " + letrasAdivinadas.join(', '));

        const letra = getUserInput("Ingresa una letra:").toLowerCase();

        if (!letra) {
            console.log("Entrada cancelada. Fin del juego.");
            return;
        }

        if (letra.length !== 1 || !/[a-z]/.test(letra)) {
            console.log("Por favor, ingresa una sola letra válida.");
            continue;
        }

        if (letrasAdivinadas.includes(letra)) {
            console.log("Ya has usado esa letra.");
            continue;
        }

        letrasAdivinadas.push(letra);

        if (palabraSecreta.includes(letra)) {
            console.log("¡Bien! La letra está en la palabra.");
        } else {
            console.log("¡Incorrecto! Pierdes un intento.");
            intentos++;
        }

        // Verificar si ganó
        const palabraMostrada = mostrarPalabra(palabraSecreta, letrasAdivinadas).replace(/\s/g, '');
        if (palabraMostrada === palabraSecreta) {
            console.log("¡Felicidades! Has adivinado la palabra: " + palabraSecreta);
            return;
        }
    }

    if (intentos === maxIntentos) {
        console.log("¡Has perdido! La palabra era: " + palabraSecreta);
    }
    // No hay rl.close() en navegador, pero mantengo la estructura.
}
