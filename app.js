"use strict"

let points = 0;
let cards = 0;

window.addEventListener("load", ready)

document.body.style.overflow = "hidden";

function ready() {
      console.log("JavaScript ready!");
  document.querySelector("#btn_start").addEventListener("click", start);
  document.querySelector("#btn_go_to_start").addEventListener("click", showStartScreen);
  document.querySelector("#btn_restart").addEventListener("click", start);
}

function showStartScreen() {
  // fjern hidden fra startskærm og tilføj til game over og level complete
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}

function start() {
  console.log("JavaScript kører!")

  //Nulstil point og Liv
  points = 0
  cards = 0
  //Skjul start skærm
  document.querySelector("#start").classList.add("hidden");
  
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
   document.querySelector("#sound_darwin").play();
  //  document.querySelector("#sound_darwin").loop();
}

function startTimer() {
  // Sæt timer-animationen (shrink) i gang ved at tilføje klassen shrink til time_sprite
  document.querySelector("#time_sprite").classList.add("shrink");

  // Tilføj en eventlistener som lytter efter at animationen er færdig (animationend) og kalder funktionen timeIsUp
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
  console.log ("Reset Card")
  // sæt lives til 3
  cards = 0;
  //nulstil visning af liv (hjerte vi ser)
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

    ball.classList.remove("position1", "position2", "position3", "position4", "position5", "position6", "position7", "position8");
    let pos = Math.floor(Math.random() * 8) + 1;
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

  joachim.classList.remove("position1", "position2", "position3", "position4", "position5", "position6", "position7", "position8");
  let pos = Math.floor(Math.random() * 8) + 1;
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
  document.querySelector("#game_over").classList.remove("hidden");
  document.querySelector("#time_sprite").classList.remove("shrink");
  document.querySelector("#sound_darwin").pause();

}

function levelComplete() {
  console.log("Level Complete")

  document.querySelector("#level_complete").classList.remove("hidden");
     document.querySelector("#sound_darwin").pause();

}


//Timer

// const timeLeft = document.querySelector(".time-left");

// let countdown = 60;

// const timer = setInterval(() => {
//   countdown--;

//   if (countdown < 10) {
//     timeLeft.innerHTML = `0${countdown}`;
//   } else {
//     timeLeft.innerHTML = countdown;
//   }

//   if (countdown === 0) {
//     clearInterval(timer);
//     levelComplete()
//   }
// }, 1000);



