// when we use getElementsByClassName, it returns HTMLCollection.
// HTMLCollection is not the same as array. You cannot use forEach() loop with HTMLCollection
// But you can use for loop to loop through the HTMLCollection.

// use index.html for this example

// To use forEach on HTMLCollection, convert HTMLCollection to Array first using any of the following
// Array.prototype.slice.call(HTMLCollection)
// Array.from(HTMLCollection)

// this will work
let classElements = document.getElementsByClassName('header')
for(let i=0;i<classElements.length;i++) {
    classElements[i].style.backgroundColor = 'pink'
}

// this will not work
let classElements2 = document.getElementsByClassName('header')
classElements2.forEach((elem) => elem.style.backgroundColor = 'pink')