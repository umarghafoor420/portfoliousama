
let menuIcon = document.querySelector('#menu-icon');
let navabr = document.querySelector('.navbar');

menuIcon.oneclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}



let section = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });
        }

    });

    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)
};