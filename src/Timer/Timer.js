import React, { useState, useRef } from "react";
import TimerDisplay from "./TimerDisplay";
import NewTimer from "../Form/NewTimer";

const blueberryTime = 1500;
let duration = blueberryTime;

/** Timer
 *
 * Props: none
 * State: count (number)
 *
 * App -> Timer
 */
export default function BlueBerryTimer() {
  const timerId = useRef();


  const [count, setCount] = useState(blueberryTime);

  const timerDone = count <= 0 ? true : false;

  // if(timerDone) clearInterval(timerId.current);

  function startTimer() {
    timerId.current = setInterval(() => {
      setCount(c => c - 1);
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(timerId.current);
  }

  function resetTimer() {
    setCount(duration);
  }

  function registerTimer(evt) {
    evt.preventDefault();
    clearInterval(timerId.current);
    const input = +evt.target[0].value;
    duration = input * 60;
    setCount(duration);
    startTimer();
  }

  let minutes = parseInt(count / 60, 10);
  let seconds = parseInt(count % 60, 10);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return (
    <>
      <TimerDisplay
        minutes={minutes}
        seconds={seconds}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
        isDone={timerDone}
      />
      <NewTimer registerTimer={registerTimer} />
    </>

  );
};