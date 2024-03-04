let head = document.querySelector("h3");
let body = document.querySelector("body");
let btn = document.querySelector(".button");

function btnEnter() {
  btn.style.background = "black";
  btn.style.color = "#2196F3";
}

function btnExit() {
  btn.style.background = "rgba(255, 255, 255, 0.7)";
  btn.style.color = "#3F51B5";
}

let i = 0;
let txt = "Keep Smiling ....😁";
let speed = 220;

function typeWriter() {
  if (i < txt.length) {
    head.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    i = 0;
    head.innerHTML = "";
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
