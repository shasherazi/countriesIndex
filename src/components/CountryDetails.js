import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCountryDetails } from '../redux/countryDetails/countryDetailsSlice';
import styles from '../styles/CountryDetails.module.css';

const CountryDetails = () => {
  const { countryId } = useParams();
  const dispatch = useDispatch();

  const country = useSelector((state) => state.countryDetails);

  useEffect(() => {
    if (Object.keys(country).length === 0) {
      dispatch(fetchCountryDetails(countryId));
    }
  }, [country, dispatch, countryId]);

  return (
    <>
      {Object.keys(country).length !== 0 && (
      <div className={styles.countryDetails}>
        <img src={country.flagSvg} alt={country.flagAlt} className={styles.flag} />
        <p className={styles.population}>
          Population:
          {' '}
          {country.population.toLocaleString()}
        </p>
      </div>
      )}
    </>
  );
};

export default CountryDetails;
