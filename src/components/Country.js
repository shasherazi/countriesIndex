import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles/Country.module.css';

const Country = ({ name, flagEmoji }) => (
  <li className={styles.country}>
    <Link to={`/country/${name}`}>
      <h2 className={styles.countryName}>
        {name}
        <br />
        {flagEmoji}
      </h2>
    </Link>
  </li>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  flagEmoji: PropTypes.string.isRequired,
};

export default Country;
