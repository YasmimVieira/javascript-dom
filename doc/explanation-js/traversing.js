let ul = document.querySelector('ul');
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.backgroundColor = 'blue';

let ul2 = document.querySelector('ul');
const div = document.querySelector('div');

console.log(div.childNodes);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);