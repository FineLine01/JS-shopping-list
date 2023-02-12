
//add item
const userInputAddItem = document.querySelector('.userInputAddItem');
const addItem = document.querySelector('button.addItem');

//remove item 
const removeItem = document.querySelector('button.removeItem');

//list items 
const listDiv = document.querySelector('.list');
let listItem = document.querySelectorAll('li');

//add item button event

addItem.addEventListener ('click', () => {
    let list = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContent = userInputAddItem.value;
    let appendedItem = list.appendChild(li);
    for(let i = 0; i < appendedItem.length; i++) 
    userInputAddItem.value = '';
    document.querySelector('.userInputAddItem').value = "";

});

removeItem.addEventListener('click', () => {
    let list = document.querySelector('ul');
    let li = document.querySelector('li:last-child');
    list.removeChild(li);;
});