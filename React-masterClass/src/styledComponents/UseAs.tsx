import styled from "styled-components";

const Father = styled.div`
  display: flex;
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
      <Btn>Login </Btn>
      <Btn as="a" href="/my">
        Logout
      </Btn>
    </Father>
  );
}
