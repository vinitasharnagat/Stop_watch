let seconds=document.getElementById(`seconds`);
let milliseconds=document.getElementById(`milliseconds`);
let start=document.getElementById(`start`);
let stop=document.getElementById(`stop`);
let reset=document.getElementById(`reset`);
let sec=0;
let millisec=0;
let timeInterval;

const timer=()=>{
    millisec++;

    if(millisec<9){
        milliseconds.innerHTML="0"+millisec;
    }

    if(millisec<9){
        milliseconds.innerHTML=millisec;
   
    }

    if(millisec>99){
        sec++;
        seconds.innerHTML="0"+sec;
        millisec=0;
        milliseconds.innerHTML="0"+0;
    }
    if(sec>9){
        sec.innerHTML=sec;

    }
}

// start

start.addEventListener(`click`,()=>{
    timeInterval=setInterval(timer,10);
})

// stop;

stop.addEventListener(`click`,()=>{
    clearInterval(timeInterval);
})

// reset
reset.addEventListener(`click`,()=>{
    clearInterval(timeInterval);
    sec="00";
    millisec="00";
    seconds.innerHTML=sec;
    milliseconds.innerHTML=millisec;
    console.log(seconds);
})
