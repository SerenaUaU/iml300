let words = [
  "Why aren’t you studying?",
  "Do you want to ruin your future?",
  "Everyone else is working hard.",
  "How can you be so irresponsible?",
  "Your parents sacrificed so much for you.",
  "You’re wasting your potential.",
  "What kind of life will you have like this?",
  "You’re falling behind everyone else.",
  "You should be ashamed of yourself."
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(4);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(random(150), 0, 0);

  for (let x = 0; x <= width; x += 170) {
    for (let y = 0; y <= height; y += 40) {

      let w = random(words); 

      fill(random(150, 255),random(150),random(150));
      textSize(random(12, 24));

      text(w, x, y);
    }
  }
}


