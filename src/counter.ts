export function setupCounter(element: HTMLInputElement) {
  element.addEventListener('keyup', () => console.log(element.value))
}
