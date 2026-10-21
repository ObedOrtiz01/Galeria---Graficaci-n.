/*
====================================
INSPECTOR DOM · DIAGRAMA JERÁRQUICO
====================================
Arquitectura:
  1. obtenerDocumento()   -> fetch + DOMParser
  2. construirModelo()    -> convierte el DOM en un árbol de datos simple
  3. medir()/posicionar() -> algoritmo de distribución automática
  4. renderizar()         -> nodos HTML (cajas) + SVG (líneas)
  5. controles de zoom    -> escala sin romper el scroll
*/

const CONFIG = {
    archivo: "index.html",
    anchoNodo: 160,
    altoNodo: 64,
    separacionH: 22,   // espacio horizontal entre hermanos
    separacionV: 64,   // espacio vertical entre niveles
    margen: 40
};

const SVG_NS = "http://www.w3.org/2000/svg";

let escala = 1;
let dimensiones = { ancho: 0, alto: 0 };

/*
====================================
1. OBTENER DOCUMENTO
====================================
*/

async function obtenerDocumento(url) {

    const respuesta = await fetch(url);

    if (!respuesta.ok) {
        throw new Error("No se pudo cargar " + url);
    }

    const html = await respuesta.text();

    return new DOMParser().parseFromString(html, "text/html");
}

/*
====================================
2. MODELO DE DATOS
====================================
*/

function construirModelo(elemento, nivel) {

    return {
        etiqueta: elemento.tagName.toLowerCase(),
        id: elemento.id || "",
        clases: Array.from(elemento.classList),
        nivel: nivel,
        hijos: Array.from(elemento.children).map(
            hijo => construirModelo(hijo, nivel + 1)
        ),
        x: 0,
        y: 0,
        ancho: 0,
        anchoHijos: 0
    };
}

function estadisticas(nodo) {

    let total = 1;
    let profundidad = nodo.nivel;

    for (const hijo of nodo.hijos) {
        const e = estadisticas(hijo);
        total += e.total;
        profundidad = Math.max(profundidad, e.profundidad);
    }

    return { total, profundidad };
}

/*
====================================
3. DISTRIBUCIÓN AUTOMÁTICA
====================================
*/

// Paso 1: cada subárbol reserva el ancho que necesita.
function medir(nodo) {

    if (nodo.hijos.length === 0) {
        nodo.ancho = CONFIG.anchoNodo;
        return nodo.ancho;
    }

    let suma = 0;

    for (const hijo of nodo.hijos) {
        suma += medir(hijo);
    }

    suma += CONFIG.separacionH * (nodo.hijos.length - 1);

    nodo.anchoHijos = suma;
    nodo.ancho = Math.max(CONFIG.anchoNodo, suma);

    return nodo.ancho;
}

// Paso 2: asigna coordenadas; el padre queda centrado sobre sus hijos.
function posicionar(nodo, izquierda) {

    nodo.y = CONFIG.margen +
        nodo.nivel * (CONFIG.altoNodo + CONFIG.separacionV);

    if (nodo.hijos.length === 0) {
        nodo.x = izquierda + nodo.ancho / 2;
        return;
    }

    let cursor = izquierda + (nodo.ancho - nodo.anchoHijos) / 2;

    for (const hijo of nodo.hijos) {
        posicionar(hijo, cursor);
        cursor += hijo.ancho + CONFIG.separacionH;
    }

    const primero = nodo.hijos[0];
    const ultimo = nodo.hijos[nodo.hijos.length - 1];

    nodo.x = (primero.x + ultimo.x) / 2;
}

/*
====================================
4. RENDER
====================================
*/

function crearCaja(nodo) {

    const caja = document.createElement("div");
    caja.className = "nodo-dom nivel-" + Math.min(nodo.nivel, 4);

    if (nodo.nivel === 0) caja.classList.add("nodo-raiz");

    caja.style.width = CONFIG.anchoNodo + "px";
    caja.style.height = CONFIG.altoNodo + "px";
    caja.style.left = (nodo.x - CONFIG.anchoNodo / 2) + "px";
    caja.style.top = nodo.y + "px";

    const etiqueta = document.createElement("span");
    etiqueta.className = "nodo-etiqueta";
    etiqueta.textContent = "<" + nodo.etiqueta + ">";
    caja.appendChild(etiqueta);

    let descripcion = "<" + nodo.etiqueta;

    if (nodo.id) {
        const id = document.createElement("span");
        id.className = "nodo-id";
        id.textContent = "#" + nodo.id;
        caja.appendChild(id);
        descripcion += ' id="' + nodo.id + '"';
    }

    if (nodo.clases.length > 0) {
        const clases = document.createElement("span");
        clases.className = "nodo-clase";
        clases.textContent = nodo.clases.map(c => "." + c).join(" ");
        caja.appendChild(clases);
        descripcion += ' class="' + nodo.clases.join(" ") + '"';
    }

    caja.title = descripcion + ">";

    return caja;
}

