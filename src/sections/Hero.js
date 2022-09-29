import React from "react";
import logo from "../static/images/logo.png";

const Hero = () => {
  return (
    <section className="flex items-center justify-center flex-col min-h-screen max-w-6xl mx-auto">
      <img src={logo} alt="Sriptex" />
      <h1 className="text-white text-7xl leading-tight">Cooming soon.</h1>
      <h1 className="text-white text-3xl">Stay connected, Stay updated!</h1>
    </section>
  );
};

export default Hero;
