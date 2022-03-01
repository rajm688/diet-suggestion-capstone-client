import React from "react";
import styled from "styled-components";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
`;
const Left = styled.div`
  flex: 1;
  padding-right: 50px;
  text-align: justify;
`;
const Logo = styled.h1``;
const Moto = styled.p`
  font-size: 14px;
`;
const Center = styled.div`
  flex: 1;
`;
const Contact = styled.h1``;
const Phone = styled.p``;
const Email = styled.p``;
const SocialContainer = styled.div`
  padding-top: 10px;
  display: flex;
  gap: 5px;
`;
const IconContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Right = styled.div`
  flex: 1;
  ${mobile({ display: "none" })}
`;
const OtherProducts = styled.h1``;
const Location = styled.div``;
const Products = styled.p``;
const Payment = styled.img`
  width: 60%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Get Set Fit</Logo>
        <Moto>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illo
          cumque expedita enim voluptatibus? Doloribus, esse natus quasi
          recusandae quos deleniti maxime, fuga expedita autem, amet saepe!
          Aliquam, facere numquam!
        </Moto>
      </Left>
      <Center>
        <Contact>Contact US</Contact>
        <Phone>
          <LocalPhoneIcon />
          +91 98445686675
        </Phone>
        <Email>
          <EmailIcon />
          sanjai@fitsouce.in
        </Email>
        <Location>
          <LocationOnIcon />
          TamilNadu,India
        </Location>
        <SocialContainer>
          <IconContainer color="#C13584">
            <InstagramIcon />
          </IconContainer>
          <IconContainer color=" #4267B2">
            <FacebookIcon />
          </IconContainer>
          <IconContainer color="#0077b5">
            <LinkedInIcon />
          </IconContainer>
          <IconContainer color="#FF0000">
            <YouTubeIcon />
          </IconContainer>
        </SocialContainer>
      </Center>
      <Right>
        <OtherProducts>Other Products</OtherProducts>
        <Products>MediGuru</Products>
        <Products>Dailymate</Products>
        <Products>PartnerFri</Products>
        <Payment
          src="https://help.zazzle.com/hc/article_attachments/360010513393/Logos-01.png"
          ait="payment"
        ></Payment>
      </Right>
    </Container>
  );
};

export default Footer;
