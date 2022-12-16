document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
});

const handleFormSubmit = function (event) {
  event.preventDefault();
  
  const newListItem = document.createElement('li');
  newListItem.textContent = `
    ${this.title.value}
    ${this.author.value}
    ${this.category.value}
  `;
  const list = document.querySelector('ul');
    list.appendChild(newListItem);
  document.getElementById('new-item-form').reset();
}