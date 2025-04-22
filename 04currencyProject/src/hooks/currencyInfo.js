import { useEffect, useState } from 'react';

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!baseCurrency) return;

    const api = `https://api.currencyapi.com/v3/latest?apikey=cur_live_EHT2rpximL6fWJbpT7GimMebxkfiBG2rpihRUQpD&currencies=USD%2CEUR%2CJPY%2CGBP%2CAUD%2CCAD%2CCHF%2CCNY%2CHKD%2CNZD%2CSEK%2CKRW%2CSGD%2CNOK%2CMXN%2CINR%2CRUB%2CZAR%2CTRY%2CBRL%2CPLN%2CTHB%2CIDR%2CTWD&base_currency=${baseCurrency}`;

    fetch(api)
      .then((res) => res.json())
      .then((res) => {
        if (res && res.data) {
          setData(res.data);
        }
      })
      .catch((err) => {
        console.error('Error fetching currency data:', err);
        setData({});
      });
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
