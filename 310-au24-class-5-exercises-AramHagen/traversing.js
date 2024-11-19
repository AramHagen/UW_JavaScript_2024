// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
const mainElement = body.querySelector('main');
console.log(mainElement);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
const bodyFromUl = ul.parentElement.parentElement;
console.log(bodyFromUl)

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
console.log(p.previousElementSibling.children[2]);