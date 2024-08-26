# Menu Lateral con Submenús - Plantilla

Este proyecto es una plantilla de un menú lateral con submenús, adaptable para diferentes tipos de páginas web. 
La plantilla está desarrollada en dos versiones: una utilizando HTML, CSS y JavaScript puro, y otra utilizando React. 
Ambas versiones están diseñadas para ser fáciles de integrar y personalizar en tus propios proyectos.

---

## Tabla de Contenidos

- [Vista Previa](#vista-previa)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Personalización](#personalización)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Contacto](#contacto)

---
---

## Vista Previa

> Agrega aquí una imagen o GIF de demostración del menú lateral en acción.

---

## Características

- Menú lateral adaptable con submenús desplegables.
- Fácil integración en proyectos web existentes.
- Dos versiones disponibles: HTML/CSS/JS puro y React.
- Personalizable a través de clases CSS y configuración mínima en JavaScript.
- Compatible con los principales navegadores modernos.

---

## Tecnologías Utilizadas

### Versión HTML, CSS y JavaScript

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**

### Versión React

- **React 18+**
- **CSS3 (o styled-components, según preferencia)**

---

## Instalación

### Clonar el Repositorio

Primero, clona este repositorio en tu máquina local:

```bash
git clone https://github.com/SGC11PRO/submenu
```

### Versión HTML, CSS y JavaScript

1. Dirígete al directorio `html-css-js`
```bash
cd Submenu/html-css-js
```

2. Abre el archivo `index.html` en tu navegador
3. Listo!

### Versión React
1. Dirígete al directorio `react`
```bash
cd Submenu/react
```

2. Instala las dependencias del proyecto
```bash
npm install
```

3. Inicia la aplicación
```bash
npm start
```

4. Abre tu navegador en `http://localhost:5173` para ver tu aplicación
5. Listo !

---
> Nota : Si no te funcionan los comandos de `npm`, prueba a instalar node desde `https://nodejs.org/en/download/package-manager`.
> Sigue las instrucciones de la página y listo! Ya podrás utilizar `npm`.
---

## Estructura del Proyecto
```
menu-lateral-plantilla/
│
├── html-css-js/        # Versión en HTML, CSS y JavaScript puro
│   ├── index.html      # Archivo HTML principal
│   ├── styles.css      # Archivo CSS
│   └── script.js       # Archivo JS
│
└── react/              # Versión en React
    ├── src/            # Código fuente de React
    │   ├── components/ # Componentes del menú lateral
    │   ├── App.js      # Componente principal de React
    │   └── index.js    # Punto de entrada de la aplicación React
    ├── public/         # Archivos estáticos
    └── package.json    # Archivo de configuración de npm
```

## Personalización
### Versión HTML, CSS y JavaScript
- Cambiar colores y estilos -> Dirígete al archivo `index.css` para editar los estilos
- Agregar o quitar items -> Modifica el archivo `index.html` para modificar la estructura de la página

### Versión React
- Cambiar colores y estilos -> Utiliza el archivo existente CSS `App.css` para estilar la página
- Cambiar estructura -> Modifica los componentes utilizando jsx y etiquetas html

## Contribuciones
Para apoyar este repositorio puedes contribuir de las siguientes formas
- Haz un fork de este repositorio
- Crea una nueva rama
- Envía los cambios a tu fork
- Realiza un pull-request en el repositorio original

## Licencia
Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.
