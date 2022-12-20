import * as ReactApp from './react-app'

ReactApp.render()

let inDom = false

const observer = new MutationObserver(() => {
  if (document.querySelector('.prompt-box-8w')) {
    if (!inDom) {
      const prompt = document.querySelector('.prompt-box-8w')
      const text = document.querySelector('.prompt-box-8w p')
      const yes = document.querySelector('.button-primary-8w')
      const no = document.querySelector('.prompt-button-8w')
      prompt.style.backgroundColor = '#202124'
      text.innerHTML = 'Allows the use of motion tracking'
      yes.innerHTML = 'Yes'
      no.innerHTML = 'No'
      prompt.style.backgroundColor = '#202124'
      no.style.backgroundColor = '#202124'
      yes.style.backgroundColor = '#202124'
      text.style.color = '#ffffff'
      yes.style.color = '#ffffff'
      no.style.color = '#ffffff'
    }
    inDom = true
  } else if (inDom) {
    inDom = false
    observer.disconnect()
  }
})

observer.observe(document.body, {childList: true})