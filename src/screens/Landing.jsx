import React from "react";
// Sections
import Navbar from "../components/Nav/Navbar";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import CarruselSedes from "../components/Sections/CarruselSedes";
import Footer from "../components/Sections/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />
      <CarruselSedes />

      <Projects />
      {/*<Blog />*/}
      <Pricing />
      <Services />
      <Footer />
    </>
  );
}
