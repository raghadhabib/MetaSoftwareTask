"use client";

import { useState } from "react";
import { assets as initialAssets } from "../data/assets";
import {AssetTable} from '../components/AssetTable'

export default function Home() {
  const [data, setData] = useState(initialAssets);
  return (
    <div>
    <h1>Real-Time Assets Dashboard</h1>
     <AssetTable assets={data} />
    </div>
  );
}
