import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import Footer from "../Footer";
import Nav from "../Nav";
import NewsLetter from "../NewsLetter";
const Container = styled.div``;
const Intro = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url("https://www.news-medical.net/image.axd?picture=2019%2F12%2Fshutterstock_1059160034.jpg");
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
  ${mobile({ padding: "10px" })}
`;
const IntroText = styled.p`
  padding: 20px 30% 0 30px;
  font-size: 24px;
  ${mobile({ padding: "2px", fontSize: "20px" })}
`;
const Details = styled.p`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  ${mobile({ flexDirection: "column" })}
`;
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
  ${mobile({ width: "80%" })}
`;
const Lowcard = () => {
  return (
    <Container>
      <Nav />
      <Intro>
        <Title>The Low Carb Diet</Title>
        <IntroText>
          A low-carb diet is a diet that restricts carbohydrates, such as those
          found in sugary foods, pasta and bread. It is high in protein, fat and
          healthy vegetables. There are many different types of low-carb diets,
          and studies show that they can cause weight loss and improve health.
        </IntroText>
      </Intro>
      <Details>
        <What>
          <Title>What to eat</Title>
          <List>lean meats, such as sirloin, chicken breast, or pork.</List>
          <List>fish</List>
          <List>eggs</List>
          <List>leafy green vegetables</List>
          <List>cauliflower and broccoli.</List>
          <List>nuts and seeds, including nut butter.</List>
        </What>
        <What>
          <Title>What to avoid</Title>
          <List>Bread and grains</List>
          <List>Banana, Raisins, Dates, Mango</List>
          <List>Starchy vegetables</List>
          <List>Pasta</List>
          <List>Cereal</List>
          <List>Beer</List>
          <List>Sweetened yogurt</List>
        </What>
      </Details>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Lowcard;
