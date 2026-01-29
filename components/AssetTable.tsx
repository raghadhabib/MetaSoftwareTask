import {assets} from "../data/assets";

export default function AssetTable() {
  return (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>   
                <th>Symbol</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {assets.map((asset) => (
                <tr key={asset.id}>
                    <td>{asset.id}</td>
                    <td>{asset.name}</td>
                    <td>{asset.symbol}</td>
                    <td>${asset.price.toFixed(2)}</td>
                </tr>
            ))}
        </tbody>
    </table>
    );
}

export {AssetTable};