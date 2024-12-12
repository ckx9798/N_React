import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";
import Price from "./Price";
import Chart from "./Chart";

interface ItoggleDark {
  toggleDark: () => void;
  mode: boolean;
}

function Router({ toggleDark, mode }: ItoggleDark) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins toggleDark={toggleDark} />} />
        <Route path="/:coinId" element={<Coin />}>
          <Route path="price" element={<Price />}></Route>
          <Route path="chart" element={<Chart mode={mode} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
