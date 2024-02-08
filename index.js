
var navItem = document.querySelector('.fold')
var closeBtn = document.querySelector('.close-div')
var openBtn = document.querySelector('.bars')
var firstBar = document.querySelector('.bars > div:nth-child(1)')
var secondBar = document.querySelector('.bars > div:nth-child(3)')
closeBtn.addEventListener('click', (e)=>{
    navItem.classList.toggle('mobile')
    firstBar.classList.remove('active')
    secondBar.classList.remove('active')
})
openBtn.addEventListener('click', (e)=>{
    navItem.classList.toggle('mobile')
    firstBar.classList.add('active')
    secondBar.classList.add('active')
})