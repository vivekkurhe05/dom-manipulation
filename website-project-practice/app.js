// add items
let formAdd = document.getElementById('add-item');
formAdd.addEventListener('submit', (e) => {
    e.preventDefault();

    let text = formAdd.querySelector('input').value;
    formAdd.querySelector('input').value = "";

    let groceryItem = document.createElement('li');
    let groceryName = document.createElement('span');
    let deleteGrocery = document.createElement('span');

    groceryName.textContent = text;
    deleteGrocery.textContent = 'delete';

    groceryItem.appendChild(groceryName);
    groceryItem.appendChild(deleteGrocery);

    let groceryList = document.querySelector('#grocery-list ul');
    groceryList.appendChild(groceryItem)

    groceryName.classList.add('item');
    deleteGrocery.classList.add('delete');
})


// hide grocery list
let checkbox = document.getElementById('hide');
checkbox.addEventListener('change', (e) => {
    let groceryList = document.getElementById('grocery-list');
    if(e.target.checked) {
        groceryList.style.display = 'none';
    }else {
        groceryList.style.display = 'block';
    }
})


// delete grocery
// event bubbling example
let groceryListUL = document.querySelector('#grocery-list ul');
groceryListUL.addEventListener('click', (e) => {
    let target = e.target;
    if(target.className === 'delete') {
        let li = target.parentElement;
        li.remove();
    }
})