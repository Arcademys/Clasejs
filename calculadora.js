// Array para almacenar el historial de operaciones
let historial = [];

// Función para realizar la suma
function sumar(a, b) {
  return a + b;
}

// Función para realizar la resta
function restar(a, b) {
  return a - b;
}

// Función para realizar la multiplicación
function multiplicar(a, b) {
  return a * b;
}

// Función para realizar la división
function dividir(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Error: No se puede dividir entre cero.";
  }
}

// Función para agregar una operación al historial
function agregarAlHistorial(operacion, numero1, numero2, resultado) {
  historial.push(`${operacion}: ${numero1} y ${numero2} = ${resultado}`);
}

// Función para mostrar el historial de operaciones
function mostrarHistorial() {
  if (historial.length === 0) {
    console.log("No se han realizado operaciones.");
  } else {
    console.log("Historial de operaciones:");
    for (let i = 0; i < historial.length; i++) {
      console.log(historial[i]);
    }
  }
}

// Función principal para ejecutar la calculadora
function ejecutarCalculadora() {
  let continuarCalculando = true;

  while (continuarCalculando) {
    let operacion = prompt("Seleccione una operación:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División");

    if (operacion === null) {
      continuarCalculando = false;
    } else {
      let numero1 = parseFloat(prompt("Ingrese el primer número:"));
      let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

      let resultado;

      switch (operacion) {
        case "1":
          resultado = sumar(numero1, numero2);
          agregarAlHistorial("Suma", numero1, numero2, resultado);
          break;
        case "2":
          resultado = restar(numero1, numero2);
          agregarAlHistorial("Resta", numero1, numero2, resultado);
          break;
        case "3":
          resultado = multiplicar(numero1, numero2);
          agregarAlHistorial("Multiplicación", numero1, numero2, resultado);
          break;
        case "4":
          resultado = dividir(numero1, numero2);
          agregarAlHistorial("División", numero1, numero2, resultado);
          break;
        default:
          resultado = "Error: Operación no válida.";
      }

      alert("El resultado es: " + resultado);

      continuarCalculando = confirm("¿Desea realizar otra operación?");
    }
  }

  mostrarHistorial();
  alert("Gracias por usar la calculadora. ¡Hasta luego!");
}

// Llamada a la función principal para iniciar la calculadora
ejecutarCalculadora();