import { Trie } from "./Trie";

export function setupListener(element: HTMLInputElement, element2: HTMLElement, element3: HTMLButtonElement) {

  var autocompleteTrie =  new Trie();
  var inputWord = [];
  element.addEventListener('keyup', () => {

    if(element.value.length>0){

      element2.innerHTML = '';

      autocompleteTrie.getSuggestions(element.value).forEach( (text) =>{
        var n = document.createElement('span');
        n.innerText = text;
        element2.appendChild(n);
      })
    }
    
   

  })

  element3.addEventListener("click",() =>{
    
    autocompleteTrie.insertWord(element.value);
    inputWord.push(element.value)
    //element2.innerText = inputWord.toString();
  })
}
