window.addEventListener('click', function() {
    console.log("window")
}, true);

document.addEventListener('click', function() {
    console.log("document")
}, true);

document.querySelector('.div2').addEventListener('click', function() {
    console.log('div 2');
}, true);

document.querySelector('.div1').addEventListener('click', function(e) {
    e.stopPropagation();
    console.log('div 1');
}, true);

document.querySelector('button').addEventListener('click', function(e) {
    console.log(e.target.innerText = 'clicked!');
}, true);
