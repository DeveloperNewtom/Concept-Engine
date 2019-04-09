//Concept Engine BETA 2.49

//IMPORTANT VARIABLES
var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
var text = document.getElementById("command");

function draw(x1, y1, x2, y2) {
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//Please free to edit this class if there are any bugs
class Cube {
  constructor(origin, height, width, depth) {
    
    this.origin = origin;
    this.height = height;
    this.width = width;
    this.depth = depth;
    
    var a = [origin, origin];
    var b = [a[0], a[1] + height];
    var c = [a[0] + depth, a[1] + depth];
    var d = [c[0], c[1] + height];
    var e = [a[0] + width, a[0]];
    var f = [e[0], e[1] + height];
    var g = [c[0] + width, c[0]];
    var h = [g[0], g[0]];
    
    draw(a[0], a[1], b[0], b[1]);
    draw(a[0], a[1], c[0], c[1]);
    draw(a[0], a[1], e[0], e[1]);
    draw(c[0], c[1], d[0], d[1]);
    draw(c[0], c[1], g[0], g[1]);
    draw(g[0], g[1], e[0], e[1]);
    draw(g[0], g[1], h[0], h[1]);
    draw(b[0], b[1], d[0], d[1]);
    draw(d[0], d[1], h[0], h[1]);
    draw(h[0], h[1], f[0], f[1]);
    draw(f[0], f[1], b[0], b[1]);
    draw(e[0], e[1], f[0], f[1]);
  }
}

function calculate() {
  eval(text.value);
}

//Write Your Code Here. Please tell me if there are any bugs.
//BTW This is still in beta.

//Example of creating a new Cube object

//var cube1 = new Cube(10, 50, 50, 20);

//If there any Bugs Report them here:

//Comment by [Your Name]: [Issue]
