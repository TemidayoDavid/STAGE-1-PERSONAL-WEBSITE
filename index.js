// UPDATE THE DATE and DAY IN UTC EVERY 1 SECOND

function refreshTime() {
  var currentTime = new Date();
  var day = currentTime.getDay();
  var minutes = currentTime.getUTCMinutes();
  var hours = currentTime.getUTCHours();
  var seconds = currentTime.getUTCSeconds();
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const getDay = daysOfTheWeek[day];
  

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  /*CONCAT THE TIME*/
  var concatTime = hours + ":" + minutes + ":" + seconds + " " + (hours < 12 ? "am" : "pm");
  //return concatTime;
  const theTime = (document.querySelector(".currentTimeUTC").innerHTML =
    concatTime);
  const theDay = (document.querySelector(".currentDay").innerHTML = getDay);
  return theTime, theDay;
}

//UPON LOADING OF PAGE, LISTEN AND TRIGGER FUCTION 'refreshTime every 1sec'
document.addEventListener("DOMContentLoaded", () =>
  setInterval(refreshTime, 1000)
);
