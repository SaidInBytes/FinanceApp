import React from "react";
import { Stock } from "./StockList";

interface StockDetailProps {
  stock: Stock | null;
}

const StockDetail: React.FC<StockDetailProps> = ({ stock }) => {
  if (!stock) return <div>Välj en aktie för att se detaljer.</div>;
  return (
    <div>
      <h2>Detaljer för {stock.symbol}</h2>
      <p>Namn: {stock.name}</p>
      <p>Börs: {stock.exchange}</p>
      <p>Status: {stock.status}</p>
    </div>
  );
};

export default StockDetail;
