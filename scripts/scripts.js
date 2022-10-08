const typewriter = document.querySelectorAll('.greetings');

setInterval(() => {
    typewriter[0].classList.remove('typewriter');
    setTimeout(() => {
        typewriter[0].classList.add('typewriter');
    }, 100);
}, 5000);