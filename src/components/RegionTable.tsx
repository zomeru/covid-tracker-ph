import React, { useState, useEffect } from 'react';
import { API_URL_REGIONS } from '../configs';
import { IRegionCovid } from '../types';
import Spinner from './Spinner';
import { StyledRegionTable } from '../styles/componentStyles/RegionTableStyles';

interface IRegionTableProps {}

const RegionTable: React.FC<IRegionTableProps> = ({}) => {
  const [regionData, setRegionData] = useState<IRegionCovid[]>();

  const getCovidData = async () => {
    try {
      const res_REG = await fetch(API_URL_REGIONS);

      const data_REG = await res_REG.json();

      setRegionData(data_REG.data);

      console.log(JSON.stringify(data_REG.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <StyledRegionTable>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Region</th>
          <th>Cases</th>
          <th>Deaths</th>
          <th>Recovered</th>
        </tr>
      </thead>
      <tbody>
        {regionData?.map((data, i) => {
          const { region, cases, recovered, deaths } = data;
          return (
            <tr>
              <td>{i + 1}</td>
              <td>{region.toUpperCase()}</td>
              <td>{formatNumber(cases)}</td>
              <td>{formatNumber(deaths)}</td>
              <td>{formatNumber(recovered)}</td>
            </tr>
          );
        })}
      </tbody>
    </StyledRegionTable>
  );
};

export default RegionTable;
