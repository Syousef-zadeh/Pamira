import styles  from './AppointmentButton.module.css';
import {Link} from 'react-router-dom';

const BookAppointment = (props) => {
  return (
    <Link to='/book-appointment'>
    <button className={styles.button}>
      <span>Book Your Apponitment</span>
    </button>
    </Link>
  );
};
export default BookAppointment;
