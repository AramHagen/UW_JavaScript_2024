/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */

const getDeck = () => {
  const suit = ["hearts", "spades", "clubs", "diamonds"];
  const displayValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];
  const deck = [];
  suit.forEach((x) => {
    displayValues.forEach((y) => {
      const card = {
        val:
          y === "Ace"
            ? 11
            : y === "Jack" || y === "Queen" || y === "King"
            ? 10
            : +y,
        displayVal: y,
        suit: x,
      };
      deck.push(card);
    });
  });
  return deck;
};

// CHECKS
const deck = getDeck();
console.log(deck);
console.log(`Deck length equals 52? ${deck.length === 52}`);

const randomCard = deck[Math.floor(Math.random() * 52)];

const cardHasVal =
  randomCard && randomCard.val && typeof randomCard.val === "number";
console.log(`Random card has val? ${cardHasVal}`);

const cardHasSuit =
  randomCard && randomCard.suit && typeof randomCard.suit === "string";
console.log(`Random card has suit? ${cardHasSuit}`);

const cardHasDisplayVal =
  randomCard &&
  randomCard.displayVal &&
  typeof randomCard.displayVal === "string";
console.log(`Random card has display value? ${cardHasDisplayVal}`);
