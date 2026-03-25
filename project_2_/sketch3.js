function setup() {
  createCanvas(windowWidth / 2, windowHeight);
  //noLoop();
  frameRate(10);
}

function draw() {
  background(220);
  for (i = 50; i <= width - 50; i = i + 50) {
    for (u = 50; u <= height - 50; u = u + 50) {
      for (j = 1; j < random(50, 100); j = j + 20) {
        fill(250 - i / 2, 0, i, 20); //gradient
        //noFill();
        stroke(i, j, u, 100);
        strokeWeight(random(1, 1.5));
        circle(i, u, j);
        fill(u, j, i, 10);
        noStroke();
        rectMode(CENTER);
        rect(i, random(200, 400), 50);
      }
    }
  }
}
