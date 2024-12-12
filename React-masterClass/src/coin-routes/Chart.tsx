import { useRecoilValue } from "recoil";
import { modeAtom } from "./atom";

export default function Chart() {
  const mode = useRecoilValue(modeAtom);
  return (
    <div
      style={{
        width: "440px",
        height: "240px",
        // 모드에 따라 배경색 변경
        backgroundColor: mode ? "#ffffff" : "gray",
      }}
    >
      dd
    </div>
  );
}
