import styled, { keyframes } from "styled-components";

const rotationAnimation = keyframes`
    0% {
        transform: rotate(0deg);
        border-radius: 0px;
    }
    50% {
        transform: rotate(360deg);
        border-radius: 100px;
    }
    100% {
        transform: rotate(0deg);
        border-radius: 0px;
    }
`;

// const Box = styled.div`
//   width: 200px;
//   height: 200px;
//   background-color: tomato;
//   animation: ${rotationAnimation} 1s linear infinite;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   span {
//     font-size: 36px;
//     &:hover {
//       font-size: 50px;
//     }
//     &:active {
//       opacity: 0%;
//     }
//   }
//`;


const Emoji = styled.span`
  font-size: 36px;
`;


const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 36px;
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0%;
    }
  }
`;

export default function AnimationBox() {
    return (
      <div>
        <Box>
          <Emoji>😢</Emoji>   📌 적용
        </Box>
        
          <Emoji>🔥</Emoji>   📌 미적용
      </div>
    );
  }
