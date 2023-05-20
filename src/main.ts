import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <input type="text" id="text-input"></input>
  </div>
`

setupCounter(document.getElementById('text-input') as HTMLInputElement)
