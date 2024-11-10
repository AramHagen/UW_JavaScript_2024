const blackjackDeck = getDeck();
const startGameBtn = document.getElementById('start-button');
const showResult = document.getElementById('result');
const containerBtns = document.getElementById('container-buttons');
const drawBtn = document.getElementById('draw-button');
const standBtn = document.getElementById('stand-button');

const logWithColor = (message, color) => {
  if (!color) {
    color = message.includes('Player win')
      ? 'green'
      : message.includes('Dealer win')
      ? 'red'
      : 'orange';
  }

  console.log(`%c${message}`, `color: ${color}; font-weight: bold;`);
  showResult.style.color = color;
  showResult.innerText = message;
};

// /**
//  * Represents a card player (including dealer).
//  * @constructor
//  * @param {string} name - The name of the player
//  */
class CardPlayer {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }
  drawCard() {
    const card =
      blackjackDeck[Math.floor(Math.random() * blackjackDeck.length)];
    this.hand.push(card);
  }
}

// // CREATE TWO NEW CardPlayers
const dealer = new CardPlayer('Dealer');
const player = new CardPlayer('Player');

// /**
//  * Calculates the score of a Blackjack hand
//  * @param {Array} hand - Array of card objects with val, displayVal, suit properties
//  * @returns {Object} blackJackScore
//  * @returns {number} blackJackScore.total
//  * @returns {boolean} blackJackScore.isSoft
//  */
const calcPoints = (hand = []) => {
  let total = hand.reduce((acc, curr) => acc + curr.val, 0);
  let aceCount = hand.filter((card) => card.displayVal === 'Ace').length;

  while (total > 21 && aceCount > 0) {
    total -= 10;
    aceCount--;
  }
  return { total, isSoft: aceCount > 0 };
};

// /**
//  * Determines whether the dealer should draw another card.
//  *
//  * @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
//  * @returns {boolean} whether dealer should draw another card
//  */
const dealerShouldDraw = (dealerHand) => {
  const { total, isSoft } = calcPoints(dealerHand);
  return total < 17 || (total === 17 && isSoft);
};

// /**
//  * Determines the winner if both player and dealer stand
//  * @param {number} playerScore
//  * @param {number} dealerScore
//  * @returns {string} Shows the player's score, the dealer's score, and who wins
//  */
const determineWinner = (playerScore, dealerScore) => {
  if (playerScore > 21) return 'Player went over 21 - Dealer wins!';
  if (dealerScore > 21) return 'Dealer went over 21 - Player wins!';
  if (playerScore === dealerScore)
    return `It's a tie with both Player and Dealer having ${playerScore}!`;
  if (playerScore === 21) return 'Player wins with a blackjack!';
  if (dealerScore === 21) return 'Dealer wins with a blackjack!';

  return playerScore > dealerScore
    ? `Player wins with a score of ${playerScore} against Dealer's ${dealerScore}!`
    : `Dealer wins with a score of ${dealerScore} against Player's ${playerScore}!`;
};

// /**
//  * Creates user prompt to ask if they'd like to draw a card
//  * @param {number} count
//  * @param {string} dealerCard
//  */
const getMessage = (count, dealerCard) => {
  return `Dealer showing ${dealerCard.displayVal}, your count is ${count}. Draw card?`;
};

// /**
//  * Logs the player's hand to the console
//  * @param {CardPlayer} player
//  */
const showHand = (player) => {
  const displayHand = player.hand
    .map((card) => `${card.displayVal} of ${card.suit}`)
    .join(', ');
  const totalPoints = calcPoints(player.hand).total;
  const message = `${player.name}'s hand: ${displayHand} (Total: ${totalPoints})`;

  const handElement = document.createElement('p');
  const container = document.getElementById(
    `${player.name.toLowerCase()}-hand`
  );
  handElement.innerText = message;

  container.appendChild(handElement);
};

const finishGame = () => {
  containerBtns.classList.add('hidden');
  dealerTurn();
};

const playerTurn = () => {
  let playerScore = calcPoints(player.hand).total;

  const updateMessage = () => {
    let title = document.querySelector('#container-buttons h2');
    title.innerText = getMessage(playerScore, dealer.hand[0]);
  };

  updateMessage();
  if (containerBtns) {
    containerBtns.classList.remove('hidden');
  }

  drawBtn.addEventListener('click', () => {
    player.drawCard();
    playerScore = calcPoints(player.hand).total;
    showHand(player);
    updateMessage();

    if (playerScore >= 21) {
      finishGame();
    }
  });

  standBtn.addEventListener('click', () => {
    finishGame();
  });
};

const dealerTurn = () => {
  let dealerScore = calcPoints(dealer.hand).total;

  while (dealerShouldDraw(dealer.hand)) {
    dealer.drawCard();
    dealerScore = calcPoints(dealer.hand).total;
    showHand(dealer);
  }

  const playerScore = calcPoints(player.hand).total;
  const resultMessage = determineWinner(playerScore, dealerScore);

  logWithColor(resultMessage);
};

// /**
//  * Runs Blackjack Game
//  */
const startGame = () => {
  player.hand = [];
  dealer.hand = [];
  document.getElementById('player-hand').innerHTML = '';
  document.getElementById('dealer-hand').innerHTML = '';
  showResult.innerText = '';

  // Initial two cards for player and dealer
  player.drawCard();
  dealer.drawCard();
  player.drawCard();
  dealer.drawCard();

  // Show initial hands
  showHand(player);
  showHand(dealer);

  // Calculate initial scores after two cards
  const playerScore = calcPoints(player.hand).total;
  const dealerScore = calcPoints(dealer.hand).total;

  // Check for immediate win conditions
  if (playerScore === 21 || dealerScore === 21) {
    logWithColor(determineWinner(playerScore, dealerScore));
  } else {
    playerTurn();
  }
};

startGameBtn.addEventListener('click', () => {
  startGameBtn.classList.add('hidden');
  setTimeout(() => {
    startGame();
  }, 100);
});