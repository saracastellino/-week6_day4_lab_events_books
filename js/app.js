document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

const form = document.querySelector('#new-item-form');
form.addEventListener('submit', handleFormSubmit);

const deleteButton = document.querySelector('#delete-button');
  deleteButton.addEventListener('click', handleDeleteFormSubmit);
})

const handleFormSubmit = function () {
  event.preventDefault();

  // Create the list element

  const newListItem1 = document.createElement('li');
  newListItem1.textContent = `Title: ${event.target.title.value}`; 
  newListItem1.classList.add('form-item');

  const newListItem2 = document.createElement('li');
  newListItem2.textContent = `Author: ${this.author.value}`; 
  newListItem2.classList.add('form-item');

  const newListItem3 = document.createElement('li');
  newListItem3.textContent = `Category: ${this.category.value}`; 
  newListItem3.classList.add('form-item');

  // Append list element to list
  
  const list = document.querySelector('ul');
   list.appendChild(newListItem1);
   list.appendChild(newListItem2);
   list.appendChild(newListItem3);

  document.querySelector('#new-item-form').reset();

}

  const handleDeleteFormSubmit = function () {
     const deleteButton = document.querySelector('#reading-list');
     deleteButton.innerHTML = '';
  }

// HTMLElement.prototype.delete = function() {
//   while (this.firstChild) {
//     this.removeChild(this.firstChild);
//   }
// }