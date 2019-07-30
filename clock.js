
// declaring my constant variables
const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector("#minute");
const secondHand = document.querySelector("#second");


function clock(){
    //var now resets clock after 24 hrs
var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
// console.log("Hour: " + hr + "Minute: " + min + "Second: " + sec);
// declaring my let variables for the keeping time algorthim
let hrPosition = hour * 360/12 + ((minute * 360/60)/12);
let minPosition = (minute * 360/60) + (second * 360/60)/60;
let secPosition = second * 360/60;
//declaring that the hr, sec, and min hand will roatate
//Example; the hr hand will rotate at a rate of the var hour times 360/12 plus the var minute times 360/60/12

hourHand.style.transform = "roatate(" + hrPosition + "deg)";
minuteHand.style.transform = "roatate(" + minPosition + "deg)";
secondHand.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(clock, 1000);






 