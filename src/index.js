import './index.scss'

import {handleKey, getFromStorage, clearCompleted, filterTodo, darkLight, setTheme} from './helpers'

const setTodo = document.querySelector('#setTodo');
const removeDone = document.querySelector('#filterBar__clearCompleted');
const filterBtn = document.querySelectorAll('.filterBar__filter');
const darkLightImg = document.querySelector('#darkLight');

setTodo.addEventListener('input', function(){
  this.value = this.value[0].toUpperCase() + this.value.slice(1);
})
setTodo.addEventListener('keydown', handleKey);

removeDone.addEventListener('click', clearCompleted);

for (const filter of filterBtn) {
  filter.addEventListener('click', filterTodo);
}

darkLightImg.addEventListener('click', darkLight);

document.addEventListener('DOMContentLoaded', getFromStorage);
document.addEventListener('DOMContentLoaded', setTheme);
