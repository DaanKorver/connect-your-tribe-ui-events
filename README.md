# UI Events
<img src="https://github.com/DaanKorver/connect-your-tribe-ui-events/blob/main/assets/ui%20events.png" />

## Beschrijving
Bij deze leertaak heb ik geleerd hoe ik verschillende event listeners kan gebruiker om UI interacties te maken voor de gebruiker.

## Experimenten
```js
// Toggled een paarse kleur op click
function onClick() {
  this.classList.toggle('purple')
}

// Toggled een groene kleur op dubbele click
function onDblClick() {
  this.classList.toggle('green')
}

// Als je de shift toets in klikt word alles gecleared, als het een andere toets is gaat hij kijken of die toets
// overeen komt met de eerste letter van een button, zo ja? Highlight!
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
        button.classList.toggle('purple')
      }
    })
  }
}

// Set een timeout die na 1 seconden de knop naar geel veranderd
function onMouseDown() {
  const self = this
  timer = setTimeout(()=>{
    self.classList.toggle('yellow')
  }, 1000)
}


// Minder dan 1 seconden ingedrukt? Timeout word gecleared.
function onMouseUp() {
  clearTimeout(timer)
}
```

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
