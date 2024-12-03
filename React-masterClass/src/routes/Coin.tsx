import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
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
const Loading = styled.div`
  text-align: center;
`;
export default function Coin() {
  const [loading, setLoading] = useState(true);
  const { state } = useLocation();
  const { coinId } = useParams();
  const [infoData, setInfoData] = useState({});
  const [priceData, setPriceData] = useState({});

  // console.log(state);

  useEffect(() => {
    (async () => {
      const response1 = await fetch(
        `https://api.coinpaprika.com/v1/coins/${coinId}`
      );
      const infoData = response1.json();
      const response2 = await fetch(
        `https://api.coinpaprika.com/v1/tickers/${coinId}`
      );
      const priceData = response2.json();
      setInfoData(infoData);
      setPriceData(priceData);
    })();
  });

  return (
    <Container>
      <Header>
        <Title>{state?.id || "Loading..."}</Title>
      </Header>
      {loading ? "Loading..." : null}
    </Container>
  );
}
(1,2,23,,4,5,65,6,6,7,7,8)