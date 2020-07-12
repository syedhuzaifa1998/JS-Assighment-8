
var min1=0;
var sec1=0;
var msec1=0;
var hour1=0;
var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecheading= document.getElementById("msec");
var hourheading= document.getElementById("hour");

var interval;
function timer(){

    if(msec1 >100){
    msec1=0;
    sec1++;
}
   if(sec1 >60)
{
    msec1=0;
    sec1=0;
    min1++;
}
if(min1 >60)
{
    msec1=0;
    sec1=0;
    min1=0;
    hour1++;
}
msecheading.innerHTML=msec1;
msec1++;
secheading.innerHTML=sec1;
minheading.innerHTML=min1;
hourheading.innerHTML=hour1;

}


function play(){


interval=setInterval(timer,10);
}

function pause(){
    clearInterval(interval);

}
function stop()
{
    clearInterval(interval);
    msec1=0;
    sec1=0;
    min1=0;
    msecheading.innerHTML="00";

secheading.innerHTML="00";
minheading.innerHTML="00";
}
