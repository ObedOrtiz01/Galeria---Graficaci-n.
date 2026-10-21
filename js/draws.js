/*
====================================
DIBUJOS ESTÁTICOS
====================================
*/

function dibujarRana() {

    background(224, 244, 231);

    const x = 200;
    const y = 250;

    noStroke();

    fill(30, 204, 91);
    ellipse(x, y, 200, 100);

    ellipse(x - 50, y - 50, 40, 40);
    ellipse(x + 50, y - 50, 40, 40);

    fill(255);

    ellipse(x - 50, y - 50, 30, 30);
    ellipse(x + 50, y - 50, 30, 30);

    fill(0);

    ellipse(x, y, 150, 70);

    rect(x + 50, y - 52, 10, 10);
    rect(x - 60, y - 52, 10, 10);
}

function dibujarConejo() {

    background(250, 244, 235);

    noStroke();

    fill(255);

    ellipse(150, 70, 60, 120);
    ellipse(240, 70, 60, 120);

    ellipse(200, 170, 150, 150);

    fill(245, 190, 195);

    ellipse(150, 70, 28, 80);
    ellipse(240, 70, 28, 80);

    fill(0);

    ellipse(170, 150, 30, 30);
    ellipse(230, 150, 30, 30);

    stroke(0);
    strokeWeight(2);

    line(150, 200, 250, 200);

    noFill();

    rect(185, 200, 15, 30);
    rect(200, 200, 15, 30);

    noStroke();
}

function dibujarCena() {

    background(160,110,50);

    for(let i = 0; i < 400; i += 20){

        stroke(140,90,30,80);
        strokeWeight(2);

        line(0,i,400,i);
    }

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

    fill(20,20,20);
    ellipse(95,160,50,40);

    fill(15,10,10);
    ellipse(95,160,42,32);

    fill(40,15,5);
    ellipse(95,161,40,28);

    fill(255,255,255,70);
    ellipse(105,156,8,4);

    fill(100,170,40);
    ellipse(100,235,28,22);

    fill(140,200,60);
    ellipse(98,233,18,14);

    fill(235,160,160);
    ellipse(130,240,30,15);

    fill(255,185,185);
    ellipse(127,237,25,12);

    fill(240,170,170);
    ellipse(132,234,20,10);

    fill(15,30,20);
    ellipse(190,170,62,52);

    fill(240,240,240);
    ellipse(190,170,52,42);

    fill(255,255,255);
    ellipse(190,170,48,38);

    fill(245,110,70);
    ellipse(186,170,22,18);

    fill(255,150,110);
    ellipse(185,169,14,10);

    fill(80,160,50);
    ellipse(198,166,12,10);

    fill(180,220,100);
    ellipse(196,175,10,8);

    fill(15,30,20);
    ellipse(260,170,62,52);

    fill(240,240,240);
    ellipse(260,170,52,42);

    fill(255,255,255);
    ellipse(260,170,48,38);

    fill(180,30,50);
    ellipse(260,170,24,20);

    fill(220,60,80);
    ellipse(258,169,14,10);

    fill(230,230,230);
    ellipse(215,235,75,35);

    fill(245,100,60);
    ellipse(215,230,85,36);

    stroke(255,180,150);
    strokeWeight(2);

    line(185,222,200,238);
    line(205,218,225,239);
    line(225,218,245,238);

    noStroke();

    fill(255,255,255,90);
    ellipse(205,222,18,5);

    stroke(120,70,30);
    strokeWeight(5);

    line(70,275,330,260);

    strokeWeight(3);

    line(70,282,330,263);

    noStroke();
}

function dibujarDiaNevado() {

    background(68, 199, 197);

    noStroke();

    fill(159, 240, 77);
    rect(0, 300, 400, 100);

    fill(227, 218, 41);
    ellipse(80, 64, 100, 100);

    fill(255);

    ellipse(200, 300, 150, 150);
    ellipse(200, 200, 100, 100);
    ellipse(200, 120, 75, 75);
}

function dibujarMuneco() {

    background(211, 235, 243);

    noStroke();

    fill(245, 250, 252);
    rect(0, 300, 400, 100);

    fill(255);

    stroke(170, 190, 198);
    strokeWeight(1);

    ellipse(200, 300, 150, 150);
    ellipse(200, 200, 100, 100);
    ellipse(200, 120, 75, 75);

    stroke(110, 75, 45);
    strokeWeight(5);

    line(150, 200, 95, 165);
    line(245, 200, 305, 165);

    noStroke();

    fill(40);

    ellipse(188, 115, 6, 6);
    ellipse(212, 115, 6, 6);

    fill(240, 130, 45);

    triangle(
        200,
        123,
        200,
        132,
        222,
        127
    );
}
