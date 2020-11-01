

const colorInput = document.getElementById('color');
const weight = document.getElementById('weight');
const clear = document.getElementById('clear');
const paths = [];
let currentPath = [];

var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowWidth*0.5, windowHeight*0.5);
  centerCanvas();
  background(255, 255, 255);
}

function windowResized() {
    resizeCanvas(windowWidth*0.5, windowHeight*0.5);
    centerCanvas();
 
}



function draw() {
    noFill();
    

    if(mouseIsPressed){
        const point = {
            x: mouseX,
            y: mouseY,
            color: colorInput.value,
            weight: weight.value
        };
        currentPath.push(point);
    }
    
    paths.forEach(path => {
        beginShape();
        path.forEach(point => {
            stroke(point.color);
            strokeWeight(point.weight);
            vertex(point.x, point.y);
        });
        endShape();
    });
}

function mousePressed() {
    currentPath = [];
    paths.push(currentPath);
}

clear.addEventListener('click', () => {
    paths.splice(0);
    background(255);
});

function keyPressed() {
	if(key === 's' || key ==='S'){
    console.log("save the drawing here");
    saveCanvas(cnv, 'myCanvas', 'jpg');

    //saveJSON(points, "drawings.json");
  }
}

