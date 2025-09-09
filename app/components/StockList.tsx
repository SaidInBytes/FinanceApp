import React from "react";

export type Stock = {
  symbol: string;
  name: string;
  exchange?: string;
  status?: string;
  price?: number;
  change?: number;
  volume?: number;
};

interface StockListProps {
  stocks: Stock[];
  onSelect: (symbol: string) => void;
}

const StockList: React.FC<StockListProps> = ({ stocks, onSelect }) => (
  <div>
    <h2 className="text-xl font-bold mb-2 text-blue-400">Stock List</h2>
    <ul className="space-y-2">
      {stocks.map((stock) => (
        <li key={stock.symbol}>
          <button
            onClick={() => onSelect(stock.symbol)}
            className="w-full text-left bg-[#23283A] hover:bg-blue-900 transition rounded-lg px-4 py-2 text-white shadow flex flex-col"
          >
            <span className="font-mono text-blue-300 text-lg">{stock.symbol}</span>
            <span className="text-sm">{stock.name}</span>
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default StockList;
