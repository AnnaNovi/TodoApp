import { addForStorage } from "./innerHelpers";

export function handleKey(e){
  if (e.key === 'Enter' && setTodo.value !== '') {
    let quantity = +document.querySelector('#quantityOfTodo').innerText;

    addForStorage(setTodo.value)
    setTodo.value = '';
    document.querySelector('#quantityOfTodo').innerText = quantity + 1;
  }
}