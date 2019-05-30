function setup() {
    console.log("setup");
    createCanvas(800, 600);
}

function draw() {
    console.log(mouseX,  mouseY);
    const faceX = width / 2;
    const faceY = height / 2;
    const faceRadius = 150;
    background('#00bb88');
    fill(255, 204, 0);
    circle(faceX, faceY, faceRadius * 2);

    // 흰자 그리기
    fill('white');
    const leftEyeX = faceX - 70;
    const leftEyeY = faceY - 50;
    const rightEyeX = faceX + 70;
    const rightEyeY = faceY - 50;
    const eyeRadius = 50;
    
    // 왼쪽 흰자
    circle(leftEyeX, leftEyeY, eyeRadius * 2);
    // 오른쪽 흰자
    circle(faceX + 70, faceY - 50, eyeRadius * 2);

    // 눈동자 그리기
    fill('black');
    const pupilRadius = 25;
    let leftPupilX = leftEyeX;
    let rightPupilX = rightEyeX;
    let leftPupilY = leftEyeY;
    let rightPupilY = rightEyeY;
    let diffX = Math.abs(mouseX - faceX);
    let diffY = Math.abs(mouseY - leftEyeY);
    if (diffX > diffY) {
        if (mouseX < faceX) {
            leftPupilX = leftEyeX - (eyeRadius - pupilRadius);
            rightPupilX = rightEyeX - (eyeRadius - pupilRadius);
        } else {
            leftPupilX = leftEyeX + (eyeRadius - pupilRadius);
            rightPupilX = rightEyeX + (eyeRadius - pupilRadius);
        }
    } else {
        if (mouseY < leftEyeY) {                
            leftPupilY = leftEyeY - (eyeRadius - pupilRadius);
            rightPupilY = rightEyeY - (eyeRadius - pupilRadius);
        } else {
            leftPupilY = leftEyeY + (eyeRadius - pupilRadius);
            rightPupilY = rightEyeY + (eyeRadius - pupilRadius);
        }
    }

    // 왼쪽 눈동자
    circle(leftPupilX, leftPupilY, pupilRadius * 2);
    // 오른쪽 눈동자
    circle(rightPupilX, rightPupilY, pupilRadius * 2);

    // 코
    push();
    noFill();
    stroke('#00bb88');
    strokeWeight(7);
    triangle(faceX, faceY, faceX - 10, faceY + 20 , faceX + 10, faceY + 20);
    pop();

    // 입 그리기
    fill('red');
    arc(faceX, faceY + 50, 150, 100, 0, PI, CHORD);
}
