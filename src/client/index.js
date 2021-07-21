import "./styles/style.scss";
import "./styles/header.scss";
import "./styles/section.scss";
import "./styles/results.scss";
import "./styles/reset.scss";
import "./styles/savedTravelResults.scss";
import img from "./media/placeholder.jpg";
import { handleSubmit } from "./js/app";
import { closeButtonEvent } from "./js/app";
import { saveButtonEvent } from "./js/app";
import { postData } from "./js/helperFunction";
import { getData } from "./js/helperFunction";
import { updateUI } from "./js/helperFunction";

document.getElementById("submit").addEventListener("click", handleSubmit);
document.getElementById("save").addEventListener("click", saveButtonEvent);
document.getElementById("close").addEventListener("click", closeButtonEvent);
const displayImg = new Image();
displayImg.src = img;
document.querySelector("#img-case").appendChild(displayImg);
displayImg.classList.add("travel-img");

export {
  img,
  handleSubmit,
  closeButtonEvent,
  saveButtonEvent,
  postData,
  getData,
  updateUI,
};
