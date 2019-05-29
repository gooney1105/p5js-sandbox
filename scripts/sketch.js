function setup() {
    console.log("setup");
    createCanvas(800, 600);
}

function draw() {
    console.log("draw");
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
    const leftPupilX = leftEyeX - (eyeRadius - pupilRadius);
    const rightPupilX = rightEyeX - (eyeRadius - pupilRadius);

    // 왼쪽 눈동자
    circle(leftPupilX, leftEyeY, pupilRadius * 2);
    // 오른쪽 눈동자
    circle(rightPupilX, faceY - 50, pupilRadius * 2);

    // 입 그리기
    fill('red');
    arc(faceX, faceY + 50, 150, 100, 0, PI, CHORD);
}
