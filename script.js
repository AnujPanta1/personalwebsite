
let elem = document.getElementById("game_body");

let board;

function setup(){
    canvas = createCanvas(elem.offsetWidth,elem.offsetHeight);
    canvas.parent(elem);

    board = new Board();
}

function draw(){
    background(51);
    board.show();
}

function windowResized(){
    resizeCanvas(elem.offsetWidth,elem.offsetHeight);
}

class Board{

    constructor(){
        this.pos = createVector();
        this.w = width*0.8;
        this.h = height*0.8;
    }

    show(){
        fill(255,0,0);
        rect(this.pos.x,this.pos.y,this.w,this.h);
    }
}
