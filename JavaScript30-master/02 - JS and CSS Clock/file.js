const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const allHands = document.querySelector('.hand');

function setTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes()
  const hours = now.getHours()

  const secondsDegrees = ((seconds/60) * 360) + 90;
  const minuteDegrees = ((minutes/60) * 360) + 90;
  const hourDegrees = ((hours/12) * 360) + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  // transition
  if(seconds > 58) {
    allHands.classList.remove("transition");
  } else if(seconds >= 1 && seconds < 58) {
    allHands.classList.add("transition");
  }
}

setInterval(setTime, 1000);
