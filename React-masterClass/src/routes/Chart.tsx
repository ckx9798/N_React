interface ItoggleDark {
  mode: boolean;
}

export default function Chart({ mode }: ItoggleDark) {
  console.log(mode);
  return (
    <div
      style={{
        width: "440px",
        height: "240px",
        // 모드에 따라 배경색 변경
        backgroundColor: mode ? "#ffffff" : "#gray",
      }}
    >
      dd
    </div>
  );
}
