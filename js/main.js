/*
====================================
CONFIGURACIÓN GENERAL
====================================
*/

let proyectoActual = "rana";

/*
====================================
P5.JS
====================================
*/

function setup() {

    const canvas = createCanvas(400, 400);

    canvas.parent("lienzo");

    frameRate(60);

    mostrarProyecto("rana");
}

function draw() {

    switch (proyectoActual) {

        // DIBUJOS

        case "rana":
            dibujarRana();
            break;

        case "conejo":
            dibujarConejo();
            break;

        case "cena":
            dibujarCena();
            break;

        case "dia-nevado":
            dibujarDiaNevado();
            break;

        case "muneco":
            dibujarMuneco();
            break;

        // ANIMACIONES

        case "sol":
            animarSol();
            break;

        case "nubes":
            animarNubes();
            break;

        case "estrella":
            animarEstrella();
            break;
    }
}

/*
====================================
CAMBIO DE PROYECTO
====================================
*/

function mostrarProyecto(nombre) {

    proyectoActual = nombre;

    actualizarInformacion(nombre);

    const titulo =
        document.getElementById(
            "titulo-proyecto"
        );

    titulo.textContent =
        proyectos[nombre].nombre;

    const esAnimacion =
        proyectos[nombre]
            .categoria === "Animación";

    if (esAnimacion) {

        prepararAnimacion(nombre);

        loop();

    } else {

        noLoop();

        redibujar();
    }

    moverVista();
}

/*
====================================
REDIBUJAR DIBUJOS
====================================
*/

function redibujar() {

    switch (proyectoActual) {

        case "rana":
            dibujarRana();
            break;

        case "conejo":
            dibujarConejo();
            break;

        case "cena":
            dibujarCena();
            break;

        case "dia-nevado":
            dibujarDiaNevado();
            break;

        case "muneco":
            dibujarMuneco();
            break;
    }
}

/*
====================================
PREPARA ANIMACIONES
====================================
*/

function prepararAnimacion(nombre) {

    switch (nombre) {

        case "sol":
            reiniciarSol();
            break;

        case "nubes":
            reiniciarNubes();
            break;

        case "estrella":
            reiniciarEstrella();
            break;
    }
}

/*
====================================
INFORMACIÓN
====================================
*/

function actualizarInformacion(nombre) {

    const proyecto =
        proyectos[nombre];

    document.getElementById(
        "info-nombre"
    ).textContent =
        proyecto.nombre;

    document.getElementById(
        "info-descripcion"
    ).textContent =
        proyecto.descripcion;

    document.getElementById(
        "info-categoria"
    ).textContent =
        proyecto.categoria;

    document.getElementById(
        "info-conceptos"
    ).textContent =
        proyecto.conceptos;
}

/*
====================================
SCROLL EN MÓVILES
====================================
*/

function moverVista() {

    if (window.innerWidth < 1000) {

        document
            .getElementById("lienzo")
            .scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
    }
}
