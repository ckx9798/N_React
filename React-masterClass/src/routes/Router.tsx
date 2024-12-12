import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";
import Price from "./Price";
import Chart from "./Chart";

interface ItoggleDark {
  toggleDark: () => void;
  mode: boolean;
}

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId" element={<Coin />}>
          <Route path="price" element={<Price />}></Route>
          <Route path="chart" element={<Chart />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
