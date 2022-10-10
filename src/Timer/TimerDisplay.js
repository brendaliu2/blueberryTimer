import './TimerDisplay.css';
import useSound from 'use-sound';
import ding from '../ding.mp3';

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

  const [play] = useSound(ding);

  return (
    <div className="timer-container">
      <div className='timer-item'>
        {isDone ?
          <>
            <h1 className="countdown-done">Timer Done</h1>
            {play()}
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