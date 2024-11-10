// 1. Create attack function below.  This will take the following parameters:
// attackingPlayer, defendingPlayer, baseDamage, variableDamage

// const attack = function(attackingPlayer,defendingPlayer,baseDamage,variableDamage){
//   const randomDamage = Math.floor(Math.random() * variableDamage);
//   const totalDamage = baseDamage + randomDamage;
//   defendingPlayer.health -= totalDamage;
//   return `${attackingPlayer.name} hits ${defendingPlayer.name} for ${totalDamage} damage.`;
// }

// 2. Create player1 and player2 objects below
// Each should have a name property of your choosing, and health property equal to 10
const player1 = {
  name: "Merlin",
  health: 10,
};

const player2 = {
  name: "James Bond",
  health: 10,
};

// 3. Refactor attack function to an arrow function.  Comment out function above.
const attack = (attackingPlayer,defendingPlayer,baseDamage,variableDamage) => {
  const randomDamage = Math.floor(Math.random() * variableDamage);
  const totalDamage = baseDamage + randomDamage;
  defendingPlayer.health -= totalDamage;
  return `${attackingPlayer.name} hits ${defendingPlayer.name} for ${totalDamage} damage.`;
}

// DO NOT MODIFY THE CODE BELOW THIS LINE
// Set attacker and defender.  Reverse roles each iteration
let attackOrder = [player1, player2];

// Everything related to preventInfiniteLoop would not generally be necessary, just adding to
// safeguard students from accidentally creating an infinite loop & crashing browser
let preventInfiniteLoop = 100;
while (player1.health >= 1 && player2.health >= 1 && preventInfiniteLoop > 0) {
  const [attackingPlayer, defendingPlayer] = attackOrder;
  console.log(`%c${attack(attackingPlayer, defendingPlayer, 1, 2)}`,'color:#B742E5');
  attackOrder = attackOrder.reverse();

  preventInfiniteLoop--;
}
const eliminatedPlayer = player1.health <= 0 ? player1 : player2;
console.log(`%c${eliminatedPlayer.name} has been eliminated!`,'color:#BF1414');