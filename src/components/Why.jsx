import React from "react";
import styled from "styled-components";
import { excercise } from "../data";
import { mobile } from "../responsive";
import Excercise from "./Excercise";
const Component = styled.div`
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${mobile({ display: "none" })}
`;
const TitleContainer = styled.div``;

const Title = styled.h1``;
const Text = styled.p``;
const ExcerciseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
`;
const Why = () => {
  return (
    <Component id="why">
      <TitleContainer>
        <Title>#Stay Fit anywhere any thime</Title>
        <Text>
          Staying indoors? Get access to at-home diet & exercise tools that can
          help you stay on track with your fitness.
        </Text>
      </TitleContainer>
      <br />
      <ExcerciseContainer>
        {excercise.map(({ img, title, desc }) => (
          <Excercise img={img} title={title} desc={desc} />
        ))}
      </ExcerciseContainer>
    </Component>
  );
};

export default Why;
