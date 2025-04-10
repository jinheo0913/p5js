let mousepos = 310; // 혀 위치
let mousepos2 = 310;
let clothcolor = 0; // 옷 색
let clothcolor2 = 0;
let clothcolor3 = 0;
let faceY = 300; // 얼굴 위치 변수
let isShortHair = false; 

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(225);
  stroke(0);
  strokeWeight(2);
  
//뒷머리
  fill(170, 100, 20);
  if (isShortHair) {
    // 단발
    quad(200, 240, 200, 400, 400, 400, 400, 240);
  } else {
    // 긴 머리
    quad(200, 240, 170, 500, 430, 500, 400, 240);
  }


  // 옷
  stroke(0);
  fill(clothcolor, clothcolor2, clothcolor3);
  square(300, 570, 230, 50);

  // 어깨
  stroke(0);
  fill(255, 190, 140);
  arc(300, 455, 100, 100, 0, radians(180));

  // 목
  fill(255, 190, 140);
  rectMode(CENTER);
  noStroke();
  rect(300, 400, 40, 130);

  // 얼굴
  drawFace(300, faceY);
}

function drawFace(x, y) {
  
    // 머리통
  stroke(0);
  fill(170, 100, 20);
  ellipse(x, y-40, 220, 199); 
  
  // 귀
  fill(255, 190, 140);
  ellipse(x - 100, y, 40, 50);
  ellipse(x + 100, y, 40, 50);
  fill(255, 170, 140);
  ellipse(x + 100, y, 16, 24);
  ellipse(x - 100, y, 16, 24);

  // 귀걸이
  fill(255);
  rect(x - 104, y + 20, 4, 10);
  rect(x + 100, y + 20, 4, 10);

  // 얼굴형
  stroke(0);
  fill(255, 190, 140);
  ellipse(x, y, 200, 230);

  // 볼터치
  noStroke();
  fill(255, 80, 80);
  ellipse(x - 70, y + 30, 30, 10);
  ellipse(x + 70, y + 30, 30, 10);

  // 앞머리
  fill(170, 100, 20);
  noStroke();
  arc(x, y - 120, 140, 150, radians(30), radians(130));
  arc(x - 40, y - 117, 150, 150, radians(-10), radians(140));
  arc(x + 40, y - 117, 140, 150, radians(40), radians(130));
  arc(x - 100, y - 70, 100, 100, radians(-30), radians(100));
  arc(x + 100, y - 70, 100, 100, radians(80), radians(150));

  // 머리 디테일 라인
  noFill();
  arc(x - 30, y - 140, 60, 60, radians(280), 0);
  arc(x + 20, y - 140, 30, 30, radians(180), radians(250));

  // 이마 아래쪽 머리 덮기용
  fill(255, 190, 140);
  noStroke();
  arc(x + 14, y - 90, 100, 100, radians(85), radians(95));
  arc(x - 30, y - 80, 70, 90, radians(85), radians(105));

  // 눈
  const leftEyeX = x - 40;
  const rightEyeX = x + 40;
  const eyeY = y - 5;
  const eyeRadiusX = 6;
  const eyeRadiusY = 8;

  let leftPupilX = constrain(map(mouseX, 0, width, leftEyeX - eyeRadiusX, leftEyeX + eyeRadiusX), leftEyeX - eyeRadiusX, leftEyeX + eyeRadiusX);
  let leftPupilY = constrain(map(mouseY, 0, height, eyeY - eyeRadiusY, eyeY + eyeRadiusY), eyeY - eyeRadiusY, eyeY + eyeRadiusY);
  let rightPupilX = constrain(map(mouseX, 0, width, rightEyeX - eyeRadiusX, rightEyeX + eyeRadiusX), rightEyeX - eyeRadiusX, rightEyeX + eyeRadiusX);
  let rightPupilY = constrain(map(mouseY, 0, height, eyeY - eyeRadiusY, eyeY + eyeRadiusY), eyeY - eyeRadiusY, eyeY + eyeRadiusY);

  stroke(0);
  noFill();
  arc(leftEyeX, y - 20, 35, 35, radians(200), radians(340));
  arc(rightEyeX, y - 20, 35, 35, radians(200), radians(340));

  fill(255);
  ellipse(leftEyeX, eyeY, 30, 40);
  ellipse(rightEyeX, eyeY, 30, 40);

  fill(170, 100, 20);
  ellipse(leftPupilX, leftPupilY, 20, 20);
  ellipse(rightPupilX, rightPupilY, 20, 20);

  // 코
  stroke(0);
  fill(255, 190, 145);
  line(x, y + 10, x, y + 20);
  arc(x, y + 30, 20, 15, radians(90), radians(270));

  // 입
  stroke(0);
  fill(235, 30, 49);
  arc(mousepos, y + 55, 20, 50, 0, radians(180));
  line(x - 30, y + 55, x + 30, y + 55);
  line(mousepos2, y + 55, mousepos2, y + 69);
}

function keyPressed() {
  if (key === 'R' || key === 'r') {
    clothcolor = 255;
    clothcolor2 = 0;
    clothcolor3 = 0;
  }
  if (key === 'G' || key === 'g') {
    clothcolor = 0;
    clothcolor2 = 255;
    clothcolor3 = 0;
  }
  if (key === 'B' || key === 'b') {
    clothcolor = 0;
    clothcolor2 = 0;
    clothcolor3 = 255;
  }

  if (keyCode === RIGHT_ARROW) {
    mousepos += 5;
    mousepos2 += 5;
  }
  if (keyCode === LEFT_ARROW) {
    mousepos -= 5;
    mousepos2 -= 5;
  }

  // 얼굴 위아래 이동
  if (keyCode === UP_ARROW) {
    faceY = constrain(faceY - 5, 250, 350); // 위로, 최소 250
  }
  if (keyCode === DOWN_ARROW) {
    faceY = constrain(faceY + 5, 250, 350); // 아래로, 최대 350
  }

}
function mousePressed() {
  // 뒷머리 길이 전환 (긴 머리 ↔ 단발)
  isShortHair = !isShortHair;
}
