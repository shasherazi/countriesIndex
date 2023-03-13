import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/countries/countriesSlice';

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
      <h1>Countries</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.name}>
            {country.name}
            {country.population}
          </li>
        ))}
        {countries.length === 0 ? <li>Loading...</li> : countries.length}
      </ul>
    </div>
  );
};

export default Countries;
