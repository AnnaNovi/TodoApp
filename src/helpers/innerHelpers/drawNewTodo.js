import {addRemoveBtn, doneTodo, removeTodo} from '.'

export function drawNewTodo(i, contentJSON, defaultAction = false){
  const newTodo = document.createElement('div');
  const newTodoContent = document.createElement('span');
  const newTodoCheck = document.createElement('span');
  const newTodoClose = document.createElement('button');
  const container = document.querySelector('.todoList')

  newTodo.classList = 'todoItem';
  newTodo.setAttribute('data-id', i);
  if(defaultAction) {
    const currentTheme = localStorage.getItem('theme');
    if(currentTheme === 'lightTheme') {
      newTodo.classList.add('lightTheme');
    }
  }

  newTodoContent.classList = 'todoItem__content';
  newTodoContent.innerText = contentJSON.content;

  newTodoCheck.classList = 'todoItem__checkBtn';

  if(contentJSON.done === true){
    newTodoCheck.classList.add('todoItem__checkBtn-active');
    newTodoContent.classList.add('todoItem__content-active');
  }

  newTodoClose.classList = 'todoItem__closeBtn hide';
  
  newTodo.append(newTodoContent);
  newTodo.append(newTodoCheck);
  newTodo.append(newTodoClose);
  container.prepend(newTodo);

  newTodoCheck.addEventListener('click', doneTodo);
  newTodoClose.addEventListener('click', removeTodo);
  newTodo.addEventListener('mouseover', addRemoveBtn);
}

