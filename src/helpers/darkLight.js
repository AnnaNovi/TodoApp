export function darkLight(defaultAction = true){
  if (defaultAction) {
    const currentTheme = (localStorage.getItem('theme') === 'darkTheme') ? 'lightTheme' : 'darkTheme';
    localStorage.setItem('theme', currentTheme);
  }

  this.classList.toggle('moon');
  document.querySelector('body').classList.toggle('lightTheme');
  document.querySelector('#setTodo').classList.toggle('lightTheme');
  document.querySelector('.checkBtnCreate').classList.toggle('lightTheme');
  document.querySelector('.filterBar').classList.toggle('lightTheme');
  for (const item of document.querySelectorAll('.todoItem')) {
    item.classList.toggle('lightTheme');
  }
}