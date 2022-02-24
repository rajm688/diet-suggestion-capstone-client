import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://miro.medium.com/max/1838/1*zE2qnVTJehut7B8P2aMn3A.gif");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
const Wrapper = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
const Link = styled.a`
  text-align: center;
  font-size: 20px;
  background-color: #ffffffc3;
  font-weight: 600;
  color: #868686;
`;
const NotFound = () => {
  const history = useHistory();
  return (
    <Container>
      <Wrapper>
        <Link href="/">Oh Ohh You lost.. click here to take you home</Link>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
