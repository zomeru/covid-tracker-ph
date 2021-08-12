import React, { useState, useEffect } from 'react';
import { API_URL, API_URL_REGIONS } from '../configs';

interface IHomeProps {}

const Home: React.FC<IHomeProps> = ({}) => {
  const [covidData, setCovidData] = useState();
  const [regionData, setRegionData] = useState();

  const getCovidData = async () => {
    const res_PH = await fetch(API_URL);
    const res_REG = await fetch(API_URL_REGIONS);

    const data_PH = await res_PH.json();
    const data_REG = await res_REG.json();

    setCovidData(data_PH);
    setRegionData(data_REG.data);

    console.log(JSON.stringify(data_PH));
    console.log(JSON.stringify(data_REG.data));
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div>
      <h1>ZOMER</h1>
    </div>
  );
};

export default Home;
