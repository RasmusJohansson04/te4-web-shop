const button = document.querySelector('.nav-button')

button.addEventListener('click', function (event) {
    const menu = document.querySelector('.nav-collapse')
    menu.classList.toggle('nav-collapse--show')
})