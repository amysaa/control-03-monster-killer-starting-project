const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 5;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);
function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const PlayerDamge = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentMonsterHealth -= playerDamage;
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth)
    alert("you would be dead but bonus life saved");
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("you won");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("you lost");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("you have a draw!");
  }
}

function attackHandler() {
  attackMonster(ATTACK);
}

function strongAttackHandler() {
  attackMonster("STRONG_ATTACK");
}
function healPlayerHandler() {
  increasePlayerHealth(HEAL_VALUE);
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
