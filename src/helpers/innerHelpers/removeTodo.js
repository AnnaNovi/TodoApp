import {doneTodo} from '.'

export function removeTodo(){
  const itemId = this.parentElement.dataset.id;
  const itemIdCheck = this.parentElement.querySelector('.todoItem__checkBtn');
  const itemIdClose = this.parentElement.querySelector('.todoItem__closeBtn');

  itemIdCheck.removeEventListener('click', doneTodo);
  itemIdClose.removeEventListener('click', removeTodo);
  this.parentElement.remove();
  localStorage.removeItem(itemId);
}