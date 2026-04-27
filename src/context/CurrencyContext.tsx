'use client';

import React, { createContext, useContext, useState } from 'react';

export type Currency = 'USD' | 'INR' | 'NPR';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  convert: (inrAmount: number) => string;
  symbol: string;
}

const rates: Record<Currency, number> = {
  INR: 1,
  USD: 0.012,
  NPR: 1.6,
};

const symbols: Record<Currency, string> = {
  INR: '₹',
  USD: '$',
  NPR: 'रू',
};

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'INR',
  setCurrency: () => {},
  convert: (n) => `₹${n}`,
  symbol: '₹',
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('INR');

  const convert = (inrAmount: number): string => {
    const converted = inrAmount * rates[currency];
    return `${symbols[currency]}${converted % 1 === 0 ? converted : converted.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, symbol: symbols[currency], convert }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
