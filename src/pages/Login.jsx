import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://food.ubc.ca/wp-content/uploads/2021/01/AdobeStock_271185487-scaled.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
`;
const Wrapper = styled.div`
  padding: 30px;
  background-color: #ffffffbc;
  border: 2px solid black;
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1``;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 80%;
`;
const Input = styled.input`
  padding: 10px;
  width: 80%;
`;
const Button = styled.button`
  background-color: #23e223;
  border: none;
  padding: 10px;
  width: 50%;
  box-shadow: 5px 5px 5px gray;
  color: white;
  font-weight: 600;
  font-size: 15px;
`;

const Link = styled.a``;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Welcome</Title>
        <Form>
          <Input placeholder="username"></Input>
          <Input placeholder="Password"></Input>
          <Button>Log In</Button>
          <Link>Forget password..?</Link>
          <Link>Creat a new Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;