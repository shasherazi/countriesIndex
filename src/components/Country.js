import PropTypes from 'prop-types';
import styles from '../styles/Country.module.css';

const Country = ({ name, flagEmoji }) => (
  <li className={styles.country}>
    <h2 className={styles.countryName}>
      {name}
      <br />
      {flagEmoji}
    </h2>
  </li>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  flagEmoji: PropTypes.string.isRequired,
};

export default Country;
