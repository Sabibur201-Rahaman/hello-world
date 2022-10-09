function getCurrentTime() {
  let date = new Date();
  console.log(date);
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let sec = date.getSeconds();
  let session = document.getElementById("session");
  if (hrs >= 12) {
    session.innerHTML = "Pm";
  } else {
    session.innerHTML = "Am";
  }
  if (hrs > 12) {
    hrs - 12;
  }
  if (hrs < 10) {
    "0" + hrs;
  }
  if (mins < 10) {
    "0" + mins;
  }
  if (sec < 10) {
    "0" + sec;
  }

  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = mins;
  document.getElementById("seconds").innerHTML = sec;

  // document.getElementById("date").innerHTML = date;
}
setInterval(getCurrentTime, 20);
console.log(getCurrentTime());
console.log(date);

// setTimeout(()=>{
// console.log((getCurrentTime()))
// },1000)
