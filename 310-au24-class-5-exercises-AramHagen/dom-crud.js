// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const newElement = document.createElement('a');
const mainElement = document.querySelector('main');
newElement.setAttribute('id', 'cta');

// const textNode = document.createTextNode('Buy Now!');
// newElement.appendChild(textNode);
//OR
newElement.textContent = 'Buy Now!';

const paragraphElements = document.getElementsByTagName('p');
if (paragraphElements.length > 0) {
    const lastParagraph = paragraphElements[paragraphElements.length - 1];
    // lastParagraph.insertAdjacentElement("afterend",newElement);
    // OR
    mainElement.insertBefore(newElement, lastParagraph.nextSibling);
}

// Access (read) the data-color attribute of the <img>,
// log to the console
const imageElement = document.querySelector('img');
const dataColor = imageElement.dataset.color;
console.log(`%c${dataColor}`, 'color:#7E651A')

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const thirdLiElement = document.getElementsByTagName('li')[2];
thirdLiElement.classList.add('highlight');

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
if (paragraphElements.length > 0) {
    const lastParagraph = paragraphElements[paragraphElements.length - 1];
    // mainElement.removeChild(lastParagraph);
    // OR
    lastParagraph.remove();
}
