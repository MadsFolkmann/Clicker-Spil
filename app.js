"use strict";

let points = 0;
let cards = 0;

window.addEventListener("load", ready);

document.body.style.overflow = "hidden";

function ready() {
  document.querySelector("#btn_start").addEventListener("click", start);
  document.querySelector("#btn_go_to_start").addEventListener("click", showStartScreen);
  document.querySelector("#btn_restart").addEventListener("click", start);
}

function showStartScreen() {
  // fjern hidden fra startskærm og tilføj til game over og level complete
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
  document.querySelector("#sound_level_complete").pause();
}

function start() {

  //Nulstil point og Liv
  points = 0;
  cards = 0;
  resetCards();
  resetPoints();

  // resetTimer();
  showGameScreen();
  //start animationer
  startAnimationer();

  //Click
  click();

  //position
  positionering();

  //restart
  setupRestart();

  //tid
  startTimer();
  resetTimer();

  // music
  const audio = document.querySelector("#sound_darwin");
  audio.loop = true;
  audio.play();

  document.querySelector("#sound_darwin").volume = 0.2;
}

function startTimer() {
  document.querySelector("#time_sprite").classList.add("shrink");

  document.querySelector("#time_sprite").addEventListener("animationend", levelComplete);
}

function resetTimer() {
  document.querySelector("#time_sprite").classList.remove("shrink");
  document.querySelector("#time_sprite").offsetWidth;
  document.querySelector("#time_sprite").classList.add("shrink");
}

function setupRestart() {
  document.querySelector("#ball1_container").addEventListener("animationiteration", ballRestart);
  document.querySelector("#ball2_container").addEventListener("animationiteration", ballRestart);
  document.querySelector("#ball3_container").addEventListener("animationiteration", ballRestart);
  document.querySelector("#gold_ball_container").addEventListener("animationiteration", goldenBallRestart);
  document.querySelector("#joachim_container").addEventListener("animationiteration", joachimRestart);
  document.querySelector("#joachim2_container").addEventListener("animationiteration", joachimRestart);
}

function positionering() {
  document.querySelector("#ball1_container").classList.add("position1");
  document.querySelector("#ball2_container").classList.add("position2");
  document.querySelector("#ball3_container").classList.add("position3");
  document.querySelector("#gold_ball_container").classList.add("position4");
  document.querySelector("#joachim_container").classList.add("position5");
  document.querySelector("#joachim2_container").classList.add("position6");
}

function click() {
  document.querySelector("#ball1_container").addEventListener("mousedown", clickBall);
  document.querySelector("#ball2_container").addEventListener("mousedown", clickBall);
  document.querySelector("#ball3_container").addEventListener("mousedown", clickBall);
  document.querySelector("#gold_ball_container").addEventListener("mousedown", clickGoldenBall);
  document.querySelector("#joachim_container").addEventListener("mousedown", clickJoachim);
  document.querySelector("#joachim2_container").addEventListener("mousedown", clickJoachim);
}

function startAnimationer() {
  document.querySelector("#ball1_container").classList.add("ball_zoom_in");
  document.querySelector("#ball2_container").classList.add("ball_zoom_in");
  document.querySelector("#ball3_container").classList.add("ball_zoom_in");
  document.querySelector("#gold_ball_container").classList.add("gold_ball_zoom_in");
  document.querySelector("#joachim_container").classList.add("joachim_zoom_in");
  document.querySelector("#joachim2_container").classList.add("joachim_zoom_in");
}

function resetCards() {
  console.log("Reset Card");
  // sæt card til 0
  cards = 0;
  //nulstil visning af cards (cards vi ser)
  document.querySelector("#card1").classList.remove("active_card");
  document.querySelector("#card2").classList.remove("active_card");
  document.querySelector("#card1").classList.add("no_card");
  document.querySelector("#card2").classList.add("no_card");
}

function resetPoints() {
  // nulstil point
  points = 0;
  // nulstil vising af point
  displayPoints();
}

function showGameScreen() {
  // Skjul startskærm, game over og level complete
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

//Alt der giver 1 plus point

function clickBall() {
  console.log("Click ball");
  let ball = this;

  ball.removeEventListener("mousedown", clickBall);

  ball.classList.add("paused");

  ball.querySelector("img").classList.add("shot");

  ball.addEventListener("animationend", ballGone);

  //Lyd!
  document.querySelector("#sound_goal").currentTime = 0;
  document.querySelector("#sound_goal").play();

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
  console.log("Ball gone");
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

  ball.classList.remove("position1", "position2", "position3", "position4", "position5", "position6", "position7", "position8");
  let pos = Math.floor(Math.random() * 8) + 1;
  ball.classList.add("position" + pos);
}

//Alt der giver 3 plus point

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
  
  //lyd
  document.querySelector("#sound_siu").currentTime = 0;
  document.querySelector("#sound_siu").play();
}

