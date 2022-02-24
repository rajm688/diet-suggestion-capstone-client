import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import NewsLetter from "../components/NewsLetter";
import Why from "../components/Why";

const Home = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Why />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
