import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import NewsLetter from "../components/NewsLetter";
import Why from "../components/Why";

const Home = ({ user, token }) => {
  const history = useHistory();
  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
  }, [token]);
  return (
    <div>
      <Nav user={user} />
      <Banner />
      <Why />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
