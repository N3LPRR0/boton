var btn_rojo,btn_verde,btn_azul,btn_naranja;
var r=0;
var g=0;
var b=0;
function setup(){
createCanvas(400,400);
btn_rojo=createButton("rojo");
btn_rojo.position(100,50);
btn_rojo.mousePressed(rojo_bg);
btn_verde=createButton("verde");
btn_verde.position(200,50);
btn_verde.mousePressed(verde_bg);
btn_azul=createButton("azul");
btn_azul.position(300,50);
btn_azul.mousePressed(azul_bg);
btn_naranja=createButton("naranja");
btn_naranja.position(100,100);
btn_naranja.mousePressed(naranja_bg);
}
function draw(){
background(r,g,b);
}
function rojo_bg(){
    r=255;
    g=0;
    b=0;
}

function verde_bg(){
    r=0;
    g=255;
    b=0;
}
function azul_bg(){
    r=0;
    g=0;
    b=255;
}

function naranja_bg(){
    r=255;
    g=128;
    b=0;
}
