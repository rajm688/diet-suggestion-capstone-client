import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
const Component = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  background-color: #ff0000a6;
  border-radius: 10px;
  transition: all 0.1s ease-in;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;
const Title = styled.span`
  text-align: center;
  padding: 10%;
  font-weight: 600;
  color: white;
  font-size: 22px;
  text-transform: uppercase;
`;
const Dietplan = ({ img, title, root }) => {
  const history = useHistory();
  return (
    <Component onClick={() => history.push(`${root}`)}>
      <Img src={img} />
      <Title>{title}</Title>
    </Component>
  );
};

export default Dietplan;
