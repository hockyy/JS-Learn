const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 20;
const MONSTER_ATTACK_VALUE = 15;
const HEAL_VALUE = 30;
const MONSTER_HEAL_VALUE = 20;

let tmpHealth = 0;
do {
  tmpHealth = prompt(
    "Please enter a valid maximum health both for you and the monster",
    "100"
  );
} while (isNaN(tmpHealth) || tmpHealth <= 0);
const HEALTH = tmpHealth;

let monsterHealth = HEALTH;
let playerHealth = HEALTH;
let bonusLife = 1;

function reset() {
  resetGame(HEALTH);
  monsterHealth = playerHealth = HEALTH;
}

function monsterAttack() {
  const monsterDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  playerHealth -= monsterDamage;
}

function monsterTurn() {
  monsterAttack();
  checkWin();
}

function checkWin() {
  if (playerHealth <= 0 && bonusLife > 0) {
    bonusLife--;
    removeBonusLife();
    alert("You could've been dead if there weren't any bonus life");
    playerHealth = HEALTH;
    setPlayerHealth(HEALTH);
  }
  if (monsterHealth <= 0 || playerHealth <= 0) {
    let result = "It's a draw!!";
    if (monsterHealth > 0) {
      result = "You lose!";
    } else if (playerHealth > 0) result = "You win!";
    alert(result);
    console.log("Resetting game..");
    reset();
  }
}

function playerAttack(value) {
  const damageDealt = dealMonsterDamage(value);
  monsterHealth -= damageDealt;
  monsterTurn();
}

function weakAttack() {
  playerAttack(ATTACK_VALUE);
}

function strongAttack() {
  playerAttack(STRONG_ATTACK_VALUE);
}

function playerHeal() {
  increasePlayerHealth(HEAL_VALUE);
  playerHealth += HEAL_VALUE;
  playerHealth = Math.min(playerHealth, HEALTH);
  monsterTurn();
}

adjustHealthBars(HEALTH);
attackBtn.addEventListener("click", weakAttack);
strongAttackBtn.addEventListener("click", strongAttack);
healBtn.addEventListener("click", playerHeal);
