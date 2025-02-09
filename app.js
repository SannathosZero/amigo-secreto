// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array donde se almacenarán los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombreInput = document.getElementById("amigo");
    const nombre = nombreInput.value.trim();

    // Verifica que el nombre no esté vacío y que no se repita
    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        nombreInput.value = '';  // Limpiar el campo de texto
    } else {
        alert('Por favor, ingrese un nombre válido o uno que no esté duplicado.');
    }
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = '';  // Limpiar la lista antes de actualizarla

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}
// Función para realizar el sorteo del amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe haber al menos 2 personas para hacer el sorteo.');
        return;
    }

    // Realizamos una copia del array de amigos para evitar modificar el original
    const amigosSorteados = [...amigos];

    // Array para guardar las asignaciones de amigos secretos
    const asignaciones = [];

    // Crear una asignación de amigo secreto para cada persona
    for (let i = 0; i < amigos.length; i++) {
        // Asegurarse de que no se asigne a alguien como su propio amigo secreto
        let asignado = amigosSorteados.splice(Math.floor(Math.random() * amigosSorteados.length), 1)[0];

        // Si la persona es su propio amigo secreto, lo reintentamos
        while (asignaciones[i] && asignaciones[i].includes(asignado)) {
            asignado = amigosSorteados.splice(Math.floor(Math.random() * amigosSorteados.length), 1)[0];
        }

        asignaciones.push({ amigo: amigos[i], amigoSecreto: asignado });
    }

    // Mostramos los resultados en la interfaz
    mostrarResultado(asignaciones);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(asignaciones) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = '';  // Limpiar la lista de resultados

    asignaciones.forEach(({ amigo, amigoSecreto }) => {
        const li = document.createElement('li');
        li.textContent = `${amigo} es el amigo secreto de ${amigoSecreto}`;
        resultadoLista.appendChild(li);
    });
}