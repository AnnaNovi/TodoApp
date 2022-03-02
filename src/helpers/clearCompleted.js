import { removeTodo } from "./innerHelpers";

export function clearCompleted(){
  let checkItem = document.querySelectorAll('.todoItem__checkBtn-active');
  for (const item of checkItem) {
    let removeAllTodo = removeTodo.bind(item);
    removeAllTodo();
  }
}