// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const titleElement = document.getElementById('weather-head');
titleElement.innerText = 'February 10 Weather Forecast, Seattle';
// Change the styling of every element with class "sun" to set the color to "orange"
const sunElements = document.querySelectorAll('.sun');
[...sunElements].forEach((elm) => {
    elm.style.color = 'orange';
})
// Change the class of the second <li> from to "sun" to "cloudy"
sunElements[1].classList.replace('sun', 'cloudy');