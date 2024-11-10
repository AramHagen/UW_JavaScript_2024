// bad
var count = 1;
if (true) {
  count += 1;
  console.log("first", count);
}
console.log("second", count);
// good, use the let.
let count2 = 1;
if (true) {
  count2 += 1;
  console.log("first", count2);
}
console.log("second", count2);
// 1. Create an object representation of yourself
// Should include:
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
function Person(firstName, lastName, favoriteFood, bestFriend = null) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteFood = favoriteFood;
  this.bestFriend = bestFriend;
}

const bestFriend = new Person("Jenson", "Hagen", "Sushi");
const me = new Person("Aram", "Hagen", "Pha", bestFriend);

// 2. console.log best friend's firstName and your favorite food
console.log(
  `%cMy best friend is ${me.bestFriend.firstName} and my favourite food is ${me.favoriteFood}`,
  "color:green"
);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
const ticTacToe = [
  ["-", "O", "-"],
  ["-", "X", "O"],
  ["X", "-", "X"],
];

// 4. After the array is created, 'O' claims the top right square.
// Update that value.
ticTacToe[0][2] = "O";

// 5. Log the grid to the console.
for (let i = 0; i < ticTacToe.length; i++) {
  console.log(`%c${ticTacToe[i].join(" ")}`, "color:#0BB6C7");
}

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
const emailRegex =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}(?<!\.)$/;
const testEmails = [
  "test@example.com",
  "user.name+tag@domain.co.uk",
  "invalid@domain..com",
  "valid@sub.domain.com",
  "invalid@domain.",
  "user@domain",
  "user @domain.com",
  "user_name@sub.domain.com",
  "@example.com",
  "user@.com",
];
function emailValidation(email) {
  if (emailRegex.test(email)) {
    console.log(`%c${email} is valid.`, "color:green");
  } else {
    console.log(`%c${email} isn't valid.`, "color:red");
  }
}
testEmails.forEach((email) => {
  emailValidation(email);
});

// 7. You are given an assignmentDate as a string in the format 'month/day/year'
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = "1/21/2019";

function parseDateString(string) {
  const regex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
  const match = string.match(regex);

  if (!match) {
    throw new Error(`Invalid date format. Please use 'month/day/year' format.`);
  }
  let [_, month, day, year] = match;
  return new Date(year, month - 1, day);
}
console.log(parseDateString("1/21/2019"));

// 8. Create a new Date instance to represent the dueDate.
function getDueDate(assignmentDate) {
  const date = parseDateString(assignmentDate);
  date.setDate(date.getDate() + 7);
  return date;
}
const dueDate = getDueDate("1/21/2019");
console.log(`%cAssignment's Due Date is ${dueDate}`, "color:#EE6A02");

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime='YYYY-MM-DD'>Month day, year</time>
// I have provided a months array to help
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dueDateYear = dueDate.getFullYear();
const dueDateMonth = dueDate.getMonth();
const dueDateDay = dueDate.getDate();

const timeTag = `<time datetime='${dueDateYear}-${String(
  dueDateMonth + 1
).padStart(2, "0")}-${String(dueDateDay).padStart(2, "0")}'>${
  months[dueDateMonth]
} ${String(dueDateDay).padStart(2, "0")}, ${dueDateYear}</time>`;

// 10. log this value using console.log
console.log(`%c${timeTag}`, "color:#E209F0");