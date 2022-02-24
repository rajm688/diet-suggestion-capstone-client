import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Nav from "../Nav";
import NewsLetter from "../NewsLetter";
const Container = styled.div``;
const Intro = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dukan-diet-1525454207.jpg");
  width: 100%;
  height: 50vh;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
`;
const Title = styled.h1`
  margin: 0;
  padding: 20px;
  font-size: 34px;
`;
const IntroText = styled.p`
  padding: 20px 30% 0 30px;
  font-size: 24px;
`;
const Details = styled.p`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
`;
const DeatilsText = styled.p``;
const List = styled.li`
  padding-left: 50px;
`;
const What = styled.div`
  width: 40vw;
  height: max-content;
  background-color: #fffafa;
  border-radius: 10px;
  box-shadow: 5px 5px 5px gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
`;
const Dukan = () => {
  return (
    <Container>
      <Nav />
      <Intro>
        <Title>The Dukan Diet</Title>
        <IntroText>
          The Dukan Diet is complicated, eliminates lots of healthy foods, may
          prompt health concerns due to its high protein content, and is
          probably not a long-term solution for weight loss.
        </IntroText>
      </Intro>
      <Details>
        <What>
          <Title>What to eat</Title>
          <List>Lean beef, veal, venison, bison</List>
          <List>Lean pork.</List>
          <List>Poultry without skin.</List>
          <List>Liver, kidney, and tongue.</List>
          <List>Fish and shellfish (all types)</List>
          <List>Eggs.</List>
        </What>
        <What>
          <Title>What to avoid</Title>
          <List>Anything that’s not protein during Attack.</List>
          <List>Starchy vegetables during Cruise</List>
          <List>Alcohol, until you reach the Consolidation phase.</List>
          <List>A serving of fruit</List>
          <List>Cereal</List>
          <List>Beer</List>
        </What>
      </Details>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Dukan;
