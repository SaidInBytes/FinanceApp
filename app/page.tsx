
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
			<main className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-[#181C25] via-[#23283A] to-[#141721] rounded-2xl shadow-2xl mt-10 animate-fade-in">
				<h1 className="text-3xl font-extrabold text-blue-400 mb-6 tracking-tight text-center drop-shadow">Aktier <span className="text-white">- Shariah Compliance</span></h1>
				<div className="mb-6">
					<StockSearch onSearch={handleSearch} />
				</div>
				{loading && <div className="flex justify-center items-center mb-4"><span className="loader mr-2"></span><span className="text-gray-300">Laddar...</span></div>}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<StockList stocks={stocks} onSelect={handleSelect} />
					</div>
					<div>
						<StockDetail stock={selectedStock} />
					</div>
				</div>
				<footer className="mt-10 text-center text-xs text-gray-400">
					<a href="https://zoya.finance/api" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Data provided by Zoya</a>
				</footer>
				<style jsx>{`
					.loader {
						border: 4px solid #23283A;
						border-top: 4px solid #3b82f6;
						border-radius: 50%;
						width: 24px;
						height: 24px;
						animation: spin 1s linear infinite;
					}
					@keyframes spin {
						0% { transform: rotate(0deg); }
						100% { transform: rotate(360deg); }
					}
					.animate-fade-in {
						animation: fadeIn 1.2s ease;
					}
					@keyframes fadeIn {
						0% { opacity: 0; transform: translateY(20px); }
						100% { opacity: 1; transform: translateY(0); }
					}
				`}</style>
			</main>
		);
}
