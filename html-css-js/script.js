// UNICAMENTE CAMBIAR EL ARRAY 'contents' PARA MODIFICAR EL CONTENIDO RENDERIZADO

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const content = document.getElementById('content'); // Contenedor de contenido principal

    // Contenidos a cargar dinámicamente -> HTML incrustado
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
    };

    // Funcionalidad para mostrar/ocultar submenús y cambiar el estado activo
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {

            // Alternar la clase 'active' en el elemento clicado -> Despliega el menu
            item.classList.toggle('active');

            // Ocultar otros submenús y eliminar la clase 'active' de otros elementos del menú -> Para solo tener un menu desplegado a la vez
            menuItems.forEach(function(i) {
                if (i !== item) {
                    i.classList.remove('active');
                }
            });
        });
    });

    // Funcionalidad para cambiar contenido al hacer clic en los submenús
    const menuLinks = document.querySelectorAll('.menu-item a, .submenu a');

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento por defecto del enlace

            const contentKey = link.getAttribute('data-content'); // Obtiene el valor de data-content

            if (contents[contentKey]) {
                content.innerHTML = contents[contentKey]; // Cambia el contenido y carga aquel con la misma id que el botón
            }
        });
    });
});
