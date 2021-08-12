import styles  from './AppointmentButton.module.css';

const BookAppointment = (props) => {
  return (
    <button className={styles.button}>
      <span>Book Your Apponitment</span>
    </button>
  );
};
export default BookAppointment;
