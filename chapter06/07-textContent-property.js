/**
 * The combination of createElement() and textContent has created our complete
 * element node
 * refer index.html code
 * 
 * We could have used innerHTML instead
 * innerHTML exposes your site to possible cross-site scripting (XXS) because inline JavaScript
 * can be added to an element
 * 
 * textContent is safer because it strips out the HTML tag
 */

let newElement = document.createElement('p')
newElement.textContent = 'This is a paragraph text'