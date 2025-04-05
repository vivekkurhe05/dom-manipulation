// search for items
const SEARCH = document.forms['search-item'].querySelector('input');
SEARCH.addEventListener('keyup', (e) => {
    // lets grab the user's text, and convert it to lowercase
    let text = e.target.value.toLowerCase();
    // lets grab each li tag
    let groceryList = document.querySelector('#grocery-list ul');
    let groceries = groceryList.getElementsByTagName('li');
    // lets convert the groceries to an array, so we can access the forEach method
    let groceriesArray = Array.from(groceries)
    // loop through each grocery item
    groceriesArray.forEach((grocery) => {
        let groceryName = grocery.firstElementChild.textContent;
        // convert all of our text into lowercase
        let groceryNameLower = groceryName.toLowerCase();
        // now we can use indexOf to see if our text can be found within our grocery name.
        // If nothing is found, a value of -1 is returned and we can hide the item.
        if(groceryNameLower.indexOf(text) == -1) {
            grocery.style.display = 'none';
        }else {
            grocery.style.display = 'block';
        }
    })
})


// Hide items
let checkbox = document.querySelector('#hide');
checkbox.addEventListener('change', (e) => {
    let groceryList = document.getElementById('grocery-list');
    if(checkbox.checked) {
        groceryList.style.display = 'none';
    }else {
        groceryList.style.display = 'block';
    }
})

// Add items
let formAdd = document.getElementById('add-item');
// attach an event listener
formAdd.addEventListener('submit', (e) => {
    // prevent the page from refreshing
    e.preventDefault();

    // lets grab user's text
    let text = formAdd.querySelector('input').value;
    // clear the input box
    formAdd.querySelector('input').value = null;

    // creating the list items dynamically
    let li = document.createElement('li');
    let groceryName = document.createElement('span');
    let deleteButton = document.createElement('span');

    // the spans are nested within the li element
    li.appendChild(groceryName);
    li.appendChild(deleteButton);

    // lets grab parent element
    let ul = document.getElementsByTagName('ul')[0];
    // attach our newly created element to the dom
    ul.appendChild(li);

    // add text
    groceryName.textContent = text;
    deleteButton.textContent = 'delete';

    // add classes
    groceryName.classList.add('item');
    deleteButton.classList.add('delete');

    // clear input field
    // formAdd.querySelector('input').value = '';
})


// Delete items
// event bubbling example
let groceryListUL = document.querySelector('#grocery-list ul');
// add event listener
groceryListUL.addEventListener('click', remove);
// define our handler function
function remove(e) {
    let target = e.target;
    // delete item through event bubbling
    if(target.className == 'delete') {
        let li = target.parentElement;
        li.remove();
    }
}

// tabs
// lets grab our headings - our parent UL tag
let heading = document.querySelector('.heading');
// lets grab our panels
let panels = document.querySelectorAll('.panel');
// define a selectedPanel variable to toggle between classes
let selectedPanel = null;

// taking advantage of event bubbling, lets attach our event listener on the UL parent element
heading.addEventListener('click', (e) => {
    // lets find out which <li> tag triggered the event
    let target = e.target;
    // lets use our dataset to get our data value ... we have called ours 'clicked' but you can
    // call it whatever you like
    let dataAttribute = e.target.dataset.clicked;

    if(target.tagName === 'LI') {
        // remove the currently selected element
        if(selectedPanel != null) {
            selectedPanel.classList.toggle('selected')
        }
        selectedPanel = target;
        selectedPanel.classList.toggle('selected');

        // now its time to find the panel we want to show
        let targetPanel = document.querySelector(dataAttribute);
        // now we need to determine if the panel currently selected is the one displayed. We can use
        // the forEach function because querySelectorAll returns a NodeList
        panels.forEach(panel => {
            if(panel === targetPanel) {
                panel.classList.add('active');
            }else {
                panel.classList.remove('active');
            }
        })


    }
});

// lets deal with our button to display the answer
let answerButton = document.getElementById('showAnswer');
answerButton.addEventListener('click', answer);

function answer() {
    document.getElementById('answer').classList.add('show');
    document.getElementById('answer').textContent = 'AN IMPASTA';
    answerButton.style.display = 'none';
}