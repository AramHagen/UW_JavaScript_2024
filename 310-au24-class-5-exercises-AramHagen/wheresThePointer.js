// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
const tableElm = document.querySelector('table');
const pointerPositionHandler = (event) => {
    if (event.target.tagName === 'TD') {
        const clientX = event.clientX;
        const clientY = event.clientY;
        event.target.innerHTML = `${clientX},${clientY}`
    }
}

tableElm.addEventListener('click', pointerPositionHandler)