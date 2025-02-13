// step 1: add text dynamically to the div
document.getElementById('note').textContent = "This is pure DOM manipulation"

// step 2: changing the background color of the circle on a click event
let circle = document.getElementById('circle')
circle.addEventListener('click', changeColor)

function changeColor() {
    let randomColor = Math.floor(Math.random() * 16777216).toString(16)
    circle.style.backgroundColor = `#${randomColor}`
}