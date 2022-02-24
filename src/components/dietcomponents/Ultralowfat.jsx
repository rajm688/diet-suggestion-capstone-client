import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Nav from "../Nav";
import NewsLetter from "../NewsLetter";
const Container = styled.div``;
const Intro = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url("https://medmunch.com/wp-content/uploads/2021/05/Low-Fat-Diet-Plan.jpg");
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
const Ultralowfat = () => {
  return (
    <Container>
      <Nav />
      <Intro>
        <Title> Ultra Low Fat Diet</Title>
        <IntroText>
          A low-fat diet plan is a good idea if you need to lose weight and
          maintain health. Particularly losing weight with this type of diet can
          help reduce the risk of various health factors such as heart disease,
          diabetes and strokes. However, there are a number of step to remember
          to keep it healthy.
        </IntroText>
      </Intro>
      <Details>
        <What>
          <Title>What to eat</Title>
          <List>Fruits</List>
          <List>Vegetables</List>
          <List>Whole grains.</List>
          <List>Fatty fish</List>
          <List>Beans</List>
          <List>Nuts and seeds.</List>
        </What>
        <What>
          <Title>What to avoid</Title>
          <List>Junk foods</List>
          <List>Refined carbohydrates</List>
          <List>Fried foods</List>
          <List>Sugar-sweetened beverages</List>
          <List>Processed meats</List>
          <List>Trans fats</List>
        </What>
      </Details>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Ultralowfat;
