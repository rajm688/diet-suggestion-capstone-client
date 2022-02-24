import React, { useState } from "react";
import styled from "styled-components";
import Suggestion from "./Suggestion";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  border: 2px solid black;
  padding: 20px;
  margin: 10px;
`;
const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
const Select = styled.select`
  padding: 10px;
  font-size: 16px;
`;
const Option = styled.option`
  padding: 10px;
`;
const Lable = styled.h1``;
const Input = styled.input`
  padding: 10px;
  width: 80%;
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

const WhattoChoose = () => {
  const [foodStyle, setFoodestyle] = useState("nonveg");
  const handleChange = (e) => {
    setFoodestyle(e.target.value);
    console.log(foodStyle);
  };
  const [age, setAge] = useState(0);
  const [height, setheight] = useState(0);
  const [weight, setweight] = useState(0);
  console.log(age, height, weight);
  const handlesubmit = () => {
    var BMI = weight / height ** 2;
    console.log(foodStyle, BMI);
  };
  return (
    <Container>
      <Wrapper>
        <Form>
          <Lable>Choose the Diet plan</Lable>
          <Select onChange={handleChange}>
            <Option value="vegan">NonVeg</Option>
            <Option value="nonveg">Vegan</Option>
          </Select>
          <Lable>Enter you Details</Lable>
          <Input
            onChange={(e) => setAge(e.target.value)}
            type="number"
            placeholder="Enter your Age"
            max="100"
          />
          <Input
            onChange={(e) => setheight(e.target.value)}
            type="number"
            placeholder="Enter your Height in Kg"
            max="250"
          />
          <Input
            onChange={(e) => setweight(e.target.value)}
            type="number"
            placeholder="Enter your Weight in Meters"
          />
          <Button onClick={handlesubmit} type="submit">
            Find the Better diet
          </Button>
        </Form>
      </Wrapper>
      <Suggestion />
    </Container>
  );
};

export default WhattoChoose;
