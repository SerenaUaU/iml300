let figure;
let words = [
  "You’re already graduating and still don’t have a plan?",
  "So what exactly are you going to do with your life?",
  "Everyone else is preparing for something.",
  "How can you just do nothing?",
  "Your parents didn’t raise you for this.",
  "You’re wasting your degree.",
  "People your age already have stable jobs.",
  "You can’t just drift like this forever.",
  "You’re falling behind everyone."
];
function preload(){
  figure = loadImage('figure.PNG')
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(4);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(random(255), 0, 0);
  imageMode(CENTER);
  image(figure,windowWidth/2,windowHeight/2,windowHeight/4,windowHeight/4);

  for (let x = 0; x <= width; x += 170) {
    for (let y = 0; y <= height; y += 40) {

      let w = random(words); 

      fill(random(150, 255),random(150),random(150));
      textSize(random(12, 20));

      text(w, x, y);
    }
  }
}


