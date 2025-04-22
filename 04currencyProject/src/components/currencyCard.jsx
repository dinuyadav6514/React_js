import React from 'react';

function CurrencyCard({
  address,
  readOnly,
  selectCurrency = 'USD',
  setSelectCurrency,
  value,
  onValueChange
}) {
  const isReadOnly = readOnly === true || readOnly === 'true';

  return (
    <div className='min-w-80 w-80 md:w-130 lg:w-180 min-h-30 bg-slate-300 rounded-xl shadow-black shadow-lg mb-2 flex items-center'>
      <h4 className='absolute ml-2 translate-y-[-40px] font-bold text-slate-500'>
        {address}
      </h4>

      <div className='min-w-70 h-10 bg-white rounded-full flex ml-[50%] translate-x-[-50%] overflow-hidden'>
        <input
          type='number'
          readOnly={isReadOnly}
          className='w-50 text-black focus:outline-none px-3 hover:bg-slate-200'
          aria-label={`${address} amount`}
          placeholder= { isReadOnly ? "Converted Amount" : " Enter Amount"}
          value={value}
          onChange={(e) => onValueChange(Number(e.target.value))}
        />

        <select
          value={selectCurrency}
          onChange={(e) => setSelectCurrency(e.target.value)}
          className='w-20 bg-slate-500 text-white font-bold p-2 focus:outline-none hover:bg-slate-600'
          aria-label={`${address} currency selector`}
          title={`${address} currency selector`}
        >
          {[
            'USD','EUR','JPY','GBP','AUD','CAD','CHF','CNY','HKD','NZD',
            'SEK','KRW','SGD','NOK','MXN','INR','RUB','ZAR','TRY','BRL',
            'PLN','THB','IDR','TWD'
          ].map((curr) => (
            <option key={curr} value={curr}>{curr}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CurrencyCard;
