export async function fetchStocks() {
  const res = await fetch("/api/zoya/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query ListReports { basicCompliance { reports { items { symbol name exchange status } nextToken } } }`,
    }),
  });
  const data = await res.json();
  return data?.data?.basicCompliance?.reports?.items || [];
}

export async function fetchStock(symbol: string) {
  const res = await fetch("/api/zoya/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query GetReport { basicCompliance { report(symbol: "${symbol}") { symbol name exchange status } } }`,
    }),
  });
  const data = await res.json();
  return data?.data?.basicCompliance?.report || null;
}
