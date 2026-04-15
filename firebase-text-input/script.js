// Your web app's Firebase configuration
//const firebaseConfig = {
//  apiKey: "AIzaSyAFajdu_Y13KgwcZA3LPJmj2j_nw7SoB0s",
//  authDomain: "collective-input.firebaseapp.com",
//  projectId: "collective-input",
//  storageBucket: "collective-input.appspot.com",
//  messagingSenderId: "338519851864",
//  appId: "1:338519851864:web:5fb3b64d1cad63b20b1b2d",
//  measurementId: "G-G0J7EQCZPC"
//};

const firebaseConfig = {
  apiKey: "AIzaSyC6yLYYn0XuXNSIQRS5IPsRjwEN8-eQQGs",
  authDomain: "iml300-firebase-demo-5d180.firebaseapp.com",
  projectId: "iml300-firebase-demo-5d180",
  storageBucket: "iml300-firebase-demo-5d180.firebasestorage.app",
  messagingSenderId: "204795564234",
  appId: "1:204795564234:web:87e818b2eaa4fce923a433"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
let dbRef = db.ref("text");

let chatContainer = document.getElementById("chat-container");
let entry = document.getElementById("text-input-entry");
let share = document.getElementById("text-input-submit");

dbRef.on("child_added", gotText);

// Morandi blue-greens: low saturation, dusty, muted
// comp = the washed warm opposite (dusty rose / sand / clay)
const colorPalette = [
  { bg: "#a8b8b4", text: "#3d4e4b", comp: "#b8ada8", compText: "#4e433d" },
  { bg: "#b2c0bc", text: "#384543", comp: "#c0b6b2", compText: "#453e38" },
  { bg: "#98aeaa", text: "#354240", comp: "#ae9e98", compText: "#423835" },
  { bg: "#adbdbb", text: "#384544", comp: "#bdadab", compText: "#453838" },
  { bg: "#9fb5b0", text: "#364442", comp: "#b5a59f", compText: "#443c36" },
  { bg: "#b4c2bf", text: "#3a4746", comp: "#c2b8b4", compText: "#47403a" },
  { bg: "#93acaa", text: "#324140", comp: "#ac9d93", compText: "#413832" },
  { bg: "#a6b9b6", text: "#374644", comp: "#b9aea6", compText: "#464137" },
  { bg: "#c0ccc9", text: "#3e4e4c", comp: "#ccc2c0", compText: "#4e453e" },
  { bg: "#8fa8a5", text: "#2f3e3c", comp: "#a89a8f", compText: "#3e362f" },
  { bg: "#b8c5c2", text: "#3c4a48", comp: "#c5bcb8", compText: "#4a443c" },
  { bg: "#a4b5b2", text: "#364442", comp: "#b5aba4", compText: "#443e36" }
];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function generateShape() {
  const shapeType = Math.floor(randomBetween(0, 5));
  const fontSize = randomBetween(13, 25);
  const width = Math.round(randomBetween(110, 250));
  const height = Math.round(randomBetween(75, 155));

  let borderRadius;
  switch (shapeType) {
    case 0:
      borderRadius = "10px";
      break;
    case 1:
      borderRadius = "50%";
      break;
    case 2:
      borderRadius = `${Math.round(randomBetween(28, 58))}px`;
      break;
    case 3:
      const tl = Math.round(randomBetween(0, 55));
      const tr = Math.round(randomBetween(0, 55));
      const br = Math.round(randomBetween(0, 55));
      const bl = Math.round(randomBetween(0, 55));
      borderRadius = `${tl}px ${tr}px ${br}px ${bl}px`;
      break;
    case 4:
      borderRadius = `${Math.round(randomBetween(38, 75))}px ${Math.round(randomBetween(10, 28))}px`;
      break;
  }

  const color = colorPalette[Math.floor(randomBetween(0, colorPalette.length))];
  return { fontSize, width, height, borderRadius, color };
}

function gotText(data) {
  let value = data.val();
  const shape = generateShape();

  const div = document.createElement("div");
  div.classList.add("response");
  div.textContent = value;

  div.style.fontSize = shape.fontSize + "px";
  div.style.width = shape.width + "px";
  div.style.height = shape.height + "px";
  div.style.borderRadius = shape.borderRadius;
  div.style.backgroundColor = shape.color.bg;
  div.style.color = shape.color.text;

  div.addEventListener("mouseenter", () => {
    div.style.backgroundColor = shape.color.comp;
    div.style.color = shape.color.compText;
  });
  div.addEventListener("mouseleave", () => {
    div.style.backgroundColor = shape.color.bg;
    div.style.color = shape.color.text;
  });

  chatContainer.prepend(div);
}

const textInputSubmit = document.getElementById("text-input-submit");
textInputSubmit.addEventListener("click", submitText);

let textContainerElement = document.getElementById("text-input-entry");

function submitText() {
  let textToSubmit = textContainerElement.value;
  let newKey = dbRef.push().key;
  let updates = {};
  updates[newKey] = textToSubmit;
  dbRef.update(updates);
}

function submitlock() {
  entry.remove();
  share.value = "Thanks for telling me.";
  share.disabled = true;
  share.style.width = "70%";
}
