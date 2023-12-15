// note: all of the variables are global variables
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls; // define variables
numRolls = 0;
balance = 0;  // initial value
var die1Image = new Image();
var die2Image = new Image();


function rollDice() {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    // set the dice images based on the roll
    die1Image = document.querySelectorAll("img")[0];
    die1Name = "images/dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    die2Image = document.querySelectorAll("img")[1];
    die2Name = "images/dice" + die2 + ".png";
    die2Image.setAttribute("src", die2Name);
}

function whoWon() {
    // in h3 report how much money was won or lost and the balance
    if (dieSum <= 5){
      outcome = "You lose, please pay me " + 5 + " dollars.";
      balance -= 5;
    } else if (dieSum >= 9){
      outcome = "You win, I pay you " + 5 + " dollars.";
      balance += 5;
    } else {
      outcome = "Its a draw, nobody wins or loses.";
    }

    // Report the outcome:
    banner = die1 + " + " + die2 + " is: " + dieSum;
    document.querySelector("h3").innerHTML = banner + "<br>" + outcome;
}

function letsPlay(){
  rollDice();
  whoWon();
  numRolls +=1;
  const games = document.getElementById('numGames').value;
  if (numRolls == games){
    if (balance >= 0){
      alert("The game is over! Your final balance is $" + balance + "!")
    }
    else {
      alert("The game is over! Your final balance is -$" + balance*-1 + "!")
    }
  }
  const result={
    balance: balance
  }
  document.getElementById('totalBalance').textContent= 'Total Balance: ' + result.balance.toFixed(0);
}
