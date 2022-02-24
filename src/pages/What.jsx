import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import NewsLetter from "../components/NewsLetter";
import WhattoChoose from "../components/WhattoChoose";
const Container = styled.div``;
const What = () => {
  return (
    <Container>
      <Nav />
      <WhattoChoose />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default What;
