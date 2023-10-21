

var navbar = document.getElementById('navbar')
var backToTop = document.querySelector('.backToTop')

console.log(backToTop)

window.onscroll = function() {

    if(window.scrollY >= 651) {
        navbar.classList.remove('bg-transparent')
        navbar.classList.add('bg-dark')
        if(window.scrollY >= 751) {
            backToTop.classList.remove('d-none')
            backToTop.classList.add('d-block')
        } else {
            backToTop.classList.remove('d-block')
            backToTop.classList.add('d-none')
        }
    } else {
        navbar.classList.remove('bg-dark')
        navbar.classList.add('bg-transparent')
    }
}

backToTop.onclick = function() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
}