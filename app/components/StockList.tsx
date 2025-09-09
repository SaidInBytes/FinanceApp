import React from "react";

export type Stock = {
  symbol: string;
  name: string;
  exchange: string;
  status: string;
};

interface StockListProps {
  stocks: Stock[];
  onSelect: (symbol: string) => void;
}

const StockList: React.FC<StockListProps> = ({ stocks, onSelect }) => (
  <div>
    <h2>Aktielista</h2>
    <ul>
      {stocks.map((stock) => (
        <li key={stock.symbol}>
          <button onClick={() => onSelect(stock.symbol)}>
            {stock.symbol} - {stock.name} ({stock.exchange}) - {stock.status}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default StockList;
