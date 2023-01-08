const buttonTwo = document.querySelector('.bnt-2');

function alertButton() {
    alert('I love JS')
}

buttonTwo.addEventListener('click', alertButton);

// Mouseover
const boxColor = document.querySelector('.box-3');

function changedColor() {
    boxColor.style.backgroundColor = 'blue';
}

boxColor.addEventListener('mouseover', changedColor);