window.addEventListener('load',calculateTime)

function calculateTime() {
    let date = new Date();
    let offset = date.getTimezoneOffset();
    let dayNumber = date.getDay();
    let hour = date.getHours();
    let minute =date.getMinutes();
    let ampm = hour >=12 ? 'PM' : 'AM'; //so here, first we check,is the hour greater than or equal to 12. we use the ?if its yes then we use the string and put PM. the weka colon, if no weka AM
    let dayNames= ["SUN","MON","TUE","WED","THU","FRI","SAT"];                                 

    hour = hour % 12; //to change to 12 hr format
    hour = hour ? 12 : '12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    document.getElementById("day").innerHTML =
    dayNames[dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("ampm").innerHTML = ampm;

   // setTimeout(calculateTime,200);
   currentTime.setTime(currentTime.getTime() + offset * 60 * 1000);

}

