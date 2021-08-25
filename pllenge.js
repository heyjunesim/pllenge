//countdown
const countdown = document.querySelector("h3#countdown");

const deadline = new Date("sep 20, 2021 23:59:59").getTime();
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

const chosenIcon = icons[Math.floor(Math.random() * icons.length)];

for (i = 0; i < playerNumber; i++) {
  document.getElementsByClassName("avatar-pic")[i].src = `${chosenIcon}`;
}

//plastic pop
const plastic = document.querySelector(".plastic");
function plasticClick() {
  plastic.style.opacity = 0;
}
plastic.addEventListener("click", plasticClick);
