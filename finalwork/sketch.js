// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth, windowHeight);
  string=0;
}

function draw(){
  background(160, 192, 255);
  string = "残りの日数は" + days(2020, 11, 25) + "日" + hours() + "時間" + minutes() + "分" + seconds() + "秒です";
  textSize(32);
  fill(0);
  text(string, 100, 300);
}

function isLeapYear(y){
  return (y%4 == 0 ) && (y%100 != 0) || (y%400 == 0);
}

function daysInMonth(y,m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function daysOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function days(y, m, d){
  var today = new Date();
  var leftDaysThisYear=0;
  var leftDays=0;
  let a=0, r;

  if(isLeapYear(today.getFullYear())){
    leftDaysThisYear = 366 - daysOfYear(today.getFullYear(), today.getMonth()+1, today.getDate());
  }
  else{
    leftDaysThisYear = 365 - daysOfYear(today.getFullYear(), today.getMonth()+1, today.getDate());
  }
  console.log(leftDaysThisYear);

if(y -  today.getFullYear() >= 2){
  for(let j=today.getFullYear()+1; j<y; j++){
    leftDays += 365;
    if(isLeapYear(j)){
      leftDays ++;
    }
  }
}
console.log(leftDays);
  r = leftDaysThisYear+leftDays;

  if(y - today.getFullYear() >= 1){
    r += daysOfYear(y,m,d);
  }

  return r;
}

function hours(){
  var today = new Date();
  let leftHour=0;
  leftHour = 24 - today.getHours();
  return leftHour;
}

function minutes() {
  var today = new Date();
  let leftMinute=0;
  leftMinute = 60 - today.getMinutes();
  return leftMinute;
}

function seconds(){
  var today = new Date();
  let leftSecond=0;
  leftSecond = 60 - today.getSeconds();
  return leftSecond;
}
