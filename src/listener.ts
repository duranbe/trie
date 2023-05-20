export function setupListener(element: HTMLInputElement, element2: HTMLElement) {
  element.addEventListener('keyup', () => {

    console.log(element.value);
    element2.innerText = element.value;
  })
}
