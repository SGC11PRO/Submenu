// UNICAMENTE CAMBIAR EL ARRAY 'contents' PARA MODIFICAR EL CONTENIDO RENDERIZADO

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const content = document.getElementById('content'); // Contenedor de contenido principal

    // Contenidos a cargar dinámicamente -> HTML incrustado // Array --> CAMBIAR ESTO ----------------------------------------------------------
    const contents = {
        inicio: `
            <h1>Página de Inicio</h1>
            <p>Bienvenido a la página de inicio. Aquí encontrarás información general.</p>
        `,
        proyecto1: `
            <h1>Proyecto 1</h1>
            <p>Este es el contenido del Proyecto 1.</p>
        `,
        proyecto2: `
            <h1>Proyecto 2</h1>
            <p>Este es el contenido del Proyecto 2.</p>
        `,
        proyecto3: `
            <h1>Proyecto 3</h1>
            <p>Este es el contenido del Proyecto 3.</p>
        `,
        servicios: `
            <h1>Nuestros Servicios</h1>
            <p>Aquí encontrarás información sobre los servicios que ofrecemos.</p>
        `,
        servicio1: `
            <h1>Servicio 1</h1>
            <p>Este es el contenido del Servicio 1.</p>
        `,
        servicio2: `
            <h1>Servicio 2</h1>
            <p>Este es el contenido del Servicio 2.</p>
        `,
        servicio3: `
            <h1>Servicio 3</h1>
            <p>Este es el contenido del Servicio 3.</p>
        `,
        acercaDe: `
            <h1>Acerca de Nosotros</h1>
            <p>Información sobre nuestra empresa y nuestro equipo.</p>
        `,
        contacto: `
            <h1>Contacto</h1>
            <p>Ponte en contacto con nosotros a través de esta sección.</p>
        `
    }; // HASTA AQUI --------------------------------------------------------------------------------------------------------------------

    // Funcionalidad para mostrar/ocultar submenús
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const submenu = item.querySelector('.submenu');

            if (submenu) {
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // Funcionalidad para cambiar contenido al hacer clic en los submenús
    const menuLinks = document.querySelectorAll('.menu-item a, .submenu a');

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {

            event.preventDefault(); // Evita el comportamiento por defecto del enlace

            const contentKey = link.getAttribute('data-content'); // Obtiene el valor de data-content

            if (contents[contentKey]) {
                content.innerHTML = contents[contentKey]; // Cambia el contenido y carga aquel con la misma id que el boton
            }
        });
    });
});
