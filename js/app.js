const showBtn = document.getElementById("show-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

// add classlist hidden
const addHidden = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
// remove classlisty hidden
const removeHidden = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
showBtn.addEventListener("click", removeHidden);
closeBtn.addEventListener("click", addHidden);
overlay.addEventListener("click", addHidden);
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHidden();
  }
});

// TYPING
import words from "./data.js";

const randomWor = document.getElementById("random");
const randomInput = document.getElementById("random_word_input");

const num = document.getElementById("user__score");
const second = document.getElementById("user__time");
let globalWord;
let count = 0;
second.parentElement.style.color = "green";
let time = 10;
let level = "easy"

function randomWordGenerator() {
  const randomNum = Math.trunc(Math.random() * words.length);
  randomWor.textContent = words[randomNum];
  globalWord = words[randomNum];

 
}

randomWordGenerator();

randomInput.addEventListener("input", () => {
  if (randomInput.value == globalWord) {
    randomWordGenerator();
    randomInput.value = "";
    count++;
    num.textContent = count;

    if(level == 'easy') {
      time +=5
    }else if ( level == 'medium'){
      time += 3
    }
  }
});
let timer
function showTimeoutModal() {

  const modalBody = document.querySelector(".modal-body p");
  modalBody.textContent = `Sizning yakun natijangiz: ${count}`;
  removeHidden(); 
  clearInterval(timer);
  const music = new Audio("../music/modal.mp3");
  music.play();

}
randomInput.addEventListener("focus", function () 
{
  const timer = setInterval(() => {
    if (time == 0) {
      showTimeoutModal();
    } else {
      time--;
      second.textContent = `${time}s`;
    }

    changeColor();
  }, 1000);
  changeColor();

});

const change__level = document.getElementById("change__level")

change__level.addEventListener("change", ()=>{
 level = change__level.value
})


function changeColor() {
  if (time >= 7 && time < 10) {
    second.parentElement.style.color = "green";
  } else if (time > 3 && time <= 6) {
    second.parentElement.style.color = "gold";
  } else {
    second.parentElement.style.color = "red";
    const music = new Audio("../music/");
    music.play();
  }
}

