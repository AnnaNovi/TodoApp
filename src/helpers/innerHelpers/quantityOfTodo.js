export function quantityOfTodo(item){
  const itemJSON = JSON.parse(item);
  let quantity = +document.querySelector('#quantityOfTodo').innerText;

  if (itemJSON.done === false) {
    document.querySelector('#quantityOfTodo').innerText = quantity + 1;
  }
}