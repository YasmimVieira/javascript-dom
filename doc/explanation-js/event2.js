const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
    console.log("oi")
    if(hiddenContent.classList.contains('reveal-btn')) {
        console.log("oi", hiddenContent.classList.contains('reveal-btn'))

        hiddenContent.classList.remove('reveal-btn');
    } else {
        hiddenContent.classList.add('reveal-btn');
    }
}

revealBtn.addEventListener('click', revealContent);