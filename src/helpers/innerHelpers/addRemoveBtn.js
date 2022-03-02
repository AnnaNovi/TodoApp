import {hideRemoveBtn} from '.'

export function addRemoveBtn(){
  const todoClose = this.querySelector('.todoItem__closeBtn');
  todoClose.classList.remove('hide');
  this.addEventListener('mouseout', hideRemoveBtn);
}