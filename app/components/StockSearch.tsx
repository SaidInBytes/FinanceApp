import React, { useState } from "react";

interface StockSearchProps {
  onSearch: (symbol: string) => void;
}

const StockSearch: React.FC<StockSearchProps> = ({ onSearch }) => {
  const [symbol, setSymbol] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(symbol);
      }}
      className="flex items-center gap-2 bg-[#23283A] rounded-full px-4 py-2 shadow focus-within:ring-2 focus-within:ring-blue-400 transition-all"
    >
      <input
        type="text"
        placeholder="Search stock symbol (e.g. AMD)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 px-2 py-1 text-lg"
        autoFocus
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 font-semibold flex items-center gap-2 transition-all duration-200 shadow"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
        </svg>
        Search
      </button>
    </form>
  );
};

export default StockSearch;
