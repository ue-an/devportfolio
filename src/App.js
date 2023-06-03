import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
