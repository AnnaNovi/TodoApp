import {newTodo, addNewTodo} from '.'

export function addForStorage(content){
  const newTodoItem = new newTodo(content);
  const newTodoItemJSON = JSON.stringify(newTodoItem);
  if (localStorage.length === 1) {
    localStorage.setItem(0, newTodoItemJSON);
    addNewTodo(0, newTodoItemJSON, true);
  } else if (localStorage.length > 0) {
    let keyArray = [];
    for(let i=0; i<localStorage.length; i++) {
      let key = localStorage.key(i);
      if(+key || +key === 0) {
        keyArray.push(+key);
      }
    }
    let maxKey = Math.max(...keyArray);
    localStorage.setItem(maxKey + 1, newTodoItemJSON);
    addNewTodo(maxKey + 1, newTodoItemJSON, true);
  }
}