// --- Modal de la carta ---
const modalNote = document.getElementById('modal-note');
const btnSurprise = document.getElementById('btn-surprise');
const closeNote = modalNote.querySelector('.close');

// Variables de validación (modifica estos valores con los correctos)
const correctName = 'Rocío';  // Cambia esto por el nombre correcto
const correctDate = '2023-11-03';  // Cambia esto por la fecha correcta (en formato yyyy-mm-dd)

// Función para mostrar el modal de la carta si las respuestas son correctas
function checkAnswers() {
    const name = prompt("¿Cómo te llamas? (tu nombre en minusculas)");
    const date = prompt("¿En qué fecha empezamos a salir? (Formato: dd/mm/yy)");

    if (name === "rocio" && date === "19/08/24") {
        modalNote.style.display = 'flex';  // Mostrar el modal de la carta si las respuestas son correctas
    } else {
        alert("¡Respuestas incorrectas! Inténtalo de nuevo.");  // Mensaje si las respuestas son incorrectas
    }
}

// Abrir el modal de la carta al hacer clic en el botón de sorpresa
btnSurprise.addEventListener('click', () => {
    checkAnswers();  // Llamar a la función para verificar las respuestas
});

// Cerrar el modal de la carta
closeNote.addEventListener('click', () => {
    modalNote.style.display = 'none';
});

// Cerrar el modal de la carta si se hace clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target === modalNote) {
        modalNote.style.display = 'none';
    }
});

// --- Modal para las fotos ---
const photos = document.querySelectorAll('.photos img');
const modal = document.getElementById('photoModal');
const modalImage = document.getElementById('modalImage');
const modalText = document.getElementById('modalText');
const closeButton = modal.querySelector('.close');

// Abrir el modal al hacer clic en una foto
photos.forEach(photo => {
    photo.addEventListener('click', () => {
        modal.style.display = 'flex'; // Mostrar modal
        modalImage.src = photo.src; // Asignar la imagen al modal
        modalText.textContent = 'Te quiero Rocío'; // Texto del modal
    });
});

// Cerrar el modal al hacer clic en la 'X'
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
