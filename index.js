
const timeDisplay = document.getElementById('time');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton= document.querySelector('.reset');

let startTime;
let elapsedTime=0;
let timerId;

startButton.addEventListener('click',function(){
startTime=Date.now()-elapsedTime;
timerId=setInterval(updateTime,100);
  

startButton.disabled=true;
stopButton.disabled=false;
resetButton.disabled=true;

});

stopButton.addEventListener('click',function(){
clearInterval(timerId);
elapsedTime=Date.now()-startTime;

startButton.disabled=false;
stopButton.disabled=true;
resetButton.disabled=false;

});

resetButton.addEventListener('click',function(){
clearInterval(timerId);
elapsedTime=0;
timeDisplay.textContent='0:00:00';

startButton.disabled=false;
stopButton.disabled=true;
resetButton.disabled=true;


});

function updateTime(){
const now=Date.now();
const diff=now-startTime;
const ms=Math.floor((diff%1000)/10);
const s =Math.floor((diff/1000)%60);
const m =Math.floor((diff/(1000*60)%60));


let displayM = m;
let displayS = s;
let displayMs = ms;

  if (displayM < 10) {
   displayM = '0' + displayM;
  }

  if (displayS < 10) {
   displayS = '0' + displayS;
    }

  if (displayMs < 10) {
    displayMs = '0' + displayMs;
    }

timeDisplay.textContent = displayM + ':' + displayS + ':' + displayMs;

};







