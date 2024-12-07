import { useQuery } from "react-query";
import { fetchCoinHistory } from "./api";

export default function Chart() {
  const coinInfo = "btc-bitcoin";
  const { data } = useQuery("chart", () => fetchCoinHistory(coinInfo));
  return <div>Chart</div>;
}
