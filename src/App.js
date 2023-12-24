import React from 'react';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import Map from './components/Map';
import Info from './components/Info';

import './styles.css';
console.log(process.env.REACT_APP_API_KEY)

function App() {

  const url = 'https://geo.ipify.org/api/';
  const version = 'v2';
  const apiKey = process.env.REACT_APP_API_KEY


  const [ipData, setIpData] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  
  useEffect(() => {
    // Initial load or when query changes
    if (query) {
      fetchData();
    }
    setLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    // Get user's current location on page load
    if (!query) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array means this effect runs only once on mount

  const fetchData = async () => {
    try {
      const response = await fetch(`${url}${version}/country,city?apiKey=${apiKey}&ipAddress=${query}`);
      const data = await response.json();
      setLocation({
        latitude: data.location.lat,
        longitude: data.location.lng,
      });
      setIpData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (!search.match(ipRegex)) {
      alert('Please enter a valid IP address');
      return;
    }

    setQuery(search);
    setSearch('');
  };


  return (
    <>
    
      <h1 className='title'>IP Address Tracker</h1>
      <section className="search-wrapper">
        <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        loaded={loaded}
        />
      </section>
      <section className="info-wrapper">
        <Info
        ipData={ipData}
        />
      </section>
   
    <section className="map-wrapper">
      <Map 
      ipData={ipData}
      location={location}
      />
    </section>
    </>
    );
}

export default App;
