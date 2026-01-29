"use client";

import { useState } from "react";
import { assets as initialAssets } from "../data/assets";
import {AssetTable} from '../components/AssetTable'
import { useEffect } from "react";

export default function Home() {
  const [data, setData] = useState(initialAssets);
  const [filterType, setFilterType] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevAssets) =>
        prevAssets.map((asset) => {
          const randomChange = (Math.random() * 2 - 1).toFixed(2); // -1 to +1
          const priceChange = Number(randomChange);

          return {
            ...asset,
            price: Number((asset.price + priceChange).toFixed(2)),
            change: priceChange,
            updatedAt: new Date().toISOString(),
          };
        })
      );
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Apply filtering and sorting
  const filteredAssets = data
  .filter((asset) =>
    filterType === "All" ? true : asset.type === filterType
  )
  .sort((a, b) => {
    if (sortBy === "price") return b.price - a.price;
    if (sortBy === "change") return b.change - a.change;
    return 0;
  });

  return (
    <div>
      <h1>Real-Time Assets Dashboard</h1>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
    <select
      value={filterType}
      onChange={(e) => setFilterType(e.target.value)}
    >
      <option value="All">All</option>
      <option value="Stock">Stock</option>
      <option value="Crypto">Crypto</option>
      <option value="ETF">ETF</option>
    </select>

    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option value="">No Sorting</option>
      <option value="price">Sort by Price</option>
      <option value="change">Sort by Change</option>
    </select>
  </div>

      <AssetTable assets={filteredAssets} />
    </div>
  );
}
