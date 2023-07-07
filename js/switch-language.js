/********** get html elements needed for language switching logic **********/
const englishContent = document.getElementById("english-content");
const arabicContent = document.getElementById("arabic-content");
const btns = document.querySelectorAll(".switch-lang button");

/********** when the user clicks the language switching buttons to change the content language **********/
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerHTML == "EN") {
      localStorage.setItem("content-language", "en");
      englishContent.style.setProperty("display", "block");
      arabicContent.style.setProperty("display", "none");
      btns.forEach((button) => {
        button.style.setProperty("background-color", "rgb(189, 189, 189)");
      });
      btn.style.setProperty("background-color", "rgb(0, 84, 166)");
    } else if (btn.innerHTML == "AR") {
      localStorage.setItem("content-language", "ar");
      arabicContent.style.setProperty("display", "block");
      englishContent.style.setProperty("display", "none");
      btns.forEach((button) => {
        button.style.setProperty("background-color", "rgb(189, 189, 189)");
      });
      btn.style.setProperty("background-color", "rgb(0, 84, 166)");
    }
  });
});

/********** when the user opens the website gets him the last language **********/
let currentLang = localStorage.getItem("content-language");
if (currentLang) {
  if (currentLang == "en") {
    englishContent.style.setProperty("display", "block");
    arabicContent.style.setProperty("display", "none");
    btns.forEach((b) => {
      if (b.innerHTML == "EN") {
        b.style.setProperty("background-color", "rgb(0, 84, 166)");
      } else {
        b.style.setProperty("background-color", "rgb(189, 189, 189)");
      }
    });
  } else if (currentLang == "ar") {
    arabicContent.style.setProperty("display", "block");
    englishContent.style.setProperty("display", "none");
    btns.forEach((b) => {
      if (b.innerHTML == "AR") {
        b.style.setProperty("background-color", "rgb(0, 84, 166)");
      } else {
        b.style.setProperty("background-color", "rgb(189, 189, 189)");
      }
    });
  }
} else {
  // set the default language to english
  localStorage.setItem("content-language", "en");
  englishContent.style.setProperty("display", "block");
  arabicContent.style.setProperty("display", "none");
  btns.forEach((b) => {
    if (b.innerHTML == "EN") {
      b.style.setProperty("background-color", "rgb(0, 84, 166)");
    } else {
      b.style.setProperty("background-color", "rgb(189, 189, 189)");
    }
  });
}
