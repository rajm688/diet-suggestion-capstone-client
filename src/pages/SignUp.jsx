import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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
const Link = styled.button`
  border: none;
  background-color: transparent;
  color: green;
  cursor: pointer;
`;

const SignUp = () => {
  const history = useHistory();

  const [username, setUseranme] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = {
    username,
    email,
    password,
  };
  const handleSubmit = () => {
    fetch("https://capstone-diet-suggestion.herokuapp.com/user/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then(() => history.push("/login"));
  };
  console.log(data);
  return (
    <Container>
      <Wrapper>
        <Lable>Sign Up</Lable>
        <Form>
          <Input
            onChange={(e) => setUseranme(e.target.value)}
            placeholder="UserName"
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <Button onClick={handleSubmit}>SignUp</Button>
          <Link
            onClick={() => {
              history.push("/login");
            }}
          >
            Log In
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignUp;
