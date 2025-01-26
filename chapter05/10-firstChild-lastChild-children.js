// refer index.html
// open page in browser and try below commands in console

let bodyChildren = document.body.children
console.log(bodyChildren)

for(let i=0;i<bodyChildren.length;i++) {
    let child = bodyChildren[i]
    child.style.border = '5px solid red';
}

let h1 = document.getElementsByTagName('h1')
console.log(h1) // returns html collection
h1[0].children // returns empty collection
h1[0].firstChild // returns "welcome"
h1[0].lastChild // returns "welcome"
h1[0].firstElementChild // returns null