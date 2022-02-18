const buttons = document.querySelectorAll('a')
let timer

buttons.forEach(button=>{

  button.addEventListener('click', onClick)
  button.addEventListener('dblclick', onDblClick)
  button.addEventListener('mousedown', onMouseDown)
  button.addEventListener('mouseup', onMouseUp)

})

window.addEventListener('keydown', onKeyDown)

function onClick() {
  this.classList.toggle('purple')
}

function onDblClick() {
  this.classList.toggle('green')
}

function onKeyDown(e) {
  if(e.shiftKey) {
    buttons.forEach(button=>{
      button.setAttribute('class', '')
    })
  } else {
    buttons.forEach(button =>{
      button.setAttribute('class', '')
      const letter = e.key.toLowerCase()
      const firstLetter = button.innerText[0]
      if(firstLetter.toLowerCase() === letter) {
        button.classList.add('purple')
      }
    })
  }
}

function onMouseDown() {
  const self = this
  timer = setTimeout(()=>{
    self.classList.toggle('yellow')
  }, 1000)
}

function onMouseUp() {
  clearTimeout(timer)
}