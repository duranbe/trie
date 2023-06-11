import './style.css'
import { setupListener } from './listener.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <input type="text" id="text-input"></input>
    <button id='enter-btn'>Enter</button>
  </div>

  <div id="autocomplete">

  </div>
`

setupListener(document.getElementById('text-input') as HTMLInputElement,
              document.getElementById('autocomplete') as HTMLElement,
              document.getElementById('enter-btn') as HTMLButtonElement)
