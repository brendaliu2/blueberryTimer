import './Header.css';
import blueberry from '../blueberry.png';

/** Header
 *
 * Props: none
 * State: none
 *
 * App -> Header
 */
export default function Header() {
  return (
    <div className='header-container'>
      <img src={blueberry} alt='blueberry doodle' className='berry-logo' />
      <h1 className='timer-heading'>Blueberry Timer</h1>
    </div>
  )
}