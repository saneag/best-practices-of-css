const typewriter = document.querySelectorAll('.greetings');

setInterval(() => {
    typewriter[0].classList.remove('typewriter');
    setTimeout(() => {
        typewriter[0].classList.add('typewriter');
    }, 100);
}, 5000);

function languageChanger(language = 'en') {
    const description = document.querySelector('.description');
    if (language === 'en') {
        description.innerHTML = `
            <p>I am an IT student at UTM passionate about web application development. 
            I have started creating websites since 2018. I am a fast learner and I am 
            always looking for new challenges.</p>
            <p>Do you search a great team player? Yeah, that's me. I'm always ready 
            to help my colleagues.</p>
        `
    } else if (language === 'ru') {
        description.innerHTML = `
            <p>Я студент ИТ-специальности в ТУМ, увлекающийся разработкой веб-приложений. 
            Я начал создавать сайты с 2018 года. Я быстро учусь и всегда ищу новые 
            вызовы.</p>
            <p>Вы ищете отличного командного игрока? Да, это я. Я всегда готов помочь 
            своим коллегам.</p>
        `
    }
    else if (language === 'ro') {
        description.innerHTML = `
            <p>Sunt un student din UTM la specialitatea TI, pasionat de dezvoltarea de aplicații web. 
            Am început să creez site-uri din 2018. Învăț rapid și 
            întotdeauna caut provocări noi.</p>
            <p>Căutați un jucător de echipă bun? L-ați găsit. Sunt mereu gata să 
            ajut colegii mei.</p>
        `
    }
}

const dropdownLink = document.querySelectorAll('.dropdown__link');
dropdownLink.forEach(link => {
    link.addEventListener('click', () => {
        dropdownLink.forEach(link => {
            link.classList.remove('active');
        });
        link.classList.add('active');
    });
});


languageChanger()