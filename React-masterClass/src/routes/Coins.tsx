import React, { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import styled from "styled-components";
import { coinData } from "./mockData";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 768px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinsList = styled.ul``;
const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;

  a {
    padding: 20px;
    transition: color 0.8s ease-in;
    display: flex;
    align-items: center;
    font-size: 18px;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
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

interface CoinInterface {
  id: number;
  name: string;
  gender: string;
  group: string;
  profilePicture: string;
  totalVotes: number;
  teamId: number;
}

export default function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://fandom-k-api.vercel.app/9-2/idols?pageSize=10"
      );
      const data = await response.json();
      setCoins(data.list);
      setLoading(false);
    })();
  }, []);
  console.log(coins);
  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={`/${coin.id}`}
                state={{
                  name: coin.name,
                  group: coin.group,
                  gender: coin.gender,
                  votes: coin.totalVotes,
                }}
              >
                <Imgtag src={coin.profilePicture} />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
