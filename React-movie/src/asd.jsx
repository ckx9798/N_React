<ul>
  {coins.map((coin) => (
    <li key={coin.id}>
      {coin.name} ({coin.symbol}) = {coin.quotes.USD.price} USD
    </li>
  ))}
</ul>;
