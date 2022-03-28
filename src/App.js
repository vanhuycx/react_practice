import React, { useRef, useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';
import { useGetCryptoQuery } from './api/cryptoApi';
const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
];

const App = () => {
  const { data: cryptos, isSuccess } = useGetCryptoQuery();

  console.log(isSuccess);
  const config = {
    data: cryptos,
    xField: 'symbol',
    yField: 'price_change_percentage_1h_in_currency',
  };

  return <>{isSuccess && <Line {...config} />}</>;
};

export default App;
