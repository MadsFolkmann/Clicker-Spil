"use strict"

let points = 0;


window.addEventListener("load", start)

function start() {
  console.log("JavaScript kører!")

  document.querySelector("#ball1_container").classList.add("ball_zoom_out");
  document.querySelector("#ball2_container").classList.add("ball_zoom_out");
  document.querySelector("#ball3_container").classList.add("ball_zoom_out");
  // document.querySelector("#gold_ball_container").classList.add("rare_ball_zoom_out");

   document.querySelector("#ball1_container").addEventListener("mousedown", clickBall);
   document.querySelector("#ball2_container").addEventListener("mousedown", clickBall);
   document.querySelector("#ball3_container").addEventListener("mousedown", clickBall);
}


function clickBall() {
  console.log("Click ball");
  // Forhindr gentagne clicks
  document.querySelector("#ball1_container").removeEventListener("mousedown", clickBall);
  document.querySelector("#ball2_container").removeEventListener("mousedown", clickBall);
  document.querySelector("#ball3_container").removeEventListener("mousedown", clickBall);

  // Stop coin container
  document.querySelector("#ball1_container").classList.add("paused");
  document.querySelector("#ball2_container").classList.add("paused");
  document.querySelector("#ball3_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#ball1_sprite").classList.add("shot");
  document.querySelector("#ball2_sprite").classList.add("shot");
  document.querySelector("#ball3_sprite").classList.add("shot");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#ball1_container").addEventListener("animationend", ballGone);
  document.querySelector("#ball2_container").addEventListener("animationend", ballGone);
  document.querySelector("#ball3_container").addEventListener("animationend", ballGone);

   incrementPoints();
}

  function incrementPoints() {
    console.log("incrementPoint");
    points++;
    displayPoints();
  }

  function displayPoints() {
    document.querySelector("#point_count").textContent = points;
  }
  
function ballGone() {
  console.log("Ball gone")
  // fjern event der bringer os herind
  document.querySelector("#ball1_container").removeEventListener("animationend", ballGone);
  document.querySelector("#ball2_container").removeEventListener("animationend", ballGone);
  document.querySelector("#ball3_container").removeEventListener("animationend", ballGone);

  // fjern forsvind-animation
  document.querySelector("#ball1_sprite").classList.remove("shot");
  document.querySelector("#ball2_sprite").classList.remove("shot");
  document.querySelector("#ball3_sprite").classList.remove("shot");

  // fjern pause
  document.querySelector("#ball1_container").classList.remove("paused");
  document.querySelector("#ball2_container").classList.remove("paused");
  document.querySelector("#ball3_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#ball1_container").classList.remove("ball_zoom_out");
  document.querySelector("#ball1_container").offsetWidth;
  document.querySelector("#ball1_container").classList.add("ball_zoom_out");
  // ball2
  document.querySelector("#ball2_container").classList.remove("ball_zoom_out");
  document.querySelector("#ball2_container").offsetWidth;
  document.querySelector("#ball2_container").classList.add("ball_zoom_out");
  // ball 3
  document.querySelector("#ball3_container").classList.remove("ball_zoom_out");
  document.querySelector("#ball3_container").offsetWidth;
  document.querySelector("#ball3_container").classList.add("ball_zoom_out");
  // gør det muligt at klikke på coin igen
  document.querySelector("#ball1_container").addEventListener("mousedown", clickBall);
  document.querySelector("#ball2_container").addEventListener("mousedown", clickBall);
  document.querySelector("#ball3_container").addEventListener("mousedown", clickBall);
}













