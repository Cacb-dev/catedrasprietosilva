// carrusel.js

const carruselTrack = document.querySelector('.carrusel-track');
const contenedorCarrusel = document.querySelector('.carrusel');
const tiempoCambio = 3000; 

function carruselAutoplay() {
    const anchoImagen = carruselTrack.clientWidth;
    const scrollMaximo = carruselTrack.scrollWidth - anchoImagen;

    if (carruselTrack.scrollLeft >= scrollMaximo - 5) {
      carruselTrack.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      carruselTrack.scrollBy({ left: anchoImagen, behavior: 'smooth' });
    }
}

// Iniciar el temporizador
let intervalo = setInterval(carruselAutoplay, tiempoCambio);

// Pausar al pasar el ratón
contenedorCarrusel.addEventListener('mouseenter', () => {
    clearInterval(intervalo);
});

// Reanudar al quitar el ratón
contenedorCarrusel.addEventListener('mouseleave', () => {
  intervalo = setInterval(carruselAutoplay, tiempoCambio);
});