// refer index.html
// open page in browser and try below commands in console

let h2 = $0; // returns selected element in DOM
console.log(h2) // prints <h2 class="joke">Joke of the day</h2> element

h2.parentNode; // prints <div id="wrapper-2">...</div>

h2.parentNode.parentNode // prints <main>...</main>

h2.parentNode.parentNode.parentNode // prints <body>...</body>

// exercise 1

let div = document.getElementById('wrapper')
let grandParent = div.parentNode.parentNode // selects body tag
grandParent.style.backgroundColor = 'blue'