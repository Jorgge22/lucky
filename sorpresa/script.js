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

// --- Contador de días, horas, minutos y segundos hasta el 19 de diciembre ---
const counterElement = document.getElementById('counter');  // Referencia al contenedor donde se mostrará el contador

// Función para calcular el tiempo restante
function updateCounter() {
    const today = new Date();  // Fecha actual
    const targetDate = new Date('2024-12-19T00:00:00');  // Fecha objetivo: 19 de diciembre de 2024 a las 00:00:00
    const timeDifference = targetDate - today;  // Diferencia en milisegundos

    // Calcular los días, horas, minutos y segundos restantes
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Mostrar el tiempo restante de manera bonita
    counterElement.innerHTML = `
        <div class="counter-time">
            <span class="counter-number">${days}</span> días
        </div>
        <div class="counter-time">
            <span class="counter-number">${hours}</span> horas
        </div>
        <div class="counter-time">
            <span class="counter-number">${minutes}</span> minutos
        </div>
        <div class="counter-time">
            <span class="counter-number">${seconds}</span> segundos
        </div>
    `;
}

// Actualizar el contador al cargar la página
updateCounter();

// Actualizar el contador cada segundo
setInterval(updateCounter, 1000);

