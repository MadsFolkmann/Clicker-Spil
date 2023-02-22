"use strict"

let points = 0;
let cards = 0

window.addEventListener("load", start)

function start() {
  console.log("JavaScript kører!")

  document.querySelector("#ball1_container").classList.add("ball_zoom_in");
  document.querySelector("#ball2_container").classList.add("ball_zoom_in");
  document.querySelector("#ball3_container").classList.add("ball_zoom_in");
  document.querySelector("#gold_ball_container").classList.add("gold_ball_zoom_in");
  document.querySelector("#joachim_container").classList.add("joachim_zoom_in");

   document.querySelector("#ball1_container").addEventListener("mousedown", clickBall);
   document.querySelector("#ball2_container").addEventListener("mousedown", clickBall2);
   document.querySelector("#ball3_container").addEventListener("mousedown", clickBall3);
   document.querySelector("#gold_ball_container").addEventListener("mousedown", clickGoldenBall);
   document.querySelector("#joachim_container").addEventListener("mousedown", clickJoachim);
}


//Alt der giver 1 plus point

function clickBall() {
  console.log("Click ball");
  // Forhindr gentagne clicks
  document.querySelector("#ball1_container").removeEventListener("mousedown", clickBall);

  // Stop coin container
  document.querySelector("#ball1_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#ball1_sprite").classList.add("shot");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#ball1_container").addEventListener("animationend", ballGone);

   incrementPoints();
}

function clickBall2() {
  console.log("Click ball2");
  // Forhindr gentagne clicks

  document.querySelector("#ball2_container").removeEventListener("mousedown", clickBall2);
  // Stop coin container
  document.querySelector("#ball2_container").classList.add("paused");
  // sæt forsvind-animation på coin
  document.querySelector("#ball2_sprite").classList.add("shot");
  // når forsvind-animation er færdig: coinGone
  document.querySelector("#ball2_container").addEventListener("animationend", ballGone2);

    incrementPoints();

}

function clickBall3() {
  console.log("Click ball3");
  // Forhindr gentagne clicks
  document.querySelector("#ball3_container").removeEventListener("mousedown", clickBall3);
  // Stop coin container
  document.querySelector("#ball3_container").classList.add("paused");
  // sæt forsvind-animation på coin
  document.querySelector("#ball3_sprite").classList.add("shot");
  // når forsvind-animation er færdig: coinGone
  document.querySelector("#ball3_container").addEventListener("animationend", ballGone3);

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
  // fjern forsvind-animation
  document.querySelector("#ball1_sprite").classList.remove("shot");
  // fjern pause
  document.querySelector("#ball1_container").classList.remove("paused");
  // genstart falling animation
  document.querySelector("#ball1_container").classList.remove("ball_zoom_in");
  document.querySelector("#ball1_container").offsetWidth;
  document.querySelector("#ball1_container").classList.add("ball_zoom_in");
  // gør det muligt at klikke på coin igen
  document.querySelector("#ball1_container").addEventListener("mousedown", clickBall);
}

function ballGone2() {
  console.log("Ball gone");
  // fjern event der bringer os herind
  document.querySelector("#ball2_container").removeEventListener("animationend", ballGone2);
  // fjern forsvind-animation
  document.querySelector("#ball2_sprite").classList.remove("shot");
  // fjern pause
  document.querySelector("#ball2_container").classList.remove("paused");
  // genstart falling animation
  document.querySelector("#ball2_container").classList.remove("ball_zoom_in");
  document.querySelector("#ball2_container").offsetWidth;
  document.querySelector("#ball2_container").classList.add("ball_zoom_in");
  // gør det muligt at klikke på coin igen
  document.querySelector("#ball2_container").addEventListener("mousedown", clickBall2);

}

function ballGone3() {
  console.log("Ball gone3");
  // fjern event der bringer os herind
  document.querySelector("#ball3_container").removeEventListener("animationend", ballGone3);
  // fjern forsvind-animation
  document.querySelector("#ball3_sprite").classList.remove("shot");
  // fjern pause
  document.querySelector("#ball3_container").classList.remove("paused");
  // genstart falling animation
  document.querySelector("#ball3_container").classList.remove("ball_zoom_in");
  document.querySelector("#ball3_container").offsetWidth;
  document.querySelector("#ball3_container").classList.add("ball_zoom_in");
  // gør det muligt at klikke på coin igen

  document.querySelector("#ball3_container").addEventListener("mousedown", clickBall3);
}

//Alt der giver 5 plus point

function clickGoldenBall() {
  console.log("Click goldenBall");
  // Forhindr gentagne clicks
  document.querySelector("#gold_ball_container").removeEventListener("mousedown", clickGoldenBall);

  // Stop ball container
  document.querySelector("#gold_ball_container").classList.add("paused");

  // sæt forsvind-animation på ball
  document.querySelector("#gold_ball_sprite").classList.add("shot");

  // når forsvind-animation er færdig: goldenBallGone
  document.querySelector("#gold_ball_container").addEventListener("animationend", goldenBallGone);

  incrementGoldPoints();
}

  function incrementGoldPoints() {
    console.log("incrementGoldPoint");
    points+= 5;
    displayGoldPoints();
  }

  function displayGoldPoints() {
    document.querySelector("#point_count").textContent = points;
  }
  

function goldenBallGone() {
  console.log("gold ball gone");
  // fjern event der bringer os herind
  document.querySelector("#gold_ball_container").removeEventListener("animationend", goldenBallGone);

  // fjern forsvind-animation
  document.querySelector("#gold_ball_sprite").classList.remove("shot");

  // fjern pause
  document.querySelector("#gold_ball_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#gold_ball_container").classList.remove("gold_ball_zoom_in");
  document.querySelector("#gold_ball_container").offsetWidth;
  document.querySelector("#gold_ball_container").classList.add("gold_ball_zoom_in");
  // skal have sat en timer på så den ikke kommer tilbage med det samme

  // gør det muligt at klikke på bolden igen
  document.querySelector("#gold_ball_container").addEventListener("mousedown", clickGoldenBall);
}

//Alt der giver minus point

function clickJoachim() {
  console.log("Click joachim");
  // Forhindr gentagne clicks
  document.querySelector("#joachim_container").removeEventListener("mousedown", clickJoachim);

  // Stop coin container
  document.querySelector("#joachim_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#joachim_sprite").classList.add("spiral");

  // når forsvind-animation er færdig: coinGone
  document.querySelector("#joachim_container").addEventListener("animationend", joachimGone);

    incrementCard();
}

  function incrementCard() {
    console.log("incrementCard");
    cards++;
     displayIncrementedCard();
  }
  function displayIncrementedCard() {
    console.log("#card" + cards)
    document.querySelector("#card" + cards).classList.remove("no_card");
    document.querySelector("#card" + cards).classList.add("activate_card");
  }


function joachimGone() {
  // fjern event der bringer os herind
  document.querySelector("#joachim_container").removeEventListener("animationend", joachimGone);

  // fjern forsvind-animation
  document.querySelector("#joachim_sprite").classList.remove("spiral");

  // fjern pause
  document.querySelector("#joachim_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#joachim_container").classList.remove("joachim_zoom_in");
  document.querySelector("#joachim_container").offsetWidth;
  document.querySelector("#joachim_container").classList.add("joachim_zoom_in");

  // gør det muligt at klikke på coin igen
  document.querySelector("#joachim_container").addEventListener("click", clickJoachim);
}







