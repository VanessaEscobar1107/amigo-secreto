//Lista para almacenar los nombres
let nombres = [];

// Funcion para agregar los nombres
function agregarNombre() {
    const input  = document.getElementById('nombre');
    const nombre = input.ariaValueMax.trim();

    if (!nombre) {
        alert("Por fqavor ingresar un nombre valido");
        return;
    }
    if (nombre.includes(nombre)) {
        alert("Este nombre ya fue agregado");
        return;
    }
    
    nombre.push(nombre);
    input.value = '';

    actualizarLista();
}

// Funcion para mostrar la lista de los nombres
function actualizarLista() {
    const listaDiv = document.getElementById('listaNombres');
    listaDiv.innerHTML = `<h3>Lista de nombres:</h3> <ul>${nombres.map(n => `<li>${n}</li>`).join('')}</ul>`;   
}

// Funcion para sortear un amigo secreto
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay nombres en la lista para sortear");
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * nombres.length);
    const amigoSecreto = nombres[randomIndex];

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<h2>El amigo secreto es: ${amigoSecreto}</h2>`;
}
