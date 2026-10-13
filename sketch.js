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
    background(160,110,50);
    for(var i = 0; i < 400; i += 20){
        stroke(140,90,30,80);
        strokeWeight(2);
        line(0,i,400,i);
    }
    
    //El platico
    noStroke();
    fill(50,30,20,100);
    rect(45,115,310,190,15);
    
    fill(20,20,20);
    rect(40,110,310,190,12);
    
    fill(30,45,65);
    rect(40,110,310,190,12);
    
    fill(30,45,65);
    rect(55,122,280,166,8);
    fill(20,35,50);
    rect(62,128,266,154,5);
    
    fill(40,15,5);
    rect(55,122,280,6,3);
    
    //Salcita de soja
    fill(20,20,20);
    ellipse(95,160,50,40);
    fill(15,10,10);
    ellipse(95,160,42,32);
    
    fill(40,15,5);
    ellipse(95,161,40,28);
    fill(255,255,255,70);
    ellipse(105,156,8,4);
    
    
    //El WASAAAAABI
    fill(100,170,40);
    ellipse(100,235,28,22);
    fill(140,200,60);
    ellipse(98,233,18,14);
    
    //El jengibre juas juas
    fill(235,160,160);
    ellipse(130,240,30,15);
    fill(255,185,185);
    ellipse(127,237,25,12);
    fill(240,170,170);
    ellipse(132,234,20,10);
    
    //Rollo de sushi de salmon
    //Alga nori
    fill(15,30,20);
    ellipse(190,170,62,52);
    //aloz
    fill(240,240,240);
    ellipse(190,170,52,42);
    fill(255,255,255);
    ellipse(190,170,48,38);
    //Relleno de salmon
    fill(245,110,70);
    ellipse(186,170,22,18);
    fill(255,150,110);
    ellipse(185,169,14,10);
    //Leyeno awakate y pepino
    fill(80,160,50);
    ellipse(198,166,12,10);
    fill(180,220,100);
    ellipse(196,175,10,8);
    //otlo sushi pelo de atun
    fill(15,30,20);
    ellipse(260,170,62,52);
    fill(240,240,240);
    ellipse(260,170,52,42);
    fill(255,255,255);
    ellipse(260,170,48,38);
    //El atun intenso de colol
    fill(180,30,50);
    ellipse(260,170,24,20);
    fill(220,60,80);
    ellipse(258,169,14,10);
    
    //El onigili de salmon
    //aloz
    fill(230,230,230);
    ellipse(215,235,75,35);
    //Lamina de salmon encima
    fill(245,100,60);
    ellipse(215,230,85,36);
    //lineas en el salmon
    stroke(255,180,150);
    strokeWeight(2);
    line(185,222,200,238);
    line(205,218,225,239);
    line(225,218,245,238);
    noStroke();
    //Blillo de flescula en el salmon
    fill(255,255,255,90);
    ellipse(205,222,18,5);
    //Palitos de madela
    stroke(120,70.30);
    strokeWeight(5);
    line(70,275,330,260);
    strokeWeight(3);
    line(70,282,330,263);
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
// Actualización para volver a publicar la galería
