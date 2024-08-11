document.getElementById('faqButton').addEventListener('click', function() {
    document.getElementById('faqOverlay').style.display = 'block';
    document.getElementById('faqModal').style.display = 'block';
});

document.getElementById('faqClose').addEventListener('click', function() {
    document.getElementById('faqOverlay').style.display = 'none';
    document.getElementById('faqModal').style.display = 'none';
    document.getElementById('faqContent').innerHTML = ''; // Limpiar el contenido
});

document.getElementById('faqSelect').addEventListener('change', function() {
    let question = '';
    let response = '';
    
    switch (this.value) {
        case '1':
            question = '¿Cómo funciona el proceso de alquiler?';
            response = 'El proceso es sencillo. Seleccionas el instrumento, te facilitamos una hoja con todos los detalles y listo.';
            break;
        case '2':
            question = '¿Qué instrumentos están disponibles?';
            response = 'Disponemos de pianos, guitarras eléctricas y guitarras acústicas.';
            break;
        case '3':
            question = '¿Cuáles son los requisitos para alquilar?';
            response = 'Solo necesitas una identificación válida y quedar en acuerdo con nosotros para el proceso de alquiler. Contáctanos dando clic al botón que está debajo, en la página.';
            break;
        case '4':
            question = '¿Cuánto dura el proceso para alquilarlo?';
            response = 'El proceso de alquiler suele durar entre 10 y 15 minutos. Usted ve el instrumento, lo prueba y si le surje alguna pregunta mientras lo hace, la puede realizar. Despues de ese proceso, todo queda listo para llevarse el instrumento';
            break;
        default:
            question = '';
            response = '';
    }

    let faqContent = document.getElementById('faqContent');
    faqContent.innerHTML = ''; // Limpiar el contenido anterior

    if (response) {
        // Efecto de escritura automática
        let index = 0;
        let typingSpeed = 50; // Velocidad de escritura en ms

        function typeWriter() {
            if (index < response.length) {
                faqContent.innerHTML += response.charAt(index);
                index++;
                setTimeout(typeWriter, typingSpeed);
            }
        }

        setTimeout(typeWriter, 100); // Comienza a escribir después de 100 ms
    }
});

