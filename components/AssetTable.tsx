import {assets} from "../data/assets";

type Asset = {
  id: number;
  name: string;
  symbol: string;
  price: number;
  change: number;
  type: string;
  updatedAt: string;
};

type AssetTableProps = {
  assets: Asset[];
};

export function AssetTable({ assets }: AssetTableProps) {
  return (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>   
                <th>Symbol</th>
                <th>Price</th>
                <th>Change</th>
                <th>Last Updated</th>
            </tr>
        </thead>
        <tbody>
            {assets.map((asset) => (
                <tr key={asset.id}>
                    <td>{asset.id}</td>
                    <td>{asset.name}</td>
                    <td>{asset.symbol}</td>
                    <td>${asset.price.toFixed(2)}</td>
                    <td className={asset.change >= 0 ? "text-green-600" : "text-red-600"}>
                    {asset.change >= 0 ? "+" : ""}
                    {asset.change}
                    </td>
                    <td>{new Date(asset.updatedAt).toLocaleTimeString()}</td>
                </tr>
            ))}
        </tbody>
    </table>
    );
}

