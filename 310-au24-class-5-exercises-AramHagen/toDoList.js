const ulElement = document.querySelector('.today-list');
const input = document.getElementById('todo-input');
const errorMessage = document.getElementById('error');
const addItemButtonElm = document.querySelector('.add-item');
const removeAllElm = document.getElementById('removeAll');

const listItemClickHandler = (e) => {
  const target = e.target;
  if (target.closest('.delete') || target.classList.contains('fa-xmark')) {
    const itemToRemove = target.closest('.item');
    itemToRemove.classList.add('removing');
    setTimeout(() => {
      itemToRemove.remove();
    }, 500);
  } else if (target.closest('.title')) {
    const titleElement = target.closest('.title');
    const checkbox = titleElement.querySelector('input[type="checkbox"]');
    if (checkbox) {
      checkbox.checked = !checkbox.checked;
    }
    e.currentTarget.classList.toggle('done');
  }
};
const handleDragStart = (e) => {
  setTimeout(() => e.target.classList.add('dragging'), 0);
};
const handleDragEnd = (e) => {
  e.target.classList.remove('dragging');
};
const addEventListenersToItem = (item) => {
  item.addEventListener('click', listItemClickHandler);
  item.addEventListener('dragstart', handleDragStart);
  item.addEventListener('dragend', handleDragEnd);
};
const handleSortableList = (e) => {
  e.preventDefault();
  const draggingItem = document.querySelector('.dragging');
  let siblings = [...ulElement.querySelectorAll('.item:not(.dragging)')];
  let nextSibling = siblings.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  ulElement.insertBefore(draggingItem, nextSibling);
};
const handleAddListItem = (e) => {
  e.preventDefault();
  const inputValue = input.value.trim();
  if (!inputValue) {
    displayErrorMessage(true);
    return;
  }
  displayErrorMessage(false);
  createListItem(inputValue);
  input.value = '';
};
const handleInputValidation = (e) => {
  displayErrorMessage(!input.value.trim());
};
const createListItem = (text) => {
  const newLiElement = document.createElement('li');
  newLiElement.classList.add('item');
  newLiElement.setAttribute('draggable', 'true');
  newLiElement.innerHTML = `<div class="title">
            <input type="checkbox" />
            <span>${text}</span>
          </div>
          <a class="delete"><i class="fa fa-solid fa-xmark"></i></a>`;
  addEventListenersToItem(newLiElement);
  ulElement.appendChild(newLiElement);
};
const displayErrorMessage = (show) => {
  errorMessage.classList.toggle('show', show);
};
// Initialize
const initializeExistingItems = () => {
  const liElements = ulElement.querySelectorAll('.item');
  liElements.forEach(addEventListenersToItem);
};
addItemButtonElm.addEventListener('click', handleAddListItem);
input.addEventListener('keypress', (e) => {
  if (e.code === 'Enter') {
    handleAddListItem(e);
  }
});
// input.addEventListener('input', handleInputValidation);
// input.addEventListener('blur', handleInputValidation);
ulElement.addEventListener('dragover', handleSortableList);
ulElement.addEventListener('dragenter', (e) => e.preventDefault());
removeAllElm.addEventListener('click', (event) => {
  ulElement.innerHTML = '';
});
initializeExistingItems();
