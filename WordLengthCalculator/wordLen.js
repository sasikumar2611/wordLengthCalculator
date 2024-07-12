let textbox=document.getElementById('textbox')
let output=document.getElementById('output')
let calcBtn=document.querySelector('.calc-btn')
calcBtn.addEventListener('click',()=>{
    let textboxWords=textbox.value
    let splitWords= textboxWords.split(' ')
    output.value=splitWords.length
    output.disabled=true
})