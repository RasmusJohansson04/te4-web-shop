const navButton = document.querySelector('.nav-button')

navButton.addEventListener('click', function (event) {
    const menu = document.querySelector('.nav-collapse')
    menu.classList.toggle('nav-collapse--show')
})