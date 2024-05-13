export function handleScroll(setIsScrolled) {


    //version mobile
    if ( document.location.pathname === '/' && window.scrollY > document.getElementById('a-propos').getBoundingClientRect().top + window.scrollY) {
        document.querySelector('.nav__menu__btn').style.background = "black"
    }
    else {
        document.querySelector('.nav__menu__btn').style.background = "none"
    }

    // pour afficher ou le menu
    if (window.scrollY > 50 || document.location.pathname !== '/') {
        setIsScrolled(true);
    } else {
        setIsScrolled(false);

    }


    // pour verifier sur quelle section on est
    // on recupere toutes les sections
    const sections = document.getElementsByClassName('section-item');
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionBottom = section.getBoundingClientRect().bottom + window.scrollY;

        const postionScroll = window.scrollY + 100;

        if (postionScroll > sectionTop && postionScroll < sectionBottom) {
            return parseInt(section.dataset.item);
        }

    }

    return -1
}

