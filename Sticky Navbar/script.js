const nav = document.querySelector('nav')

//it listens for a scroll event on the entire window
//every time the user scrolls the function fixNav is called
window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    }
    else {
        nav.classList.remove('active')
    }
}


//here window.scrollY---the no.of pixels the page has been scrolled vertically(top-bottom)


//nav.ffsetHeight---this gives the height(in px)of the .nav element including padding and borders