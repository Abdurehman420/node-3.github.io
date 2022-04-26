const btn = document.querySelector('.main__left__button')
const sidebar = document.querySelector('.sidebar')


btn.addEventListener('click' , ( ) =>{
    sidebar.classList.toggle('open')
})