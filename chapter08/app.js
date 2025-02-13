let h1 = document.querySelector('h1')
let p = document.querySelectorAll('p')

function changeTo(color) {
    h1.setAttribute('style', 'color: ' + color)
    for(let i=0;i<p.length;i++) {
        p[i].setAttribute('style', `color: ${color}`)
    }
}