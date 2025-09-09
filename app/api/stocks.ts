export async function fetchStocks() {
  // Returnera några exempel-symboler
  return [
    { symbol: "AAPL", name: "Apple Inc." },
    { symbol: "MSFT", name: "Microsoft Corp." },
    { symbol: "GOOGL", name: "Alphabet Inc." },
    { symbol: "TSLA", name: "Tesla Inc." },
    { symbol: "AMZN", name: "Amazon.com Inc." }
  ];
}

export async function fetchStock(symbol: string) {
  const apiKey = "5PEP4R3EHRJ8HHDO";
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  // Hämta senaste datapunkt
  const meta = data["Meta Data"];
  const timeSeries = data["Time Series (5min)"];
  if (!meta || !timeSeries) return null;
  const lastTime = Object.keys(timeSeries)[0];
  const lastData = timeSeries[lastTime];
  return {
    symbol: meta["2. Symbol"],
    name: meta["2. Symbol"], // Alpha Vantage ger inte namn, så vi visar symbol
    price: parseFloat(lastData["4. close"]),
    change: 0, // Kan beräknas om du vill
    volume: parseInt(lastData["5. volume"])
  };
}
