import {newTodo} from '.'

export function doneTodo(){
  const todoId = this.parentElement.dataset.id;
  const textTodo = this.previousSibling;
  const checkTodo = JSON.parse(localStorage.getItem(todoId));
  let quantity = +document.querySelector('#quantityOfTodo').innerText;

  this.classList.toggle('todoItem__checkBtn-active');
  textTodo.classList.toggle('todoItem__content-active');

  let changeDone = (checkTodo.done === false) ? true : false;
  if (changeDone === true) {
    document.querySelector('#quantityOfTodo').innerText = quantity - 1;
  } else {
    document.querySelector('#quantityOfTodo').innerText = quantity + 1;
  }

  const newTodoItem = new newTodo(checkTodo.content, changeDone, checkTodo.note);
  const newTodoItemJSON = JSON.stringify(newTodoItem);

  localStorage.setItem(todoId, newTodoItemJSON);
}