let posicionActual = 0;

function desplazar(direccion) {
    const pista = document.getElementById('libro');
    const tarjetas = document.querySelectorAll('.l');
    
    // 1. Calculamos cuánto mide una tarjeta sumando su separación (gap)
    const anchoTarjeta = tarjetas[0].offsetWidth + 20; 
    
    // 2. Calculamos cuántas tarjetas quedan totalmente ocultas a la derecha
    const maxItemsVisibles = Math.floor(document.querySelector('.cont-carrusel').offsetWidth / anchoTarjeta);
    const limiteMaximo = tarjetas.length - maxItemsVisibles;

    // 3. Actualizamos la posición controlando los límites
    posicionActual += direccion;

    if (posicionActual < 0) {
        posicionActual = 0; // No dejar que vaya más a la izquierda del inicio
    } else if (posicionActual > limiteMaximo) {
        posicionActual = limiteMaximo; // No dejar que avance si ya no hay más libros
    }


    // 4. Movemos la pista usando CSS Translate
    const desplazamiento = posicionActual * anchoTarjeta;
    pista.style.transform = `translateX(-${desplazamiento}px)`;



}