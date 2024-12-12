interface CoinInterface {
  id: string;
  is_active: boolean;
  is_new: boolean;
  name: string;
  rank: number;
  symbol: string;
  type: string;
}
export const coinData: CoinInterface[] = [
  {
    id: "bitcoin",
    is_active: true,
    is_new: false,
    name: "Bitcoin",
    rank: 1,
    symbol: "BTC",
    type: "coin",
  },
  {
    id: "ethereum",
    is_active: true,
    is_new: false,
    name: "Ethereum",
    rank: 2,
    symbol: "ETH",
    type: "coin",
  },
  {
    id: "tether",
    is_active: true,
    is_new: false,
    name: "Tether",
    rank: 3,
    symbol: "USDT",
    type: "stablecoin",
  },
  {
    id: "binancecoin",
    is_active: true,
    is_new: false,
    name: "Binance Coin",
    rank: 4,
    symbol: "BNB",
    type: "coin",
  },
  {
    id: "cardano",
    is_active: true,
    is_new: false,
    name: "Cardano",
    rank: 5,
    symbol: "ADA",
    type: "coin",
  },
  {
    id: "solana",
    is_active: true,
    is_new: false,
    name: "Solana",
    rank: 6,
    symbol: "SOL",
    type: "coin",
  },
  {
    id: "dogecoin",
    is_active: true,
    is_new: false,
    name: "Dogecoin",
    rank: 7,
    symbol: "DOGE",
    type: "coin",
  },
  {
    id: "polkadot",
    is_active: true,
    is_new: false,
    name: "Polkadot",
    rank: 8,
    symbol: "DOT",
    type: "coin",
  },
  {
    id: "shibainu",
    is_active: true,
    is_new: false,
    name: "Shiba Inu",
    rank: 9,
    symbol: "SHIB",
    type: "coin",
  },
  {
    id: "avalanche",
    is_active: true,
    is_new: false,
    name: "Avalanche",
    rank: 10,
    symbol: "AVAX",
    type: "coin",
  },
];
