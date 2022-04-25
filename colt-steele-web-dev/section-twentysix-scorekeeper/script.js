const p1 = {
  score: 0,
  button: document.getElementById("p1_button"),
  display: document.getElementById("p1_display"),
};

const p2 = {
  score: 0,
  button: document.getElementById("p2_button"),
  display: document.getElementById("p2_display"),
};

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.classList.add("has-text-success");
      opponent.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

// Other Variables
const resetButton = document.getElementById("reset");
const winningScoreSelect = document.getElementById("playTo");
// Declerations
let winningScore = 5;
let isGameOver = false;

p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

winningScoreSelect.addEventListener("change", function () {
  // this refers to this object that we are listening on
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}
