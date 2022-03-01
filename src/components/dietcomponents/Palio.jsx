import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import Footer from "../Footer";
import Nav from "../Nav";
import NewsLetter from "../NewsLetter";
const Container = styled.div``;
const Intro = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url("https://images-prod.healthline.com/hlcmsresource/images/AN_images/paleo-diet-meal-plan-and-menu-1296x728-feature.jpg");
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
const Palio = () => {
  return (
    <Container>
      <Nav />
      <Intro>
        <Title>The Paleo Diet</Title>
        <IntroText>
          A paleo diet is a dietary plan based on foods similar to what might
          have been eaten during the Paleolithic era, which dates from
          approximately 2.5 million to 10,000 years ago. A paleo diet typically
          includes lean meats, fish, fruits, vegetables, nuts and seeds — foods
          that in the past could be obtained by hunting and gathering.
        </IntroText>
      </Intro>
      <Details>
        <What>
          <Title>What to eat</Title>
          <List>Fruits</List>
          <List>Vegetables</List>
          <List>Nuts and seeds</List>
          <List>Lean meats, especially grass-fed animals or wild game</List>
          <List>
            Fish, especially those rich in omega-3 fatty acids, such as salmon,
            mackerel and albacore tuna
          </List>
          <List>
            Oils from fruits and nuts, such as olive oil or walnut oil
          </List>
        </What>
        <What>
          <Title>What to avoid</Title>
          <List>Grains, such as wheat, oats and barley</List>
          <List>Legumes, such as beans, lentils, peanuts and peas</List>
          <List>Dairy products</List>
          <List>Refined sugar</List>
          <List>Salt</List>
          <List>Potatoes</List>
          <List>Highly processed foods in general</List>
        </What>
      </Details>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Palio;
