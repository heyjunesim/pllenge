const HIDDEN_CLASSNAME = "hidden";

//countdown
const countdown = document.querySelector("h3#countdown");

const deadline = new Date("sep 19, 2021 23:59:59").getTime();
const now = new Date().getTime();
const time = deadline - now;
const days = Math.floor(time / (1000 * 60 * 60 * 24));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((time % (1000 * 60)) / 1000);

function getCountdown() {
  if (time >= 0) {
    countdown.innerText = `⏳ 남은 시간: ${days}일 ${hours}시간 ${minutes}분 ⌛️`;
  } else {
    countdown.innerText = "플린지가 종료되었습니다. 성원에 감사드립니다 🙇‍♀️🙇🙇‍♂️";
  }
}

getCountdown();
setInterval(getCountdown, 1000);

//player number
const playerNumber = document.getElementsByClassName("player").length;
const currentPlayers = document.getElementById("current-players");

function getCurrentPlayers() {
  currentPlayers.innerText = `현재 ${playerNumber}명이 참여하고 있어요! 친구들에게 더 널리널리 알려 함께 지구를 구해보아요!`;
}

getCurrentPlayers();

//icons
const icons = [
  "https://image.flaticon.com/icons/png/512/1538/1538424.png",
  "https://image.flaticon.com/icons/png/512/1538/1538414.png",
  "https://image.flaticon.com/icons/png/512/1538/1538408.png",
  "https://image.flaticon.com/icons/png/512/1538/1538431.png",
  "https://image.flaticon.com/icons/png/512/1538/1538433.png",
  "https://image.flaticon.com/icons/png/512/1538/1538427.png",
  "https://image.flaticon.com/icons/png/512/1538/1538416.png",
  "https://image.flaticon.com/icons/png/512/1538/1538422.png",
  "https://image.flaticon.com/icons/png/512/1538/1538429.png",
];

for (i = 0; i < playerNumber; i++) {
  document.getElementsByClassName("avatar-pic")[i].src = `${
    icons[Math.floor(Math.random() * icons.length)]
  }`;
}

//plastic pop
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");
const p5 = document.querySelector("#p5");
const CLICKING_CLASSNAME = "clicking";

function p1Click() {
  p1.classList.add(CLICKING_CLASSNAME);
}

function p2Click() {
  p2.classList.add(CLICKING_CLASSNAME);
}

function p3Click() {
  p3.classList.add(CLICKING_CLASSNAME);
}

function p4Click() {
  p4.classList.add(CLICKING_CLASSNAME);
}

function p5Click() {
  p5.classList.add(CLICKING_CLASSNAME);
}

p1.addEventListener("mousedown", p1Click);
p2.addEventListener("mousedown", p2Click);
p3.addEventListener("mousedown", p3Click);
p4.addEventListener("mousedown", p4Click);
p5.addEventListener("mousedown", p5Click);

//window size
const plastic = document.querySelector(".plastic");
const explanation = document.querySelector("#explanation");
const windowSize = window.innerWidth;
if (windowSize < 600) {
  window.alert("이 페이지는 PC버전으로 확인하는 것을 권장드립니다🙌");
  plastic.classList.add(HIDDEN_CLASSNAME);
  explanation.classList.add(HIDDEN_CLASSNAME);
}
