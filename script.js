const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const box = document.querySelector('.box')
// const text = document.querySelector('h1')
// btn.addEventListener('click', () => {

function add() {
// text.innerText = input.value
if(input.value != ''){
    
    const newEl = document.createElement('p')
    
    newEl.innerText = input.value
    box.appendChild(newEl)
    
    input.value = ''
    
    newEl.addEventListener('click', () => {
    newEl.remove()
    })
    
}else{
    alert('Заполни че нибудь ')
}
}
btn.addEventListener('click', add)
input.addEventListener('keypress', (e) => {
    if(e.key == 'Enter')
        add()
})
