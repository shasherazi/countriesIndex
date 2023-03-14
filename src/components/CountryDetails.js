import { useParams } from 'react-router-dom';

const CountryDetails = () => {
  const { countryId } = useParams();

  return (
    <div>
      <h1>{countryId}</h1>
    </div>
  );
};

export default CountryDetails;
