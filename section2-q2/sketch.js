// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if(i % 2 == 0 && j % 2 == 0 || i % 2 != 0 && j % 2 != 0){
        fill(255);
        rect(size*i, size*j, size, size);
      }
      else {
        fill(192);
        rect(size*i, size*j, size, size);

        if(j < 3){
        fill(255,0,0);
      }
      else if(j > 2 && j < 5){
        fill(192);
      }
      else{
        fill(0);
      }
        ellipse(size*i+size/2, size*j+size/2, 20);
      }
  }
}
}
