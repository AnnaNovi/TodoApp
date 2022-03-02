import { darkLight } from ".";

export function setTheme(){
  if(localStorage.getItem('theme')) {
    const currentTheme = localStorage.getItem('theme');
    if(currentTheme === 'lightTheme') {
      const darkLightTheme = darkLight.bind(document.querySelector('#darkLight'));
      darkLightTheme(false);
    }
  } else {
    localStorage.setItem('theme', 'darkTheme')
  }
}