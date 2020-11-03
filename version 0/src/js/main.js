"use strict";

// drop-down menu

const buttonArrowDesign = document.querySelector(
  ".js-form__box__button--design"
);
const buttonArrowFill = document.querySelector(".js-form__box__button--fill");
const buttonArrowShare = document.querySelector(".js-form__box__button--share");

const formBoxDesign = document.querySelector(".form__color--container");
const formBoxFill = document.querySelector(".form__data");
const formBoxShare = document.querySelector(".form__share--container");

function handleButtonArrowClick(event) {
  const openedButton = event.currentTarget;
  openedButton.classList.toggle("btn-rotate");

  if (buttonArrowDesign.classList.contains("btn-rotate") === true) {
    formBoxDesign.style.height = "200px";
    formBoxDesign.style.opacity = "1";
  } else if (buttonArrowDesign.classList.contains("btn-rotate") === false) {
    formBoxDesign.style.height = "0";
    formBoxDesign.style.opacity = "0";
  }

  if (buttonArrowFill.classList.contains("btn-rotate") === true) {
    formBoxFill.style.height = "556px";
    formBoxFill.style.opacity = "1";
  } else if (buttonArrowFill.classList.contains("btn-rotate") === false) {
    formBoxFill.style.height = "0";
    formBoxFill.style.opacity = "0";
  }

  if (buttonArrowShare.classList.contains("btn-rotate") === true) {
    formBoxShare.style.height = "110px";
    formBoxShare.style.opacity = "1";
  } else if (buttonArrowShare.classList.contains("btn-rotate") === false) {
    formBoxShare.style.height = "0";
    formBoxShare.style.opacity = "0";
    buttonSubmit.classList.remove("change-color");
  }

  event.preventDefault();
}

buttonArrowDesign.addEventListener("click", handleButtonArrowClick);
buttonArrowFill.addEventListener("click", handleButtonArrowClick);
buttonArrowShare.addEventListener("click", handleButtonArrowClick);

// share box

const buttonSubmit = document.querySelector(".js-form__share--button");

function handleButtonSubmit(event) {
  buttonSubmit.classList.add("change-color");

  if (buttonSubmit.classList.contains("change-color")) {
    formBoxShare.style.height = "250px";
    const shareMessageBox = document.querySelector(".form__share--message");
    shareMessageBox.classList.add("js-show-form__share--message");
  }
  sendRequest();
  showURL(true);

  event.preventDefault();
}

buttonSubmit.addEventListener("click", handleButtonSubmit);
