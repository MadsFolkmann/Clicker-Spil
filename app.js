"use strict"

let points = 0;
let cards = 0

window.addEventListener("load", start)

function start() {
  console.log("JavaScript kører!")

  //start animationer
  startAnimationer();

  //Click
   click();

  //position
  positionering();

  //restart
   setupRestart();
}


function setupRestart() {
  document.querySelector("#ball1_container").addEventListener("animationiteration", ballRestart);
  document.querySelector("#ball2_container").addEventListener("animationiteration", ballRestart);
  document.querySelector("#ball3_container").addEventListener("animationiteration", ballRestart);
  document.querySelector("#gold_ball_container").addEventListener("animationiteration", goldenBallRestart);
  document.querySelector("#joachim_container").addEventListener("animationiteration", joachimRestart);
}

function positionering() {
  document.querySelector("#ball1_container").classList.add("position1");
  document.querySelector("#ball2_container").classList.add("position2");
  document.querySelector("#ball3_container").classList.add("position3");
  document.querySelector("#gold_ball_container").classList.add("position4");
  document.querySelector("#joachim_container").classList.add("position5");
}

function click() {
  document.querySelector("#ball1_container").addEventListener("mousedown", clickBall);
  document.querySelector("#ball2_container").addEventListener("mousedown", clickBall);
  document.querySelector("#ball3_container").addEventListener("mousedown", clickBall);
  document.querySelector("#gold_ball_container").addEventListener("mousedown", clickGoldenBall);
  document.querySelector("#joachim_container").addEventListener("mousedown", clickJoachim);
}

function startAnimationer() {
  document.querySelector("#ball1_container").classList.add("ball_zoom_in");
  document.querySelector("#ball2_container").classList.add("ball_zoom_in");
  document.querySelector("#ball3_container").classList.add("ball_zoom_in");
  document.querySelector("#gold_ball_container").classList.add("gold_ball_zoom_in");
  document.querySelector("#joachim_container").classList.add("joachim_zoom_in");
}

//Alt der giver 1 plus point

function clickBall() {
  console.log("Click ball");
  let ball = this;

  ball.removeEventListener("mousedown", clickBall);

  ball.classList.add("paused");

  ball.querySelector("img").classList.add("shot");

  ball.addEventListener("animationend", ballGone);

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
  let ball = this;
  ball.removeEventListener("animationend", ballGone);
  
  ball.querySelector("img").classList.remove("shot");

  ball.classList.remove("paused");

  ballRestart.call(this);

  ball.addEventListener("mousedown", clickBall);


}
function ballRestart() {
  let ball = this;
    ball.classList.remove("ball_zoom_in");
    ball.offsetWidth;
    ball.classList.add("ball_zoom_in");

    ball.classList.remove("position1", "position2", "position3", "position4", "position5");
    let pos = Math.floor(Math.random() * 5) + 1;
    ball.classList.add("position" + pos);
}


//Alt der giver 5 plus point


function clickGoldenBall() {
  console.log("Click goldenBall");
  let ball = this;

  // Forhindr gentagne clicks
  ball.removeEventListener("mousedown", clickGoldenBall);

  // Stop ball container
  ball.classList.add("paused");

  // sæt forsvind-animation på ball
  ball.querySelector("img").classList.add("shot");

  // når forsvind-animation er færdig: goldenBallGone
  ball.addEventListener("animationend", goldenBallGone);

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
  let ball = this;

  // fjern event der bringer os herind
  ball.removeEventListener("animationend", goldenBallGone);

  // fjern forsvind-animation
  document.querySelector("#gold_ball_sprite").classList.remove("shot");

  // fjern pause
  ball.classList.remove("paused");

  // genstart falling animation
  goldenBallRestart.call(this);
  // skal have sat en timer på så den ikke kommer tilbage med det samme

  // gør det muligt at klikke på bolden igen
  ball.addEventListener("mousedown", clickGoldenBall);
}

function goldenBallRestart() {
  let ball = this;
  ball.classList.remove("gold_ball_zoom_in");
  ball.offsetWidth;
  ball.classList.add("gold_ball_zoom_in");

  ball.classList.remove("position1", "position2", "position3", "position4", "position5");
  let pos = Math.floor(Math.random() * 5) + 1;
  ball.classList.add("position" + pos);
}


//Alt der giver minus point

function clickJoachim() {
  console.log("Click joachim");

  let joachim = this;

  joachim.removeEventListener("mousedown", clickJoachim);


  joachim.classList.add("paused");


  joachim.querySelector("img").classList.add("spiral");


  joachim.addEventListener("animationend", joachimGone);

    incrementCard();
}

  function incrementCard() {
    console.log("incrementCard");
    cards++;
    displayIncrementedCard();
    if (cards >= 2) {
      gameOver();
    }
  }
  function displayIncrementedCard() {
    console.log("#card" + cards)
    document.querySelector("#card" + cards).classList.remove("no_card");
    document.querySelector("#card" + cards).classList.add("activate_card");
  }


function joachimGone() {

  let joachim = this;
  
  joachim.removeEventListener("animationend", joachimGone);


  joachim.querySelector("img").classList.remove("spiral");


  joachim.classList.remove("paused");


  joachimRestart.call(this);


  joachim.addEventListener("click", clickJoachim);
}


function joachimRestart() {
  let joachim = this;
  joachim.classList.remove("joachim_zoom_in");
  joachim.offsetWidth;
  joachim.classList.add("joachim_zoom_in");

  joachim.classList.remove("position1", "position2", "position3", "position4", "position5");
  let pos = Math.floor(Math.random() * 5) + 1;
  joachim.classList.add("position" + pos);
}





//Game over og LevelComplete

// if (cards >= 2) {
//   gameOver();
// } else {
//   levelComplete();
// }

function gameOver() {
  console.log("Game Over")
  window.location.href = "http://127.0.0.1:5502/gameover.html";
  document.querySelector("#game_over").classList.remove("hidden");

}

function levelComplete() {
  console.log("Level Complete")
}




