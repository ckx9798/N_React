import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { data, Link, Outlet, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchAd, fetchChart } from "./api";

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
export default function Coin() {
  const { state } = useLocation();
  const { coinId } = useParams();

const {isLoading: adLoading, data: adData} = useQuery(["ad", coinId], fetchAd)
const {isLoading: chartLoading, data: chartData} = useQuery(["chart", coinId], fetchChart)
console.log(adData)
console.log(1)
console.log(chartData)
const thisIdol = adData?.find((item) => item.idolId === Number(coinId));
return (
  <Container>
    <Header>
      <Title>{state?.name || thisIdol.idol.name || "Loading..."}</Title>
    </Header>
    {thisIdol ? (
      <>
        <Overview>{thisIdol.title}</Overview>
        <Overview>{thisIdol.subtitle}</Overview>
        <Overview>{thisIdol.idol.gender}</Overview>
        
        <Overview>
          <Tab>
            <Link to={`chart`}>Chart</Link>
          </Tab>
          <Tab>
            <Link to={`price`}>AD</Link>
          </Tab>
        </Overview>
        <Outlet context={{ thisIdol, adLoading }} />
      </>
    ) : null}
  </Container>
);
}
