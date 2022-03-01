import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import Footer from "../Footer";
import Nav from "../Nav";
import NewsLetter from "../NewsLetter";
const Container = styled.div``;
const Intro = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url("https://images.everydayhealth.com/images/diet-nutrition/vegetarian-vegan-diets-linked-to-higher-stroke-risk-722x406.jpg?sfvrsn=299d1a62_0");
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
  ${mobile({ padding: "2px", fontSize: "24px" })}
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
const Vegan = () => {
  return (
    <Container>
      <Nav />
      <Intro>
        <Title>The vegan diet</Title>
        <IntroText>
          A vegan diet contains only plants (such as vegetables, grains, nuts
          and fruits) and foods made from plants. Vegans do not eat foods that
          come from animals, including dairy products and eggs.
        </IntroText>
      </Intro>
      <Details>
        <What>
          <Title>What to eat</Title>
          <List>Fruits and vegetables</List>
          <List>Legumes such as peas, beans, and lentils</List>
          <List>Nuts and seeds</List>
          <List>Breads, rice, and pasta</List>
          <List>
            Dairy alternatives such as soymilk, coconut milk, and almond milk
          </List>
          <List>Vegetable oils</List>
        </What>
        <What>
          <Title>What to avoid</Title>
          <List>Beef, pork, lamb, and other red meat</List>
          <List>Chicken, duck, and other poultry</List>
          <List>Fish or shellfish such as crabs, clams, and mussels</List>
          <List>Cheese, butter</List>
          <List>Eggs</List>
          <List>Milk, cream, ice cream, and other dairy products</List>
          <List>Mayonnaise </List>
        </What>
      </Details>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Vegan;
