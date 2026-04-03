const enlacePrueba = document.querySelector('#prueba01')

enlacePrueba.addEventListener('click', (e) =>
    {
        console.log("El usuario hizo clic. Guardando datos...");
        alert("Ejecutando lógica antes de navegar");
    });

const info = () =>
    {
        console.log("AAA")
    }
