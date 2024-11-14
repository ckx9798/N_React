import { useEffect } from "react";
import { useState } from "react";

export default function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <h1>The Coins ! {loading ? "" : `(${coins.length})`}</h1>{" "}
      {loading ? (
        "Loading..."
      ) : (
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              {coin.name} ({coin.symbol}) = {coin.quotes.USD.price} USD
            </li>
          ))}
        </ul>
      )}
      {/* <select>
        {coins.map((coin) => (
          <option key={coin.id}>
            {coin.name} ({coin.symbol}) = {coin.quotes.USD.price} USD
          </option>
        ))}
      </select> */}
    </>
  );
}
