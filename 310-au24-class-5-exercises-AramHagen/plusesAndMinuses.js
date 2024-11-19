// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
const counterElement = document.getElementById("counter");
const plusBtnElm = document.getElementById("plusBtn");
const minusBtnElm = document.getElementById("minusBtn");

let counter = 0;
const updateCounter = () => {
    counterElement.innerText = counter;
};

plusBtnElm.addEventListener("click", () => {
    counter++;
    updateCounter();
});

minusBtnElm.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        updateCounter();
    }
});