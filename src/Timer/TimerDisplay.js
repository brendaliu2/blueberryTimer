import './TimerDisplay.css';

/** Timer Display
 *
 * Props:
 * - minutes (number)
 * - seconds (number)
 * - startTimer (function)
 * - pauseTimer (function)
 * - resetTimer (function)
 * - registerTimer (function)
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
  registerTimer
}) {
  return (

    <div className="timer-container">
      <div className='timer-item'>
        <h2 className="countdown">{minutes}:{seconds}</h2>

        <button className='timerBtn' onClick={startTimer}>Start</button>
        <button className='timerBtn' onClick={pauseTimer}>Pause</button>
        <button className='timerBtn' onClick={resetTimer}>Reset</button>

      </div>

    </div>
  );
}