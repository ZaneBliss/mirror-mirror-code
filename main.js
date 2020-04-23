const form = document.querySelector('form');
const input = document.createElement('input')
input.setAttribute('id','messages');
form.appendChild(input);

const blueBox = document.querySelector('.blueBox')
const redBox = document.querySelector('.redBox')

document.querySelector('input').addEventListener("keyup", function(event) {
    redBox.innerHTML = event.target.value
    blueBox.innerHTML = event.target.value
})