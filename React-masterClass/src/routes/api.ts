export async function fetchCoin() {
  const response = await fetch(
    "https://fandom-k-api.vercel.app/9-4/idols?pageSize=30"
  );
  const data = await response.json();
  return data.list;
}

export async function fetchAd() {
  const response = await fetch(
    "https://fandom-k-api.vercel.app/9-4/donations?pageSize=20"
  );
  const data = await response.json();
  return data.list;
}

export async function fetchChart() {
  const response = await fetch(
    "https://fandom-k-api.vercel.app/9-4/charts/{gender}?gender=female&pageSize=20"
  );
  const data = await response.json();
  return data;
}

export async function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7; // 초*분*시간*일
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  ).then((response) => response.json());
}
