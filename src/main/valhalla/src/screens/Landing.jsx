import React from "react";
// Sections
import Navbar from "../components/Nav/Navbar";
import Services from "../components/Sections/Services";
import Clases from "../components/Sections/Clases";
import Pricing from "../components/Sections/Pricing";
import CarruselSedes from "../components/Sections/CarruselSedes";
import { Footer } from "../components/Sections/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />
      <CarruselSedes />
      <Clases />
      <Pricing />
      <Services />
      <Footer />
    </>
  );
}
