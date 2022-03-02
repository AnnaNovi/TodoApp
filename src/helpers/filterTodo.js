export function filterTodo(){
  const filterBtn = document.querySelectorAll('.filterBar__filter');
  const allItem = document.querySelectorAll('.todoItem');

  for (const btn of filterBtn) {
    btn.classList.remove('filterBar__filter-active');
  };
  this.classList.add('filterBar__filter-active');

  switch(this.innerText) {
    case 'All':
      for (const item of allItem) {
        item.classList.remove('hide');
      };
      break;
    case 'Active':
      for (const item of allItem) {
        item.classList.remove('hide');
        const checkItem = item.querySelector('.todoItem__checkBtn');
        if (checkItem.classList.contains('todoItem__checkBtn-active')) {
          item.classList.add('hide');
        }
      };
      break;
    case 'Completed':
      for (const item of allItem) {
        item.classList.remove('hide');
        const checkItem = item.querySelector('.todoItem__checkBtn');
        if (!checkItem.classList.contains('todoItem__checkBtn-active')) {
          item.classList.add('hide');
        }
      };
      break;
  }
}