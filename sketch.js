let tratorX = 0;
let carroX = 400;

function setup() {
  createCanvas(800, 400);
  textFont('Georgia');
}

function draw() {
  background('#87CEEB'); // Céu azul claro

  // Divisão campo e cidade
  noStroke();
  fill('#90EE90'); // Campo
  rect(0, 200, 400, 200);

  fill('#D3D3D3'); // Cidade
  rect(400, 200, 400, 200);

  desenharSol();
  desenharBandeirinhas();

  // Campo
  desenharArvore(100, 250);
  desenharTrator(tratorX, 300);
  tratorX += 1;
  if (tratorX > 400) tratorX = -80;

  // Cidade
  desenharPredio(500, 150, 60, 120);
  desenharPredio(580, 170, 50, 100);
  desenharCarro(carroX, 330);
  carroX -= 1;
  if (carroX < 400) carroX = 820;

  // Texto
  fill(0);
  textSize(28);
  textAlign(CENTER);
  text("🎉 Festejando Campo e Cidade 🎉", width / 2, 50);
}

function desenharSol() {
  fill('yellow');
  ellipse(700, 80, 60, 60);
  fill(0);
  ellipse(690, 75, 5, 5);
  ellipse(710, 75, 5, 5);
  arc(700, 85, 20, 10, 0, PI); // sorriso
}

function desenharBandeirinhas() {
  for (let i = 0; i < width; i += 40) {
    fill(random(['red', 'blue', 'green', 'yellow', 'purple']));
    triangle(i, 100, i + 20, 120, i + 40, 100);
  }
}

function desenharArvore(x, y) {
  fill('#8B4513');
  rect(x + 15, y + 40, 10, 30);
  fill('green');
  ellipse(x + 20, y + 30, 50, 50);
}

function desenharTrator(x, y) {
  fill('blue');
  rect(x, y, 60, 30);
  fill('gray');
  ellipse(x + 15, y + 30, 20, 20);
  ellipse(x + 45, y + 30, 25, 25);
}

function desenharPredio(x, y, w, h) {
  fill('#696969');
  rect(x, y, w, h);
  fill('white');
  for (let i = y + 10; i < y + h - 10; i += 20) {
    rect(x + 10, i, 10, 10);
  }
}

function desenharCarro(x, y) {
  fill('red');
  rect(x, y, 50, 20);
  fill('black');
  ellipse(x + 10, y + 20, 15, 15);
  ellipse(x + 40, y + 20, 15, 15);
}