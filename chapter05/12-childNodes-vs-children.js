// refer index.html
// open page in browser and try below commands in console

// childNodes property returns nodes: Element nodes, text nodes, and comment nodes
// children property returns elements (ignores text and comments)

let ul = document.getElementsByTagName('ul')[0]
ul.childNodes // returns NodeList [text, li, text, li, text, li, text]
ul.firstElementChild.style.backgroundColor = 'red'
let ulChildren = ul.children
ulChildren // returns HTMLCollection [li, li, li]

for(let i=0;i<ulChildren.length;i++) {
    let li = ulChildren[i]
    li.style.border = '5px solid blue';
}