// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
const moreInfoLinkElm = document.getElementById('more-info');
moreInfoLinkElm.addEventListener('click',(event) => {
  event.preventDefault();
  alert(`Here's some info`);
})
// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
const dogBtnElm = document.getElementById('dog');
dogBtnElm.addEventListener('click',(event) => {
  event.stopPropagation();
  alert('Bow wow');
})
