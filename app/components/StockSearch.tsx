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
    >
      <input
        type="text"
        placeholder="Sök aktie-symbol (t.ex. AMD)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <button type="submit">Sök</button>
    </form>
  );
};

export default StockSearch;
