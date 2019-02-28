$(document).ready(function() {
  var userScore = 0;

  var redRandom;
  var yellowRandom;
  var blueRandom;
  var greenRandom;

  var wins = 0;
  var loss = 0;

  var randomNoToReach;

  var random = [];

  document.querySelector("#wins").innerHTML = wins;
  document.querySelector("#loss").innerHTML = loss;

  //creates random array between 1-12 for array of 4 with all unique values in it
  function randomValue() {
    while (random.length != 4) {
      var value = Math.floor(Math.random() * 12) + 1;
      if (!random.includes(value)) {
        random.push(value);
      }
    }
  }

  //function that will set the values of all crystal
  function setRandomValue() {
    randomValue();

    redRandom = random[0];
    yellowRandom = random[1];
    blueRandom = random[2];
    greenRandom = random[3];

    random = [];
  }

  // Score to reach function which sets the score between 19 - 120;
  function setRandomNoToReach() {
    randomNoToReach = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    return (document.querySelector(
      "#scoreToReach"
    ).innerHTML = randomNoToReach);
  }

  //   reset function
  function reset() {
    setRandomValue();
    setRandomNoToReach();
    counter();
  }

  //to display user score
  function displayUserScore() {
    debugger;
    return (document.querySelector("#userScore").innerHTML = userScore);
  }

  //function resets the counter
  function counter() {
    userScore = 0;
    return (document.querySelector("#userScore").innerHTML = userScore);
  }

  function showMessage(message) {
    alert(message);
  }
  //   to check whther game is won or loss
  function toCheck() {
    if (userScore === randomNoToReach) {
      wins++;
      displayUserScore();
      showMessage("you matched the random score " + userScore);
      showMessage("you win!");

      reset();
      return (document.querySelector("#wins").innerHTML = wins);
    } else if (userScore > randomNoToReach) {
      loss++;
      displayUserScore();
      showMessage("You reached to " + userScore);
      showMessage("you loose!");

      reset();
      return (document.querySelector("#loss").innerHTML = loss);
    }
  }

  reset();

  //on Click events for all four crystall
  $("#red").on("click", function() {
    userScore += redRandom;

    displayUserScore();

    toCheck();
  });

  $("#yellow").on("click", function() {
    userScore += yellowRandom;

    displayUserScore();

    toCheck();
  });

  $("#blue").on("click", function() {
    userScore += blueRandom;

    displayUserScore();

    toCheck();
  });

  $("#green").on("click", function() {
    userScore += greenRandom;

    displayUserScore();

    toCheck();
  });
});
