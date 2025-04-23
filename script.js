function showPanel() {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('panel').style.display = 'block';
  document.getElementById('frappe-panel').style.display = 'none';
  document.getElementById('latte-panel').style.display = 'none';
  document.getElementById('mocha-panel').style.display = 'none';
}

function changeCup(imageName) {
  document.getElementById('cup').src = imageName;
}

function showFrappePanel() {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('panel').style.display = 'none';
  document.getElementById('latte-panel').style.display = 'none';
  document.getElementById('mocha-panel').style.display = 'none';
  document.getElementById('frappe-panel').style.display = 'block';
  document.getElementById('frappe-image').src = "Frappe1.gif";
  frappeStep = 0;
}

let frappeStep = 0;
const frappeImages = [
  "Frappe1.gif",
  "Frappe2.gif",
  "Frappe3.gif",
  "Frappe4.gif",
  "Frappe5.gif"
];

function changeFrappeImage(step) {
  if (step === frappeStep + 1 && step < frappeImages.length) {
    frappeStep = step;
    document.getElementById('frappe-image').src = frappeImages[frappeStep];
  }
}

function showLattePanel() {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('panel').style.display = 'none';
  document.getElementById('frappe-panel').style.display = 'none';
  document.getElementById('mocha-panel').style.display = 'none';
  document.getElementById('latte-panel').style.display = 'block';
  document.getElementById('latte-image').src = 'LatteCup.gif';
}

function changeLatteImage(imageName) {
  document.getElementById('latte-image').src = imageName;
}

function showMochaPanel() {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('panel').style.display = 'none';
  document.getElementById('frappe-panel').style.display = 'none';
  document.getElementById('latte-panel').style.display = 'none';
  document.getElementById('mocha-panel').style.display = 'block';
  document.getElementById('mocha-image').src = 'MochaCup.gif';
}

function changeMochaImage(imageName) {
  document.getElementById('mocha-image').src = imageName;
}

function goBack() {
  document.getElementById('menu').style.display = 'block';
  document.getElementById('panel').style.display = 'none';
  document.getElementById('frappe-panel').style.display = 'none';
  document.getElementById('latte-panel').style.display = 'none';
  document.getElementById('mocha-panel').style.display = 'none';
}
