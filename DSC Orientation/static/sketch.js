

const colorInput = document.getElementById('color');
const weight = document.getElementById('weight');
//const clear = document.getElementById('clear');
const paths = [];
let currentPath = [];

document.getElementById('clear').addEventListener("click", clearCanvas); 
//document.getElementById('predict').addEventListener("click", scanvas); 
var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowHeight*0.5, windowHeight*0.5);
  centerCanvas();
  background(255, 255, 255);
}

function windowResized() {
    resizeCanvas(windowHeight*0.5, windowHeight*0.5);
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

function scanvas(){

    var canvasData = canvas.toDataURL("image/png");
    var ajax = new XMLHttpRequest();
    ajax.open("POST",'save.php',false);
    ajax.setRequestHeader('Content-Type', 'application/upload');
    ajax.send(canvasData); 

}
function clearCanvas(){
    background(255);
}


