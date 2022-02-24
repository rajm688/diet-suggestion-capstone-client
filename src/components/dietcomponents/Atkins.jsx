import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Nav from "../Nav";
import NewsLetter from "../NewsLetter";
const Container = styled.div``;
const Intro = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url("https://i.pinimg.com/originals/85/e9/7d/85e97de03adfec8a94a111e13cc04114.jpg");
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
const Atkins = () => {
  return (
    <Container>
      <Nav />
      <Intro>
        <Title>The Atkins Diet</Title>
        <IntroText>
          The Atkins diet is a low-carb diet, usually recommended for weight
          loss. Proponents of this diet claim that you can lose weight while
          eating as much protein and fat as you want, as long as you avoid foods
          high in carbs.
        </IntroText>
      </Intro>
      <Details>
        <What>
          <Title>What to eat</Title>
          <List>Meats</List>
          <List>Fatty fish and seafood</List>
          <List>Eggs</List>
          <List>Low-carb vegetables</List>
          <List>Full-fat dairy</List>
          <List>Healthy fats.</List>
        </What>
        <What>
          <Title>What to avoid</Title>
          <List>Sugar</List>
          <List>Grains</List>
          <List>Trans fats</List>
          <List>“Diet” and “low-fat” foods</List>
          <List>High-carb vegetables</List>
          <List>High-carb fruits</List>
        </What>
      </Details>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Atkins;
