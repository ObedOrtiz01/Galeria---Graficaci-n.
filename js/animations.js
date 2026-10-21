/*
====================================
VARIABLES GLOBALES DE ANIMACIONES
====================================
*/

// SOL QUE EXPLOTA
let sunSize;

// NUBES QUE SE SEPARAN
let leftX;
let rightX;
let sunRadius;

// ESTRELLA FUGAZ

let starX = [];
let starY = [];
let starB = [];

let winX = [];
let winY = [];
let winT = [];

let moonX;
let moonY;

let ballX;
let ballY;
let velX;
let velY;

let fX;
let fY;
let fSpeed;

let f2X;
let f2Y;
let f2Speed;

let frameCounter = 0;

/*
====================================
REINICIO DE ANIMACIONES
====================================
*/

function reiniciarSol() {

    sunSize = 30;
}

function reiniciarNubes() {

    leftX = 170;
    rightX = 230;
    sunRadius = 100;
}

function reiniciarEstrella() {

    frameCounter = 0;

    starX = [];
    starY = [];
    starB = [];

    for (let i = 0; i < 80; i++) {

        starX[i] = random(0, 400);
        starY[i] = random(0, 260);
        starB[i] = random(100, 255);
    }

    winX = [];
    winY = [];
    winT = [];

    for (let i = 0; i < 30; i++) {

        winX[i] = random(20, 380);
        winY[i] = random(220, 340);
        winT[i] = random(0, 200);
    }

    moonX = 330;
    moonY = 60;

    ballX = 30;
    ballY = 330;

    velX = 6;
    velY = -9;

    fX = 400;
    fY = 40;
    fSpeed = 8;

    f2X = 400;
    f2Y = 120;
    f2Speed = 6;
}

/*
====================================
SOL QUE EXPLOTA
====================================
*/

function animarSol() {

    noStroke();

    background(82, 222, 240);

    fill(255, 204, 0);
    ellipse(200, 298, sunSize, sunSize);

    fill(76, 168, 67);
    rect(0, 300, 400, 100);

    sunSize += 1;

    if (sunSize > 700) {
        sunSize = 30;
    }
}

/*
====================================
NUBES QUE SE SEPARAN
====================================
*/

function animarNubes() {

    background(184, 236, 255);

    fill(255, 170, 0);
    ellipse(200, 100, sunRadius, sunRadius);

    fill(255);

    ellipse(leftX, 150, 126, 97);
    ellipse(leftX + 62, 150, 70, 60);
    ellipse(leftX - 62, 150, 70, 60);

    ellipse(rightX, 100, 126, 97);
    ellipse(rightX + 62, 100, 70, 60);
    ellipse(rightX - 62, 100, 70, 60);

    leftX -= 1;
    rightX += 1;

    sunRadius += 2;

    if (leftX < -200) {

        leftX = 170;
        rightX = 230;
        sunRadius = 100;
    }
}

/*
====================================
ESTRELLA FUGAZ
====================================
*/

function animarEstrella() {

    frameCounter++;

    background(10, 16, 40);

    noStroke();

    for (let i = 0; i < 80; i++) {

        let brillo =
            starB[i] +
            sin((frameCounter + i * 20) / 20) * 60;

        fill(255, 255, 255, brillo);

        ellipse(
            starX[i],
            starY[i],
            2,
            2
        );
    }

    fill(255,255,200,60);
    ellipse(moonX, moonY, 90,90);

    fill(255,255,200,120);
    ellipse(moonX, moonY,70,70);

    fill(255,245,180);
    ellipse(moonX, moonY,50,50);

    fill(230,220,160);
    ellipse(moonX - 12, moonY - 8, 10,10);

    ellipse(moonX + 10, moonY + 12, 7,7);

    ellipse(moonX + 12, moonY - 14, 5,5);

    // Estrella automática 1

    for (let c = 0; c < 10; c++) {

        fill(255,255,150,200 - c * 20);

        ellipse(
            fX + c * 6,
            fY - c * 4,
            8 - c * 0.7,
            8 - c * 0.7
        );
    }

    fill(255,255,150);
    ellipse(fX, fY, 10, 10);

    fX -= fSpeed;
    fY += fSpeed * 0.6;

    if (fX < -50 || fY > 320) {

        fX = random(300,450);
        fY = random(0,100);
    }

    // Estrella automática 2

    for (let c = 0; c < 8; c++) {

        fill(170,220,255,200 - c * 25);

        ellipse(
            f2X + c * 5,
            f2Y - c * 3,
            7 - c * 0.8,
            7 - c * 0.8
        );
    }

    fill(200,235,255);
    ellipse(f2X, f2Y, 9, 9);

    f2X -= f2Speed;
    f2Y += f2Speed * 0.5;

    if (f2X < -40 || f2Y > 320) {

        f2X = random(350,500);
        f2Y = random(0,60);
    }

    // Ciudad

    fill(20,25,45);

    rect(-10,260,70,140);
    rect(55,240,60,160);
    rect(110,280,80,120);
    rect(185,250,55,150);
    rect(235,290,70,110);
    rect(300,235,65,165);
    rect(360,270,50,130);

    // Ventanas

    for (let i = 0; i < 30; i++) {

        let parpadeo =
            150 +
            sin((frameCounter + winT[i]) / 15) * 100;

        fill(255,200,80,parpadeo);

        rect(
            winX[i],
            winY[i],
            5,
            7
        );
    }

    // Cañón

    fill(90,90,100);
    rect(10,340,40,20);

    fill(120,120,130);
    ellipse(30,335,22,22);

    // Proyectil

    for (let c = 0; c < 12; c++) {

        fill(255,242,0,220 - c * 18);

        ellipse(
            ballX - c * velX / 2,
            ballY - c * velY / 2,
            12 - c * 0.9,
            12 - c * 0.9
        );
    }

    fill(255,242,0);
    ellipse(ballX, ballY, 14,14);

    fill(255);
    ellipse(ballX, ballY, 7,7);

    ballX += velX;
    ballY += velY;

    velY += 0.25;

    if (ballY > 390) {

        ballY = 390;
        velY = -velY * 0.75;
    }

    if (ballX > 395 || ballX < 5) {

        velX = -velX;
    }

    if (
        abs(velY) < 1 &&
        ballY > 385
    ) {

        ballX = 30;
        ballY = 330;

        velX = random(4,8);
        velY = random(-11,-8);
    }
}
