import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
const Component = styled.div`
  background-color: #ff0000a6;
  height: 8vh;
  padding: 1vh 10px 0;
`;
const Logo = styled.h1`
  margin: 0;
  padding: 0;
  color: white;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Contact = styled.div`
  color: white;
  font-weight: 600;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  ${mobile({ display: "none" })}
`;
const Phone = styled.span``;
const Email = styled.span``;

const Nav = () => {
  return (
    <Component>
      <Wrapper>
        <Logo>Get Set Fit</Logo>
        <Contact>
          <Phone>+91 98445686675</Phone>
          <Email>sanjai@fitsouce.in</Email>
        </Contact>
      </Wrapper>
    </Component>
  );
};

export default Nav;
