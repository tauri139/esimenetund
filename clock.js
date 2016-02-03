window.onload = function(){

  var clock = document.getElementById('clock');

  writeDate(); //selleks, et ei oleks alguses näha 0:0:0-i

  window.setInterval(function(){
    writeDate();
  }, 500);



};

function writeDate(){
  var time = new Date();
  var hour = addZeroBefore(time.getHours());
  var min = addZeroBefore(time.getMinutes());
  var sec = addZeroBefore(time.getSeconds());

  clock.innerHTML = hour + ':'+ min + ':' + sec;

}

function addZeroBefore(number){
  if(number < 10){
    number = "0" + number;
  }

  return number;

}
