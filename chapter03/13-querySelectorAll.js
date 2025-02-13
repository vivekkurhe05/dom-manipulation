// When we use querySelectorAll, it returs a NodeList.
// You can use forEach() loop with NodeList

// you can convert NodeList to Array using any of the following
// Array.prototype.slice.call(NodeList)
// Array.from(NodeList)

let queryAllElements = document.querySelectorAll('.query-all')
queryAllElements.forEach(el => el.style.backgroundColor='red')