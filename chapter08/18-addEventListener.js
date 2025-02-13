/**
 * This is a modern approach
 * 
 * We do not assign an event directly on a property of the HTML element
 * 
 * Instead, we use the addEventListener() method
 * 
 * This event listener will 'listen' or watch for an event being fired on the HTML
 * element that we attach it to.
 * 
 * syntax:
 * addEventListener(event, callback)
 * 
 * example: 
 * let btn = document.getElementById("show-more")
 * btn.addEventListener('click', () => alert("Example"))
 * 
 * refer index4.html
 */