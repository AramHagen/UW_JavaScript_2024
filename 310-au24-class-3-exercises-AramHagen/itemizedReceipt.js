// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price
const bud = { descr: "Bud Light", price: 3.99 };
const burger = { descr: "Hamburger", price: 6.99 };
const sushi = { descr: "sushi", price: 18 };

const logReceipt = (...args) => {
  let subtotal = 0;
  const taxRate = 0.1;

  args.forEach((item) => {
    console.log(`%c${item.descr} - \$${item.price}`,'color:#1BB642');
    subtotal += item.price;
  });

  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  console.log(`%cSubtotal: \$${subtotal.toFixed(2)}`, "color:orange");
  console.log(`%cTax (10%): \$${tax.toFixed(2)}`, "color:blue");
  console.log(`%cTotal: \$${total.toFixed(2)}`, "color:pink");
}

// const burrito = { descr: 'Burrito', price: 5.99 };
// const chips = { descr: 'Chips & Salsa', price: 2.99 };
// const sprite = { descr: 'Sprite', price: 1.99 };
// logReceipt(burrito, chips, sprite);

// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
