document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

const form = document.querySelector('#new-item-form');
form.addEventListener('submit', handleFormSubmit);
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

  // <form><input type="submit" value="delete" class="button-delete"></form>
   
  document.querySelector('#new-item-form').reset();

}