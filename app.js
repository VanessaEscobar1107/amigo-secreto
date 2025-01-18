//Lista para almacenar los nombres
let nombres = [];

// Funcion para agregar los nombres
function agregarNombre() {
    // Obtener el nombre ingresado
    let nombre = document.getElementById("nombre").value;

    // Validar que el campo no esté vacío
    if (nombre.trim() !== "") {
        // Agregar el nombre a la lista
        nombres.push(nombre);

        // Mostrar los nombres agregados en el HTML
        mostrarNombres();

        // Limpiar el campo de entrada
        document.getElementById("nombre").value = "";
    } else {
        // Si el campo está vacío, mostrar una alerta
        alert("Por favor, ingresa un nombre válido.");
    }
}

    
// Funcion para mostrar la lista de los nombres
function mostrarNombres(){
    // Seleccionar el contenedor donde se mostraran los nombres
    let lista = document.getElementById("listaNombres");
}

// Limpiar cualquier contenido previo
lista.innerHTML = "";

// Mostrar cada nombre en la lista
nombres.forEach(function(nombre) {
    let li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
});

// Funcion para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya nombres en la lista
    if (nombres.length > 0) {
        // Elegir un nombre al azar
        let amigoSecreto = nombres[Math.floor(Math.random() * nombres.length)];

        // Mostar el resultado
        document.getElementById("resultado").textContent = 'El amigo secreto es:' +amigoSecreto;
        } else {
            // Si no hay nombres, mostrar una alerta
            alert("Por favor, ingresar un nombre para sortear un amigo secreto");
        }
  
}
