import { useEffect } from "react";
import { useState } from "react";

export default function CoinChallenge() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myUsd, setMyUsd] = useState("");
  const [selectedCoin, setSelectedCoin] = useState("");
  const [selectedCoinPrice, setSelectedCoinPrice] = useState(null);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (e) => {
    setMyUsd(e.target.value);
  };

  const onCoinChange = (e) => {
    const select = coins.find((coin) => coin.id === e.target.value);
    if (select) {
      setSelectedCoin(select.name);
      setSelectedCoinPrice(select.quotes.USD.price);
    }
  };

  const calculateCoin = () => {
    if (myUsd && selectedCoinPrice) {
      return (myUsd / selectedCoinPrice).toFixed(4);
    }
    return 0;
  };

  return (
    <>
      <h1>The Coins !</h1>
      {loading ? "Loading..." : null}
      <input
        type="number"
        value={myUsd}
        onChange={onChange}
        placeholder="Enter USD"
      />
      <hr />
      <select onChange={onCoinChange}>
        {coins.map((coin) => (
          <>
            <option key={coin.id} value={coin.id}>
              {coin.name} ({coin.symbol}) = {coin.quotes.USD.price} USD
            </option>
          </>
        ))}
      </select>
      <br />
      <p>
        {myUsd && selectedCoinPrice
          ? `You Can Buy : ${calculateCoin()} ${selectedCoin}`
          : null}
      </p>
    </>
  );
}
