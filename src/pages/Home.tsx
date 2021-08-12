import React, { useState, useEffect } from 'react';
import { API_URL, API_URL_REGIONS, statsName } from '../configs';
import { ICovid } from '../types';
import {
  StyledHome,
  StyledHeroMessage,
  StyledHeroStats,
} from '../styles/pageStyles/HomeStyles';

interface IHomeProps {}

const Home: React.FC<IHomeProps> = ({}) => {
  const [covidData, setCovidData] = useState<ICovid>();
  const [regionData, setRegionData] = useState();

  const getCovidData = async () => {
    const res_PH = await fetch(API_URL);
    const res_REG = await fetch(API_URL_REGIONS);

    const data_PH = await res_PH.json();
    const data_REG = await res_REG.json();

    setCovidData(data_PH);
    setRegionData(data_REG.data);

    // console.log(JSON.stringify(data_PH));
    // console.log(JSON.stringify(data_REG.data));
  };

  useEffect(() => {
    getCovidData();
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const covidStats: Array<number | undefined> = [
    covidData?.cases,
    covidData?.deaths,
    covidData?.recovered,
    covidData?.tests,
    covidData?.active,
    covidData?.critical,
    covidData?.todayCases,
    covidData?.todayDeaths,
    covidData?.todayRecovered,
  ];

  return (
    <main>
      <StyledHome>
        <div className='container'>
          <StyledHeroMessage>
            <h1>Let's Help</h1>
            <h2>Recover The Earth,</h2>
            <h3>Starts From Us!</h3>
            <h4>Stay Home, Stay Safe.</h4>
            <p>
              We are now strongly recommending everyone, regardless of
              vaccination status, wear a mask or other face covering indoors
              when other people are present and in all public and common areas,
              such as lobbies, hallways, stairways, restrooms, elevators and
              shared vehicles.
            </p>
          </StyledHeroMessage>
          <StyledHeroStats>
            <h1>Philippine Status</h1>
            <p>(The spread of Covid-19 across the Philippines)</p>
            <div className='stats-grid'>
              {covidStats.map((stat, i) => (
                <div className='box'>
                  <p>{statsName[i]}</p>
                  <h4>{formatNumber(Number(stat))}</h4>
                </div>
              ))}
            </div>
          </StyledHeroStats>
        </div>
      </StyledHome>
    </main>
  );
};

export default Home;
