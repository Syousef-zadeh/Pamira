import styles  from './AppointmentButton.module.css';
import {Link} from 'react-router-dom';

const BookAppointment = (props) => {
  return (
    <Link to='/book-appointment'>
    <button className={styles.button} style={props.style && props.style}>
      <span>نوبت دهی آنلاین</span>
    </button>
    </Link>
  );
};
export default BookAppointment;
