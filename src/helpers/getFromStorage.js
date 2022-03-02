import {addNewTodo, quantityOfTodo} from './innerHelpers'

export function getFromStorage(){
  let keyArray = [];
  for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    if(+key || +key === 0) {
      keyArray.push(+key);
    }
  }
  keyArray.sort(function(a, b) {
    return a - b;
  });
  for (const key of keyArray) {
    let item = localStorage.getItem(key);
    addNewTodo(key, item, false);
    quantityOfTodo(item);
  }
}