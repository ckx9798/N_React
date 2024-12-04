import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

interface RouteParams {
  coinId: string;
}

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
const CoinsList = styled.ul``;
const Coinbox = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;

  a {
    padding: 20px;
    transition: color 0.8s ease-in;
    display: block;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const Tab = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) => props.theme.textColor};
  a {
    display: block;
  }
`;
const Loading = styled.div`
  text-align: center;
`;
const Imgtag = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  border-radius: 16px;
`;
export default function Coin() {
  const { state } = useLocation();
  const { coinId } = useParams();
  const [infoData, setInfoData] = useState({});
  const [priceData, setPriceData] = useState({});

  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://fandom-k-api.vercel.app/9-2/idols?pageSize=10"
      );
      const data = await response.json();
      setCoins(data);
      setLoading(false);
    })();
  }, []);
console.log(coins)
  // useEffect(() => {
  //   (async () => {
  //     const response1 = await fetch(
  //       `https://api.coinpaprika.com/v1/coins/${coinId}`
  //     );
  //     const infoData = response1.json();
  //     const response2 = await fetch(
  //       `https://api.coinpaprika.com/v1/tickers/${coinId}`
  //     );
  //     const priceData = response2.json();
  //     setInfoData(infoData);
  //     setPriceData(priceData);
  //   })();
  // });
  const selectedCoin = coins.find((coin) => coin.id === Number(coinId));

  return (
    <Container>
      <Header>
        <Title>{selectedCoin?.name || "Loading..."}</Title>
      </Header>
      {!loading && selectedCoin && (
        <Overview>
          <Imgtag src={selectedCoin.profilePicture} />
          {selectedCoin.name} / {selectedCoin.gender} / {selectedCoin.group} / {selectedCoin.totalVotes}
        </Overview>
      )}
      <Overview>
        <Tab>
          <Link to="chart">Chart</Link>
        </Tab>
        <Tab>
          <Link to="price">Price</Link>
        </Tab>
      </Overview>
      {loading ? <Loading>Loading...</Loading> : <Outlet />}
    </Container>
  );
}