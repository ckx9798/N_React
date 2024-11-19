import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

// const BoxTwo = styled.div`
//   background-color: tomato;
//   width: 100px;
//   height: 100px;
// `;

const Text = styled.div`
  color: white;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

export default function StyleComponents() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Box bgColor="tomato" />
      {/* <BoxTwo /> */}
      <Circle bgColor="yellow">
        <Text>Hello</Text>
      </Circle>
    </Father>
  );
}
