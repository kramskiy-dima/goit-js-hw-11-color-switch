const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyRef = document.querySelector('body');
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
let timerId = null;

startBtn.addEventListener('click', startChange);
stopBtn.addEventListener('click', stopChange);

function changeColor() {
  bodyRef.style.backgroundColor = `${
    colors[randomIntegerFromInterval(0, colors.length)]
  }`;
}
function startChange() {
  startBtn.disabled = true;
  timerId = setInterval(changeColor, 1000);
}
function stopChange() {
  startBtn.disabled = false;
  clearInterval(timerId);
}
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
