/**
 * document.getElementById() - returns an element object
 * document.getElementsByName() - returns an HTML collection
 * document.getElementsByClassName() - returns an HTML collection
 * document.getElementsByTagName() - returns an HTML collection
 * document.querySelector() - returns an element object
 * document.querySelectorAll() - returns a NodeList
 * document.createElement() - creates a new element
 * document.documentElement - returns html code of the page
 * element.textContent - return text of the element
 * element.textContent = "" // sets text to the element
 * parentElem.appendChild(childElem) - appends child element
 * element.insertBefore(newElem, Elem you want to insert before)
 * parentElem.removeChild(childElem) - removes child element of the parent
 * element.remove() - removes element from the dom
 * children - returns HTMLCollection of parent's child elements
 * childNodes - returns a NodeList of element's child nodes (e.g element, text, comment, spaces)
 * nodeType
 * nodeName
 * nodeValue
 * element.parentElement - returns the parent element of a child element
 * element.previousElementSibling - returns previous sibling element
 * element.nextElementSibling - returns next sibling element
 * element.parentNode - return the parent node where node could be text, spaces, element
 * element.previousSibling - returns previous node where node could be text, spaces, element, comments
 * element.nextSibling - returns next node where node could be text, spaces, element, comments
 * element.firstElementChild - returns first child element of parent element
 * element.lastElementChild - returns last child element of parent element
 * element.childElementCount - returns length of HTMLCollection of parent element
 * input.value - returns value of the text field.
 * classList - this property returns the CSS classnames of an element.
 * className - this property overrides the existing class name.
 */

/**
 * Notes:
 * 
 * 1. HTMLCollection is not an array. So you cannot use forEach on HTMLCollection. You should use for loop.
 * 2. You can use forEach on NodeList.
 */