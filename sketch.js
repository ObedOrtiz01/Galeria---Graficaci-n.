// Este archivo contiene los dibujos hechos con p5.js.
// Todos se dibujan en el mismo lienzo de 400 por 400 píxeles.

let dibujoActual = "rana";

function setup() {
    const lienzo = createCanvas(400, 400);
    lienzo.parent("lienzo");
    noLoop(); // No necesitamos repetir el dibujo continuamente.
    dibujarProyecto();
}

// Esta función se llama desde los enlaces y botones de la página.
function mostrarDibujo(nombre) {
    dibujoActual = nombre;
    const nombres = {
        "rana": "Rana",
        "conejo": "Dientes de conejo",
        "cena": "¿Qué hay de cena?",
        "dia-nevado": "Día nevado soleado",
        "muneco": "Muñeco de nieve"
    };

    document.getElementById("nombre-dibujo").textContent = nombres[nombre];
    dibujarProyecto();

    // Lleva el foco visual al área de dibujo en pantallas pequeñas.
    if (window.innerWidth < 850) {
        document.getElementById("lienzo").scrollIntoView({ behavior: "smooth", block: "center" });
    }
}

// Selecciona qué dibujo se debe mostrar.
function dibujarProyecto() {
    clear();
    if (dibujoActual === "rana") dibujarRana();
    if (dibujoActual === "conejo") dibujarConejo();
    if (dibujoActual === "cena") dibujarCena();
    if (dibujoActual === "dia-nevado") dibujarDiaNevado();
    if (dibujoActual === "muneco") dibujarMuneco();
}

// DIBUJO 1: RANA
function dibujarRana() {
    background(224, 244, 231);
    const x = 200;
    const y = 250;

    noStroke();
    fill(30, 204, 91);
    ellipse(x, y, 200, 100);       // Cara
    ellipse(x - 50, y - 50, 40, 40); // Cuenca del ojo izquierdo
    ellipse(x + 50, y - 50, 40, 40); // Cuenca del ojo derecho

    fill(255);
    ellipse(x - 50, y - 50, 30, 30); // Ojo izquierdo
    ellipse(x + 50, y - 50, 30, 30); // Ojo derecho

    fill(0);
    ellipse(x, y, 150, 70);         // Boca
    rect(x + 50, y - 52, 10, 10);  // Pupila derecha
    rect(x - 60, y - 52, 10, 10);  // Pupila izquierda
}

// DIBUJO 2: DIENTES DE CONEJO
function dibujarConejo() {
    background(250, 244, 235);
    noStroke();
    fill(255);
    ellipse(150, 70, 60, 120);    // Oreja izquierda
    ellipse(240, 70, 60, 120);    // Oreja derecha
    ellipse(200, 170, 150, 150);  // Cara

    fill(245, 190, 195);
    ellipse(150, 70, 28, 80);     // Interior de oreja
    ellipse(240, 70, 28, 80);

    fill(0);
    ellipse(170, 150, 30, 30);    // Ojo izquierdo
    ellipse(230, 150, 30, 30);    // Ojo derecho

    stroke(0);
    strokeWeight(2);
    line(150, 200, 250, 200);     // Boca
    noFill();
    rect(185, 200, 15, 30);       // Diente izquierdo
    rect(200, 200, 15, 30);       // Diente derecho
    noStroke();
}

// DIBUJO 3: ¿QUÉ HAY DE CENA?
function dibujarCena() {
    background(186, 145, 20);     // Mesa de madera
    noStroke();
    fill(245);
    ellipse(200, 200, 350, 350);  // Borde exterior del plato
    fill(220, 226, 230);
    ellipse(200, 200, 300, 300);  // Interior del plato
    fill(255);
    ellipse(200, 200, 270, 270);  // Centro claro del plato
}

// DIBUJO 4: DÍA NEVADO SOLEADO
function dibujarDiaNevado() {
    background(68, 199, 197);     // Cielo
    noStroke();
    fill(159, 240, 77);
    rect(0, 300, 400, 100);       // Suelo

    fill(227, 218, 41);
    ellipse(80, 64, 100, 100);    // Sol

    fill(255);
    ellipse(200, 300, 150, 150);  // Base del muñeco
    ellipse(200, 200, 100, 100);  // Cuerpo
    ellipse(200, 120, 75, 75);    // Cabeza
}

// DIBUJO 5: MUÑECO DE NIEVE
function dibujarMuneco() {
    background(211, 235, 243);
    noStroke();
    fill(245, 250, 252);
    rect(0, 300, 400, 100);       // Suelo nevado

    fill(255);
    stroke(170, 190, 198);
    strokeWeight(1);
    ellipse(200, 300, 150, 150);  // Base
    ellipse(200, 200, 100, 100);  // Cuerpo
    ellipse(200, 120, 75, 75);    // Cabeza

    stroke(110, 75, 45);
    strokeWeight(5);
    line(150, 200, 95, 165);      // Brazo izquierdo
    line(245, 200, 305, 165);    // Brazo derecho

    noStroke();
    fill(40);
    ellipse(188, 115, 6, 6);      // Ojo izquierdo
    ellipse(212, 115, 6, 6);      // Ojo derecho
    fill(240, 130, 45);
    triangle(200, 123, 200, 132, 222, 127); // Nariz
}
