function setup() {
    console.log("setup");
    createCanvas(800, 600);
}

function draw() {
    console.log("draw");
    background('#00bb88');
    fill(255, 204, 0);
    circle(400, 300, 300);
    fill('white');
    circle(400 - 70, 300 - 50, 100);
    circle(400 + 70, 300 - 50, 100);
    fill('black');
    circle(400 - 70, 300 - 50, 50);
    circle(400 + 70, 300 - 50, 50);
    fill('red');
    arc(400, 350, 150, 100, 0, PI, CHORD);
}
