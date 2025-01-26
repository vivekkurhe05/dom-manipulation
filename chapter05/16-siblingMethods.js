/**
 * Refer index.html
 * open page in browser and try below commands in console
 */

let ul = document.getElementsByTagName('ul')[0]
let middle = ul.children[1]
middle.previousElementSibling.style.backgroundColor = 'pink'
middle.nextElementSibling.style.backgroundColor = 'red'