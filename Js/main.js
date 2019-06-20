function showTime() {
    var clock = document.getElementById("clock");
    var time = new Date();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var currentTime = pad(hr,2) + ":" + pad(min,2) + ":" + pad(sec,2) ;
    clock.innerHTML = currentTime;

setTimeout(showTime , 1000);
return hr;
}

var tl = new TimelineMax();


tl
.set(clock, {autoalpha:0, x:-1000})
.to(clock,1, {autoalpha:1, x:0});

function pad(number,length){
var str = '' + number;
while (str.length < length) {
    str = '0' + str;
}
return str;
}


function changeBackground(){
var d = showTime(),
    backgroundTl = new TimelineMax(),
    main = document.getElementById('main');
if (d < 6 || d >= 19){
    document.body.style.background = 'url("./Images/Night.jpg")';
}else if(d >= 6 || d > 19){
    document.body.style.backgroundImage = 'url("./Images/Day.jpg")'; 
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    
}
}

window.onload = function(){
showTime();
changeBackground();
};