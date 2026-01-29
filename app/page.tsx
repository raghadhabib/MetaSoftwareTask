"use client";

import { assets as initialAssets } from "../data/assets";
import {AssetTable} from '../components/AssetTable'
import { useEffect ,useMemo, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";


export default function Home() {
  const [data, setData] = useState(initialAssets);
  const [filterType, setFilterType] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("");
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevAssets) =>
        prevAssets.map((asset) => {
          const randomChange = (Math.random() * 2 - 1).toFixed(2);
          const priceChange = Number(randomChange);

          return {
            ...asset,
            price: Number((asset.price + priceChange).toFixed(2)),
            change: priceChange,
            updatedAt: new Date().toISOString(),
          };
        })
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  
  const filteredAssets = useMemo(() => {
    return data
      .filter((asset) => {
        const matchesType =
          filterType === "All" ? true : asset.type === filterType;

        const matchesSearch =
          asset.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
          asset.symbol.toLowerCase().includes(debouncedSearch.toLowerCase());

        return matchesType && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "price") return b.price - a.price;
        if (sortBy === "change") return b.change - a.change;
        return 0;
      });
  }, [data, filterType, sortBy, debouncedSearch]);

  

 return (
  <main className="min-h-screen bg-white p-4 md:p-8 text-left">
    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-600">
      Real-Time Assets Dashboard
    </h1>

    
    <div className="flex flex-col md:flex-row gap-3 mb-6">
      <input
        type="text"
        placeholder="Search by name or symbol..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-3 py-2 border rounded-md w-full md:w-64 text-gray-600"
      />

      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="px-3 py-2 border rounded-md  text-gray-600"
      >
        <option value="All">All</option>
        <option value="Stock">Stock</option>
        <option value="Crypto">Crypto</option>
        <option value="ETF">ETF</option>
        
      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="px-3 py-2 border rounded-md  text-gray-600"
      >
        <option value="">No Sorting</option>
        <option value="price">Sort by Price</option>
        <option value="change">Sort by Change</option>
      </select>
    </div>

    <AssetTable assets={filteredAssets} />
  </main>
);

}
