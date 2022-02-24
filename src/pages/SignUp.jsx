import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2021/04/What_Is_The_Keto_Diet_PHOTO.jpeg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffffbc;
  border: 2px solid black;
  width: 50%;
`;
const Lable = styled.h1``;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;
  width: 80%;
`;
const Input = styled.input`
  width: 80%;
  padding: 15px;
`;
const Button = styled.button`
  background-color: #23e223;
  border: none;
  padding: 10px;
  width: 80%;
  box-shadow: 5px 5px 5px gray;
  color: white;
  font-weight: 600;
  font-size: 15px;
`;
const Link = styled.a``;

const SignUp = () => {
  return (
    <Container>
      <Wrapper>
        <Lable>Sign Up</Lable>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="UserName" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button>SignUp</Button>
          <Link>Log In</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
