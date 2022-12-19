const buttons = document.querySelectorAll('.btn')
const textarea = document.querySelector('textarea')

const delete_btn = document.querySelector('.delete')
const space_btn = document.querySelector('.space')
const clean_btn = document.querySelector('.clean')

let chars = []

buttons.forEach( btn => {
    btn.addEventListener('click', () => {
        textarea.value += btn.innerText
        chars = textarea.value.split('')
    })
})

delete_btn.addEventListener('click', () => {
    chars.pop()
    textarea.value = chars.join('')
})

space_btn.addEventListener('click', () => {
    chars.push(' ')
    textarea.value = chars.join('')
})

clean_btn.addEventListener('click', () => {
    while(chars.length > 0) {
        chars.pop();
        textarea.value = chars.join('')
    }
})

