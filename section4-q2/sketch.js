// テキスト「アニメーション」
let x, y, vx, vy;
let kakudo;

function setup(){
  createCanvas(windowWidth, windowHeight);
  vx = 8;
  vy = 8;
  kakudo = HALF_PI;
}

function draw(){
  background(160, 192, 255);
  // BLANK[2] (hint: 作った star 関数を使います)

    star(x, y, 60, kakudo);
    x += vx;
    y += vy;
    kakudo += HALF_PI/12;
      // 端の処理パターン (1) 反対側から出てくる
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }
}

function star(cx, cy, r, angle){
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI;
    // BLANK[1] (hint: angle 分だけ星を回転させるには？)
    var x = cx + cos(theta+kakudo) * r;
    var y = cy + sin(theta+kakudo) * r;
    vertex(x,y);
  }
  endShape(CLOSE);

}

function mouseClicked(){
  x = mouseX;
  y = mouseY;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
