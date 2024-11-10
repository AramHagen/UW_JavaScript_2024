/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)


// 2. What is the cost per square inch of each pizza?
function calculateAreaPizza(diameter) {
    const radius = diameter / 2;
    const area = Math.PI * Math.pow(radius, 2);
    return area;
}

function costPerSquareInch(inch, totalPrice) {
    const area = calculateAreaPizza(inch);
    const costPerSquareInch = totalPrice / area;
    console.log(`The cost per square inch of the pizza is: $${costPerSquareInch.toFixed(2)}`);
}
costPerSquareInch(13, 16.99);
costPerSquareInch(17, 19.99);

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

// 4. Draw 3 cards and use Math to determine the highest
// card

function randomNumber() {
    return Math.floor(Math.random() * 13) + 1;
}
function drawThreeCards() {
    let card1 = randomNumber();
    let card2 = randomNumber();
    let card3 = randomNumber();

    let highestCard = Math.max(card1, card2, card3);
    console.log(`card1 is ${card1}\ncard2 is ${card2}\ncard3 is ${card3}`)
    console.log(`${highestCard} is the highest card.`)
}
drawThreeCards();

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
const firstName = 'John';
const lastName = 'Doe';
const streetAddress = '1130 NW 54th St';
const city = 'Seattle';
const state = 'WA';
const zipCode = '98107';

const addressBlock = `
${firstName} ${lastName}
${streetAddress}
${city}, ${state} ${zipCode}`;
console.log(addressBlock)

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
function fetchFirstName(address) {
    const indexOfFirstName = address.indexOf(' ');
    const firstName = address.slice(0, indexOfFirstName);
    const fullName = address.split('\n')[0];
    const lastLine = address.split('\n')[2];
    const [city, stateZip] = lastLine.split(',');
    const [state, zipCode] = stateZip.split(' ');

    console.log(`%cfirstname is ${firstName}`, 'color:blue;');
    console.log(`%cfullname is ${fullName}`, 'color:red');
    console.log(`%cCity is ${city}`, 'color:pink');
    console.log(`%cstate is ${state}`, 'color:purple');
    console.log(`%czipcode is ${zipCode}`, 'color:green;');
}
fetchFirstName(`Aram Hagen
1130 NW 54th St
Seattle,WA 98107
    `)
/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const endDate = new Date(2019, 3, 1);

function middleDate(startDate, endDate) {
    const startTimeStamp = new Date(startDate).getTime();
    const endTimeStamp = new Date(endDate).getTime();
    const middleTimestamp = (startTimeStamp + endTimeStamp) / 2;
    const middleDate = new Date(middleTimestamp);
    
    console.log(`Middle Date: ${middleDate}`);
}

middleDate('2020-01-01T00:00:00', '2020-04-01T00:00:00')