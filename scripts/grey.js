let img;

function preload() {
    img = loadImage('https://avatars1.githubusercontent.com/u/50386683?s=460&v=4');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}   

function draw() {
    background('#FE6390');

    const centerY = height/2;
    const imageX = (width - img.width) / 2;
    const imageY = centerY - img.height/2;
    image(img, imageX, imageY);

    console.log(img.width, img.height);    
}