function incrementGoldPoints() {
  console.log("incrementGoldPoint");
  points += 3;
  displayGoldPoints();
}

function displayGoldPoints() {
  document.querySelector("#point_count").textContent = points;
}

function goldenBallGone() {
    console.log("gold ball gone");
    let ball = this;
    
    setTimeout(() => {
      
      // fjern event der bringer os herind
      ball.removeEventListener("animationend", goldenBallGone);
      
      // fjern forsvind-animation
      document.querySelector("#gold_ball_sprite").classList.remove("shot");
      
      // fjern pause
      ball.classList.remove("paused");
      
      // genstart zoom in animation
      goldenBallRestart.call(this);
      
      // gør det muligt at klikke på ball igen
      ball.addEventListener("mousedown", clickGoldenBall);
    }, 4000);
    
 }

function goldenBallRestart() {
  let ball = this;
  ball.classList.remove("gold_ball_zoom_in");
  ball.offsetWidth;
  ball.classList.add("gold_ball_zoom_in");

  ball.classList.remove("position1", "position2", "position3", "position4", "position5", "position6", "position7", "position8");

    let pos = Math.floor(Math.random() * 8) + 1;
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

  //Lyd!
  document.querySelector("#sound_whistle").currentTime = 0;
  document.querySelector("#sound_whistle").play();

  incrementCard();
}

function incrementCard() {
  console.log("incrementCard");
  cards++;
  displayIncrementedCard();
  console.log("cards after inc:" + cards);
  if (cards == 2) {
    gameOver();
  }
}
function displayIncrementedCard() {
  console.log("#card" + cards);
  document.querySelector("#card" + cards).classList.remove("no_card");
  document.querySelector("#card" + cards).classList.add("activate_card");
  
}

function joachimGone() {
  let joachim = this;

  joachim.removeEventListener("animationend", joachimGone);

  joachim.querySelector("img").classList.remove("spiral");

  joachim.classList.remove("paused");

  joachimRestart.call(this);

  joachim.addEventListener("mousedown", clickJoachim);
}

function joachimRestart() {
  let joachim = this;
  joachim.classList.remove("joachim_zoom_in");
  joachim.offsetWidth;
  joachim.classList.add("joachim_zoom_in");

  joachim.classList.remove("position1", "position2", "position3", "position4", "position5", "position6", "position7", "position8");
  let pos = Math.floor(Math.random() * 8) + 1;
  joachim.classList.add("position" + pos);
}

//Gameover eller level complete

function gameOver() {
  console.log("Game Over");

  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#time_sprite").classList.remove("shrink");
  document.querySelector("#game_over").classList.add("game_over_transition");  
  document.querySelector("#sound_game_over").play();
  stopGame();
}

function levelComplete() {
  console.log("Level Complete");

  document.querySelector("#sound_level_complete").play();
  document.querySelector("#time_sprite").classList.remove("shrink");
  document.querySelector("#level_complete").classList.remove("hidden");
  document.querySelector("#level_complete").classList.add("level_complete_transition");
  stopGame();

  if (points >= 25) {
    document.querySelector("#score").textContent = "WAAAUW YOU GOT " + points + " GOALS!!!!!!";
  } else {
        document.querySelector("#score").textContent = "WAUUUW THATS BAD ONLY " + points + " GOALS, RESTART AND TRY AGAIN N00B";
  }
}

function stopGame() {
  document.querySelector("#ball1_container").classList.remove("ball_zoom_in");
  document.querySelector("#ball2_container").classList.remove("ball_zoom_in");
  document.querySelector("#ball3_container").classList.remove("ball_zoom_in");
  document.querySelector("#joachim_container").classList.remove("joachim_zoom_in");
  document.querySelector("#joachim2_container").classList.remove("joachim_zoom_in");
  document.querySelector("#gold_ball_container").classList.remove("gold_ball_zoom_in");

  // Fjern click
  document.querySelector("#ball1_container").removeEventListener("mousedown", clickBall);
  document.querySelector("#ball2_container").removeEventListener("mousedown", clickBall);
  document.querySelector("#ball3_container").removeEventListener("mousedown", clickBall);
  document.querySelector("#joachim_container").removeEventListener("mousedown", clickJoachim);
  document.querySelector("#joachim2_container").removeEventListener("mousedown", clickJoachim);
  document.querySelector("#gold_ball_container").removeEventListener("mousedown", clickGoldenBall);

  // Stop og nulstil lyde, fx baggrundsmusik
  document.querySelector("#sound_darwin").pause();
  document.querySelector("#sound_darwin").currentTime = 0;
  cards = 0;
}
