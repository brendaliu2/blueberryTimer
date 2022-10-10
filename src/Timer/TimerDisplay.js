import './TimerDisplay.css';
import { useContext } from "react";
import soundContext from "../soundContext";
import useSound from 'use-sound';
import ding from '../ding.mp3';
import blueberry from '../blueberry.png';
import blueberryDone from '../blueberryDone.gif';


/** Timer Display
 *
 * Props:
 * - minutes (number)
 * - seconds (number)
 * - startTimer (function)
 * - pauseTimer (function)
 * - resetTimer (function)
 * - isDone (boolean)
 *
 * State: none
 *
 * App -> Timer -> { NewTimer, TimerDisplay }
 */
export default function TimerDisplay({
  minutes,
  seconds,
  startTimer,
  pauseTimer,
  resetTimer,
  isDone
}) {

  const [play, { stop }] = useSound(ding);
  const { isMuted } = useContext(soundContext);

  function soundOn(){
    isMuted ? stop() : play();
  }

  return (
    <div className="timer-container">
      <div className='timer-item'>
        {isDone ?
          <>
            <h1 className="countdown-done">Timer Done</h1>
            <img src={blueberryDone} alt='blueberry doodle' className='berry'/>
            {soundOn()}
            {/* <button className='timerBtn' onClick={() => stop()}>Stop</button> */}
          </>
          :
          <>
            <h2 className="countdown">{minutes}:{seconds}</h2>
            <button className='timerBtn' onClick={startTimer}>Start</button>
            <button className='timerBtn' onClick={pauseTimer}>Pause</button>
          </>
        }
        <button className='timerBtn' onClick={resetTimer}>Reset</button>

      </div>

    </div>
  );
}