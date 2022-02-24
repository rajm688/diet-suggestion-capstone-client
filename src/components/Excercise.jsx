import React from "react";
import styled from "styled-components";
const Component = styled.div`
  width: 25%;
  height: 60vh;
`;
const Image = styled.img`
  width: 80%;
  height: 50%;
  object-fit: contain;
`;
const Title = styled.h1``;
const Text = styled.p``;
const Excercise = ({ img, title, desc }) => {
  return (
    <Component>
      <Image src={img} />
      <Title>{title}</Title>
      <Text>{desc}</Text>
    </Component>
  );
};

export default Excercise;
