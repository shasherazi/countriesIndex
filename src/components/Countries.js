import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/countries/countriesSlice';
import Country from './Country';
import styles from '../styles/Countries.module.css';

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountries());
    }
  }, [countries, dispatch]);

  return (
    <div>
      <h1 className={styles.title}>Countries</h1>
      <ul className={styles.countries}>
        {countries.map((country) => (
          <Country
            key={country.name}
            name={country.name}
            flagEmoji={country.flagEmoji}
            flagUrl={country.flagUrl}
            flagAlt={country.flagAlt}
          />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
