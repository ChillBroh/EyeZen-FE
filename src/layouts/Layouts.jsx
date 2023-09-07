import React from "react";
import Router from "../router/Router";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const Layouts = () => {
  return (
    <div>
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
};

export default Layouts;
