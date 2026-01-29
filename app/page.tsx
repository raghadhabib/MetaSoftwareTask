"use client";

import { useState } from "react";
import { assets as initialAssets } from "../data/assets";
import {AssetTable} from '../components/AssetTable'
import { useEffect } from "react";

export default function Home() {
  const [data, setData] = useState(initialAssets);

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

  return (
    <div>
      <h1>Real-Time Assets Dashboard</h1>
      <AssetTable assets={data} />
    </div>
  );
}
