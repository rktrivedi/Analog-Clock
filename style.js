/* 12hour =360deg   -Hours Calculation
1hour=360/12
h hours= 30h +  m/2


60min = 30deg  -- Minutes Calculation
1 min = 0.5deg
m min = 0.5deg*m

60min = 360deg      --minutes calculation
1min =360/60 = 6deg
m min =6m

60sec = 360deg
1 sec = 360/60 = 6
s sec = 6*s

*/
let hr = document.getElementById('hour');
let min =document.getElementById('min');
let sec =document.getElementById('sec');

function displayTime(){

    // let date = new Date();
    const d = new Date();
    // let date = d.getTime();

 // Getting Hour,mins,secs

 let hh =d.getHours();
 let mm =d.getMinutes();
 let ss =d.getSeconds();

//  console.log(d + hh + mm +ss)

// Calculation for Setting up Variables.

 let hRotation = (30*hh + mm/2);
 let mRotation =6*mm;
 let sRotation =6*ss;

 hr.style.transform = `rotate(${hRotation}deg)`;
min.style.transform = `rotate(${mRotation}deg)`;
sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime,1000);