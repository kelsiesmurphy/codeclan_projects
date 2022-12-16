console.log('App loaded', window);

document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1');
    title.textContent = 'Javascript says Hello World';
    
    const welcomeParagraph = document.querySelector('#welcome-paragraph');
    console.dir(welcomeParagraph);
    
    const redElements = document.querySelectorAll('.red');
    for (element of redElements){
        element.textContent = 'Javascript says Hello World'
    };

    const redElement = document.querySelector('li.red');
    redElement.textContent = 'RED!!!';
    redElement.classList.add('bold');
    
    const newListItem = document.createElement('li');
    newListItem.textContent = 'Purple';
    newListItem.classList.add('purple');
    const list = document.querySelector('ul');
    list.appendChild(newListItem);
})