/**
 * Refer index-assignment.html
 * open page in browser and try below commands in console
 * 
 * 1. Return the number of element nodes within the <ul> tag
 * 2. Return the number of nodes (any type) within the <ul> tag
 */

let ulChildren = document.getElementsByTagName('ul')
ulChildren // returns HTMLCollection [ul]
ulChildren[0].children // returns HTMLCollection [li,li,li,li,li]
ulChildren[0].childElementCount // returns 5
// or
ulChildren[0].children.length // returns 5
ulChildren[0].childNodes // returns NodeList [text,comment,text,li,text,li,text,li,text,li,text,li,text]
ulChildren.childNodes.length // returns 13