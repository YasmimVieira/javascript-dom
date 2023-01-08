document.querySelector("#football").addEventListener('click', function(e) {
    console.log("Footbal is clicked");

    const target = e.target;

    if(target.matches('li')) {
        target.style.backgroundColor = 'lightgray'
    }
});