function crearConector(padre, hijo) {

    const yPadre = padre.y + CONFIG.altoNodo;
    const yMedio = yPadre + CONFIG.separacionV / 2;

    const ruta = document.createElementNS(SVG_NS, "path");

    ruta.setAttribute(
        "d",
        `M ${padre.x} ${yPadre} V ${yMedio} H ${hijo.x} V ${hijo.y}`
    );

    ruta.setAttribute("class", "conector");

    return ruta;
}

function renderizar(raiz, contenedor) {

    const { total, profundidad } = estadisticas(raiz);

    medir(raiz);
    posicionar(raiz, CONFIG.margen);

    const ancho = raiz.ancho + CONFIG.margen * 2;
    const alto =
        (profundidad + 1) * CONFIG.altoNodo +
        profundidad * CONFIG.separacionV +
        CONFIG.margen * 2;

    dimensiones = { ancho, alto };

    const sizer = document.createElement("div");
    sizer.className = "arbol-sizer";

    const escenario = document.createElement("div");
    escenario.className = "arbol-escenario";
    escenario.style.width = ancho + "px";
    escenario.style.height = alto + "px";

    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("width", ancho);
    svg.setAttribute("height", alto);
    svg.setAttribute("class", "arbol-lineas");

    const cajas = document.createDocumentFragment();

    (function recorrer(nodo) {

        cajas.appendChild(crearCaja(nodo));

        for (const hijo of nodo.hijos) {
            svg.appendChild(crearConector(nodo, hijo));
            recorrer(hijo);
        }

    })(raiz);

    escenario.appendChild(svg);
    escenario.appendChild(cajas);
    sizer.appendChild(escenario);

    contenedor.innerHTML = "";
    contenedor.appendChild(sizer);

    aplicarEscala(1);

    return { total, profundidad };
}

/*
====================================
5. ZOOM
====================================
*/

function aplicarEscala(valor) {

    escala = Math.min(1.5, Math.max(0.2, valor));

    const sizer = document.querySelector(".arbol-sizer");
    const escenario = document.querySelector(".arbol-escenario");

    if (!sizer || !escenario) return;

    escenario.style.transform = `scale(${escala})`;
    sizer.style.width = dimensiones.ancho * escala + "px";
    sizer.style.height = dimensiones.alto * escala + "px";

    const etiqueta = document.getElementById("zoom-valor");
    if (etiqueta) etiqueta.textContent = Math.round(escala * 100) + "%";
}

function ajustarAncho() {

    const contenedor = document.getElementById("arbol");

    aplicarEscala((contenedor.clientWidth - 4) / dimensiones.ancho);
}

function conectarControles() {

    const acciones = {
        "zoom-mas": () => aplicarEscala(escala + 0.1),
        "zoom-menos": () => aplicarEscala(escala - 0.1),
        "zoom-reset": () => aplicarEscala(1),
        "zoom-ajustar": ajustarAncho
    };

    for (const id in acciones) {
        const boton = document.getElementById(id);
        if (boton) boton.addEventListener("click", acciones[id]);
    }
}

/*
====================================
INICIO
====================================
*/

async function cargarArbolDOM() {

    const estado = document.getElementById("estado");
    const contenedor = document.getElementById("arbol");

    try {

        const documento = await obtenerDocumento(CONFIG.archivo);
        const modelo = construirModelo(documento.documentElement, 0);
        const datos = renderizar(modelo, contenedor);

        conectarControles();

        // Si el árbol es muy ancho, inicia ajustado a la pantalla.
        if (dimensiones.ancho > contenedor.clientWidth) {
            ajustarAncho();
        }

        estado.textContent =
            "Árbol generado: " + datos.total + " nodos · " +
            (datos.profundidad + 1) + " niveles de profundidad.";

    } catch (error) {

        estado.textContent =
            "No fue posible generar el árbol DOM. " +
            "Si abres el archivo directamente (file://), usa un servidor " +
            "local o GitHub Pages.";
    }
}

document.addEventListener("DOMContentLoaded", cargarArbolDOM);
