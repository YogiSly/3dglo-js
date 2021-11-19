function twoNumber(num) {
  if (num >= 0 && num <= 60 && num % 100 < 10) {
    return "0" + num;
  } else {
    return num;
  }
}
const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");
  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);
    return {
      timeRemaining,
      hours,
      minutes,
      seconds,
    };
  };
  const updateClock = () => {
    let getTime = getTimeRemaining();
    if (getTime.timeRemaining < 0) {
      clearInterval(updateClock);
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    } else {
      timerHours.textContent = twoNumber(getTime.hours);
      timerMinutes.textContent = twoNumber(getTime.minutes);
      timerSeconds.textContent = twoNumber(getTime.seconds);
    }
  };
  setInterval(updateClock, 1000);
};
export default timer;
