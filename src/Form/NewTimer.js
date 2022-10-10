import './NewTimer.css';

/** New Timer Form
 *
 * Props:
 * - registerTimer (function)
 *
 * State: none
 *
 * App -> Timer -> { NewTimer, TimerDisplay }
 */
export default function NewTimer({ registerTimer }) {
  return (
    <div className='newtimer-form-container'>
      <div className='form-container-item'>
        <form action="" onSubmit={registerTimer}>
          <label htmlFor="startTime" id='startTime-label'>Set Minutes</label>
          <input type="number" id="startTime" name="startTime" min={1} max={59} />
          <input type="submit" id='startTime-submit-btn'/>
        </form>
      </div>
    </div>
  );
}