/*
This code is used to implement language switching functionality on a webpage. It uses JavaScript to manipulate the HTML elements of the page.

The code starts by getting the HTML elements needed for the language switching logic. Specifically, it gets the elements with the IDs "english-content" and "arabic-content", as well as all the buttons with the class "switch-lang button".

The code then adds event listeners to each of the language switching buttons. When a button is clicked, the code checks its innerHTML to determine which language to switch to. If the innerHTML is "EN", the code switches to English by calling the switchLanguage() function with the argument "en". If the innerHTML is "AR", the code switches to Arabic by calling the switchLanguage() function with the argument "ar".

The switchLanguage() function sets the content-language item in localStorage to the selected language. It then checks the selected language and sets the display style of the appropriate content element to "block" and the other content element to "none". It also sets the background color of the active button to blue and the background color of the inactive button to gray.

The setActiveButton() function is used by switchLanguage() to set the background color of the active button to blue and the background color of the inactive button to gray.

Finally, the code checks localStorage for the last selected language. If a language is found, it calls the switchLanguage() function with the appropriate argument. If no language is found, it defaults to English by calling switchLanguage() with the argument "en".
*/

/********** get html elements needed for language switching logic **********/
const englishContent = document.getElementById("english-content");
const arabicContent = document.getElementById("arabic-content");
const button = document.getElementById("lang-switch-btn");

/********** when the user clicks the language switching buttons to change the content language **********/
button.addEventListener("click", () => {
  if (button.innerHTML === "English") switchLanguage("en");
  else if (button.innerHTML === "Arabic") switchLanguage("ar");
});

function switchLanguage(language) {
  localStorage.setItem("content-language", language);

  if (language === "en") {
    englishContent.style.display = "block";
    arabicContent.style.display = "none";
    button.innerHTML = "Arabic";
  } else if (language === "ar") {
    arabicContent.style.display = "block";
    englishContent.style.display = "none";
    button.innerHTML = "English";
  }
}

/********** when the user opens the website gets him the last language **********/
const currentLang = localStorage.getItem("content-language");
if (currentLang) {
  switch (currentLang) {
    case "en":
      switchLanguage("en");
      break;
    case "ar":
      switchLanguage("ar");
      break;
    default:
      switchLanguage("en");
  }
} else {
  switchLanguage("en");
}

/********** show and hide navbar shadow **********/
const nav = document.querySelector(".nav-container");
console.log(nav);
function activateNav() {
  if (this.scrollY > 0) nav.style.boxShadow = "0px 0px 10px 1px #eee";
  else nav.style.boxShadow = "0px 0px 0px 0px #eee";
}
window.addEventListener("scroll", activateNav);
