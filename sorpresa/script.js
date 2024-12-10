// --- Modal de la carta ---
const modalNote = document.getElementById('modal-note');
const btnSurprise = document.getElementById('btn-surprise');
const closeNote = modalNote.querySelector('.close');

// Variables de validación (modifica estos valores con los correctos)
const correctName = 'rocio';  // Cambia esto por el nombre correcto
const correctDate = '19/08/24';  // Cambia esto por la fecha correcta (en formato dd/mm/yy)

// Función para mostrar el modal de la carta si las respuestas son correctas
function checkAnswers() {
    const name = prompt("¿Cómo te llamas? (tu nombre en minusculas)");
    const date = prompt("¿En qué fecha empezamos a salir? (Formato: dd/mm/yy)");

    if (name === correctName && date === correctDate) {
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
const photoModal = document.getElementById('photoModal');
const modalImage = document.getElementById('modalImage');
const modalText = document.getElementById('modalText');
const closePhotoModal = photoModal.querySelector('.close');

// Abrir el modal al hacer clic en una foto
photos.forEach(photo => {
    photo.addEventListener('click', () => {
        photoModal.style.display = 'flex'; // Mostrar modal
        modalImage.src = photo.src; // Asignar la imagen al modal
        modalText.textContent = 'Te quiero Rocío'; // Texto del modal
    });
});

// Cerrar el modal de fotos al hacer clic en la 'X'
closePhotoModal.addEventListener('click', () => {
    photoModal.style.display = 'none';
});

// Cerrar el modal de fotos si se hace clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === photoModal) {
        photoModal.style.display = 'none';
    }
});

// --- Contador de días, horas, minutos y segundos hasta el 19 de diciembre ---
const counterElement = document.getElementById('counter');  // Referencia al contenedor donde se mostrará el contador
const btnShowCounter = document.getElementById('btn-show-counter');  // Botón para mostrar el contador
const closeCounter = document.getElementById('close-counter');  // Botón para cerrar el contador

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

document.addEventListener("DOMContentLoaded", function () {
    const btn3Months = document.getElementById("btn-3months");
    const btn4Months = document.getElementById("btn-4months");

    const welcomeScreen = document.getElementById("welcomeScreen");
    const threeMonthsSection = document.getElementById("threeMonthsSection");
    const fourMonthsSection = document.getElementById("fourMonthsSection");

    // Acción al hacer clic en "3 Meses"
    btn3Months.addEventListener("click", function () {
        welcomeScreen.classList.add("hidden");
        threeMonthsSection.classList.remove("hidden");
    });

    // Acción al hacer clic en "4 Meses"
    btn4Months.addEventListener("click", function () {
        const currentDate = new Date();
        const unlockDate = new Date("2024-12-19");

        if (currentDate >= unlockDate) {
            welcomeScreen.classList.add("hidden");
            fourMonthsSection.classList.remove("hidden");
        } else {
            alert("El contenido de los 4 meses se desbloqueará el 19 de diciembre.");
        }
    });

    // Habilitar el botón de "4 Meses" cuando la fecha se alcance
    const currentDate = new Date();
    const unlockDate = new Date("2024-12-19");

    if (currentDate >= unlockDate) {
        btn4Months.disabled = false;
    }
});
