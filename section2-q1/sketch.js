// 小手調べ
function setup(){
  createCanvas(500,500);
  for(let i = 0; i < 10; i = i + 1){
    if(i < 5){
      stroke(255,0,0)
    }
    else{
      stroke(0,0,255)
    }
    ellipse(50, 50, 50-(i*5));
  }
}
