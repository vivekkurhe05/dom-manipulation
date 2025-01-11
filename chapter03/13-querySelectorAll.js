// When we use querySelectorAll, it returs a NodeList.
// You can use forEach() loop with NodeList

let queryAllElements = document.querySelectorAll('.query-all')
queryAllElements.forEach(el => el.computedStyleMap.backgroundColor='red')