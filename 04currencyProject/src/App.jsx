import { useState, useEffect } from 'react';
import './App.css';
import CurrencyCard from './components/currencyCard';
import useCurrencyInfo from './hooks/currencyInfo';

function App() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [amount, setAmount] = useState();
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyData = useCurrencyInfo(fromCurrency);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convertCurrency = () => {
    if (!currencyData || !currencyData[toCurrency]) return;
    const rate = currencyData[toCurrency].value;
    setConvertedAmount( (amount * rate).toFixed(3) );
  };

  return (
    <>
      <h1 className='text-white font-bold text-4xl text-center mt-20'>Currency Converter</h1>

      <div className='bg-slate-100/25 min-w-100 md:w-150 lg:w-200 min-h-100 h-auto ml-[50%] translate-x-[-50%] mt-5 rounded-xl shadow-black shadow-lg p-5'>
        <div className='w-auto h-auto flex flex-col justify-center items-center'>

          <CurrencyCard
            address="From"
            readOnly={false}
            selectCurrency={fromCurrency}
            setSelectCurrency={setFromCurrency}
            value={amount}
            onValueChange={setAmount}
          />

          <div
            onClick={swapCurrencies}
            className='cursor-pointer w-30 h-10 absolute bg-blue-500 hover:bg-blue-600 rounded-full translate-y-[-10%] text-white font-bold text-[20px] flex justify-center items-center shadow-black shadow-lg'
          >
            swap
          </div>

          <CurrencyCard
            address="To"
            readOnly={true}
            selectCurrency={toCurrency}
            setSelectCurrency={setToCurrency}
            value={convertedAmount}
            onValueChange={setConvertedAmount}
          />
        </div>

        <div
          onClick={convertCurrency}
          className='bg-blue-500 hover:bg-blue-600 w-40 h-15 rounded-full shadow-black shadow-xl flex justify-center items-center text-2xl font-bold text-white ml-[50%] translate-x-[-50%] mt-10 cursor-pointer'
        >
          convert
        </div>
      </div>
    </>
  );
}

export default App;
