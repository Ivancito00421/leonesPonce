/*
 * main.js - Leones de Ponce BSN
 * Proyecto universitario - Introduccion a la Programacion Web
 *
 * Este archivo controla:
 * 1. El menu de navegacion en pantallas pequenas (celular)
 * 2. La pagina activa en el menu principal
 */

document.addEventListener('DOMContentLoaded', function () {
    var boton = document.querySelector('.nav-toggle');
    var menu = document.querySelector('.nav-links');

    // Mostrar u ocultar el menu cuando se presiona el boton
    if (boton && menu) {
        boton.addEventListener('click', function () {
            menu.classList.toggle('open');
        });
    }

    // Detectar en que pagina estamos para marcar el enlace activo
    var pagina = window.location.pathname.split('/').pop();
    if (pagina === '' || pagina === '/') {
        pagina = 'index.html';
    }

    var enlaces = document.querySelectorAll('.nav-links a');
    for (var i = 0; i < enlaces.length; i++) {
        if (enlaces[i].getAttribute('href') === pagina) {
            enlaces[i].classList.add('active');
        }
    }
});
