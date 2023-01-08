// Manipulando style
const listItem = document.querySelectorAll('.list-items');

for(i = 0; i < listItem.length; i++) {
    listItem[i].style.fontSize = '2rem'
}

// Criando elemento
const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li);

// Modificando texto
li.innerText  = 'X-men';

// Modificando atributos e classes
li.setAttribute('id', 'title');
li.removeAttribute('id');

const title = document.querySelector('#title');
console.log(title.getAttribute('id'));

li.classList.add('list-items');
console.log(li.classList.contains('list-items'));

// Removendo elemento
li.remove();