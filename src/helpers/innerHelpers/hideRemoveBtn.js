export function hideRemoveBtn(){
  const todoClose = this.querySelector('.todoItem__closeBtn');
  todoClose.classList.add('hide');
}