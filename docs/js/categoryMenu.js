const categoryButton = document.querySelector('.category-button')

categoryButton.addEventListener('click', function (event) {
    const menu = document.querySelector('.category-collapse')
    menu.classList.toggle('category-collapse--show')
})