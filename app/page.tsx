
"use client";
import React, { useEffect, useState } from "react";
import StockList, { Stock } from "./components/StockList";
import StockDetail from "./components/StockDetail";
import StockSearch from "./components/StockSearch";
import { fetchStocks, fetchStock } from "./api/zoya";

export default function Page() {
	const [stocks, setStocks] = useState<Stock[]>([]);
	const [selectedStock, setSelectedStock] = useState<Stock | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetchStocks().then((data) => {
			setStocks(data);
			setLoading(false);
		});
	}, []);

	const handleSelect = async (symbol: string) => {
		setLoading(true);
		const stock = await fetchStock(symbol);
		setSelectedStock(stock);
		setLoading(false);
	};

	const handleSearch = async (symbol: string) => {
		setLoading(true);
		const stock = await fetchStock(symbol);
		setSelectedStock(stock);
		setLoading(false);
	};

	return (
		<main style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
			<h1>Aktier - Shariah Compliance</h1>
			<StockSearch onSearch={handleSearch} />
			{loading && <p>Laddar...</p>}
			<StockList stocks={stocks} onSelect={handleSelect} />
			<StockDetail stock={selectedStock} />
			<footer style={{ marginTop: 40 }}>
				<a href="https://zoya.finance/api" target="_blank" rel="noopener noreferrer">Data provided by Zoya</a>
			</footer>
		</main>
	);
}
