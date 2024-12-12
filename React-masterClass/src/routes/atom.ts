import { atom } from "recoil";

// 전역 데이터로 선언
export const modeAtom = atom({
  key: "mode", // 고유한 이름
  default: false, // 값
});
