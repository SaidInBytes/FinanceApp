"use client";

import React from "react";

import { Stock } from "./StockList";

interface StockDetailProps {
  stock: Stock | null;
}

const StockDetail: React.FC<StockDetailProps> = ({ stock }) => {
  if (!stock) return <div>Välj en aktie för att se detaljer.</div>;
    const changeColor = stock.change > 0 ? 'text-green-500' : stock.change < 0 ? 'text-red-500' : 'text-gray-400';
    return (
      <div className="bg-[#181C25] rounded-xl shadow-lg p-6 border border-[#2C3140] max-w-md mx-auto text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{stock.name}</h2>
            <span className="text-sm text-blue-400 font-mono">{stock.symbol}</span>
          </div>
          <img src="/globe.svg" alt="Finance Icon" className="w-10 h-10" />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <span className="text-xs text-gray-400">Price</span>
            <div className="text-xl font-semibold">${stock.price.toFixed(2)}</div>
          </div>
          <div>
            <span className="text-xs text-gray-400">Change</span>
            <div className={`text-xl font-semibold ${changeColor}`}>{stock.change}%</div>
          </div>
          <div>
            <span className="text-xs text-gray-400">Volume</span>
            <div className="text-lg">{stock.volume.toLocaleString()}</div>
          </div>
          <div>
            <span className="text-xs text-gray-400">Market Cap</span>
            <div className="text-lg">-</div>
          </div>
        </div>
        <div className="mt-4">
          {/* Här kan du lägga till en graf med t.ex. recharts eller chart.js */}
          <div className="bg-[#23283A] rounded-lg h-24 flex items-center justify-center text-gray-500">
            <span>Chart Placeholder</span>
          </div>
        </div>
      </div>
    );
};

export default StockDetail;
