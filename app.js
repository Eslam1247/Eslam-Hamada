const ham = document.querySelector('.ham')
const menu = document.querySelector('.navbar')


ham.addEventListener('click' , () => {
    ham.classList.toggle('active')
    menu.classList.toggle('active')
})