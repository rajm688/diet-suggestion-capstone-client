import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  display: flex;
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
  return (
    <Container>
      <Wrapper>
        <Form>
          <Lable>Choose the Diet plan</Lable>
          <Select>
            <Option>Vegan</Option>
            <Option>NonVeg</Option>
          </Select>
          <Lable>Enter you Details</Lable>
          <Input type="number" placeholder="Enter your Age" />
          <Input type="number" placeholder="Enter your Heiight" />
          <Input type="number" placeholder="Enter your Weight" />
          <Button>Find the Better diet</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default WhattoChoose;
