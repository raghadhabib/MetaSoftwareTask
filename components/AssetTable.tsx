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
  <div className="overflow-x-auto bg-white rounded-lg shadow">
  <table className="w-full text-sm">
    <thead className="bg-cyan-700 ">
      <tr>
        <th className="p-3">Name</th>
        <th className="p-3">Symbol</th>
        <th className="p-3">Type</th>
        <th className="p-3">Price</th>
        <th className="p-3">Change</th>
        <th className="p-3">Updated</th>
      </tr>
    </thead>
    <tbody>
      {assets.map((asset) => (
        <tr key={asset.id} className="border-t hover:bg-gray-50">
          <td className="p-3 font-medium  text-gray-700">{asset.name}</td>
          <td className="p-3 text-gray-700">{asset.symbol}</td>
          <td className="p-3  text-gray-700">{asset.type}</td>
          <td className="p-3  text-gray-700">${asset.price.toFixed(2)}</td>
          <td
            className={`p-3 font-medium ${
              asset.change >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {asset.change >= 0 ? "+" : ""}
            {asset.change}
          </td>
          <td className="p-3 text-xs text-gray-700">
            {new Date(asset.updatedAt).toLocaleTimeString()}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    );
}

