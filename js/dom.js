/*
====================================
INSPECTOR DOM
====================================
*/

async function cargarArbolDOM() {

    const estado =
        document.getElementById("estado");

    const contenedor =
        document.getElementById("arbol");

    try {

        const respuesta =
            await fetch("index.html");

        if (!respuesta.ok) {

            throw new Error(
                "No se pudo cargar index.html"
            );
        }

        const html =
            await respuesta.text();

        const documento =
            new DOMParser().parseFromString(
                html,
                "text/html"
            );

        contenedor.innerHTML = "";

        const raiz =
            crearNodoDOM(
                documento.documentElement,
                0
            );

        contenedor.appendChild(raiz);

        estado.textContent =
            "Árbol DOM generado correctamente.";

    } catch (error) {

        estado.textContent =
            "No fue posible generar el árbol DOM.";
    }
}

/*
====================================
CREAR NODOS
====================================
*/

function crearNodoDOM(elemento, nivel) {

    const detalles =
        document.createElement("details");

    const resumen =
        document.createElement("summary");

    resumen.style.cursor = "pointer";
    resumen.style.margin = "6px 0";
    resumen.style.fontFamily = "monospace";

    let texto =
        "<" +
        elemento.tagName.toLowerCase() +
        ">";

    if (elemento.id) {

        texto +=
            ` id="${elemento.id}"`;
    }

    if (
        elemento.classList &&
        elemento.classList.length > 0
    ) {

        texto +=
            ` class="${elemento.classList.value}"`;
    }

    resumen.textContent = texto;

    detalles.appendChild(resumen);

    const hijos =
        document.createElement("div");

    hijos.style.marginLeft = "25px";
    hijos.style.paddingLeft = "15px";
    hijos.style.borderLeft =
        "2px solid #dce3e8";

    for (const hijo of elemento.children) {

        hijos.appendChild(
            crearNodoDOM(
                hijo,
                nivel + 1
            )
        );
    }

    if (
        hijos.childElementCount > 0
    ) {

        detalles.appendChild(hijos);

        if (nivel < 2) {

            detalles.open = true;
        }
    }

    return detalles;
}

/*
====================================
INICIO
====================================
*/

document.addEventListener(
    "DOMContentLoaded",
    cargarArbolDOM
);
