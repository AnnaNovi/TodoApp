import {drawNewTodo} from '.'

export function addNewTodo(i, contentJSON, defaultAction){
  let contentObj = JSON.parse(contentJSON);
  drawNewTodo(i, contentObj, defaultAction);
}