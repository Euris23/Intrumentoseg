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
            response = 'Solo necesitas una identificación válida y quedar en acuerdo con nosotros para el proceso de alquiler.';
            break;
        case '4':
            question = '¿Cuánto dura el proceso para alquilarlo?';
            response = 'El proceso de alquiler suele durar entre 10 y 15 minutos. Usted ve el instrumento, lo prueba y si le surge alguna pregunta mientras lo hace, la puede realizar. Después de ese proceso, todo queda listo para llevarse el instrumento.';
            break;
        default:
            question = '';
            response = '';
    }

    let faqContent = document.getElementById('faqContent');
    faqContent.innerHTML = ''; // Limpiar el contenido anterior

    if (response) {
        // Efecto de escritura automática para la respuesta
        let index = 0;
        let typingSpeed = 50; // Velocidad de escritura en ms
        let pauseDuration = 300; // Duración de la pausa después de cada punto en ms

        function typeWriter() {
            if (index < response.length) {
                faqContent.innerHTML += response.charAt(index);

                if (response.charAt(index) === '.') {
                    setTimeout(() => {
                        index++;
                        typeWriter();
                    }, pauseDuration); // Pausa después del punto
                } else {
                    index++;
                    setTimeout(typeWriter, typingSpeed);
                }
            } else {
                // Pausa antes de agregar el mensaje y el botón
                setTimeout(() => {
                    // Agregar un salto de línea antes del mensaje
                    faqContent.innerHTML += '<br><br>'; // Espacio antes del mensaje

                    // Agregar el mensaje después de la pausa
                    let infoMessage = 'Si quieres obtener más información, pulsa el botón verde que aparece debajo.';
                    let infoIndex = 0;

                    function typeInfoWriter() {
                        if (infoIndex < infoMessage.length) {
                            faqContent.innerHTML += infoMessage.charAt(infoIndex);
                            infoIndex++;
                            setTimeout(typeInfoWriter, typingSpeed);
                        } else {
                            // Agregar un salto de línea adicional antes del botón
                            faqContent.innerHTML += '<br><br>'; // Espacio antes del botón
                            faqContent.innerHTML += '<a href="https://wa.me/18295705931?text=Hola,%20quiero%20saber%20más%20información%20sobre..." target="_blank" style="display: inline-block; background-color: #25D366; color: white; border-radius: 50%; padding: 10px; text-align: center; font-size: 20px; width: 50px; height: 50px;"><i class="fab fa-whatsapp"></i></a>';
                        }
                    }

                    typeInfoWriter(); // Comienza a escribir el mensaje de información después de la pausa
                }, 1000); // Pausa de 1000 ms antes de agregar el mensaje y el botón
            }
        }

        setTimeout(typeWriter, 100); // Comienza a escribir después de 100 ms
    }
});
