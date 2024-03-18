import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';

import './App.css';
import useFecht from './hooks/useFecht';
import getRamdomNumber from './services/getRamdomNumber';
import LocationInfo from './component/LocationInfo';
import ResidentsCard from './component/ResidentsCard';
import FormeSearch from './component/FormeSearch';

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(getRamdomNumber(126));
  const url = `https://rickandmortyapi.com/api/location/${number}`;
  const [location, getResponse, hasError] = useFecht(url);

  useEffect(() => {
    getResponse();
  }, [number, url]);

  return (
    <>
      <div>
        <h1>Rick and Morty</h1>
      </div>
      <FormeSearch setNumber={setNumber} />
      {hasError ? <h2>Mistake. Locations range from 1 to 126</h2> : <p></p>}
      <LocationInfo location={location} />
      <div className="card-container">
        {location?.residents.map((url) => (
          <ResidentsCard key={url} url={url} />
        ))}
      </div>
    </>
  );
}

export default App;