import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { dietdata } from "../data";
import Dietplan from "./Dietplan";
const Component = styled.div`
  height: 91vh;
`;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;
const Left = styled.div`
  padding: 20px;

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Flexontainer = styled.div`
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const Dietlist = styled.div``;
const Right = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Button = styled.button`
  border: none;
  border-radius: 30px;
  width: 80%;
  background-color: #ff0000a6;
  padding: 20px;
  color: white;
  font-weight: 600;
  font-size: 20px;
`;
const Content = styled.div``;
const Heading = styled.h1`
  text-align: center;
`;
const Text = styled.p`
  text-align: center;
`;

const Banner = () => {
  const history = useHistory();
  return (
    <Component>
      <Wrapper>
        <Left>
          <Content>
            <Heading>Welcome to FitSource</Heading>
            <Text>Choose a diet plan to Continue</Text>
          </Content>
          <Flexontainer>
            {dietdata.map(({ img, title, root }) => (
              <Dietplan img={img} title={title} root={root} />
            ))}
          </Flexontainer>
          <Button onClick={() => history.push("/what")}>
            Dont Know what to choose..?
          </Button>
        </Left>
        <Right>
          <Image src="https://i.insider.com/5c01a434de34c440c064c0f3?width=1000&format=jpeg&auto=webp" />
        </Right>
      </Wrapper>
    </Component>
  );
};

export default Banner;
