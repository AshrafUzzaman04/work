import React from "react";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Service from "./Components/Service";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="scroll-smooth">
      <section className="">
        <Navigation />
      </section>
      <section className="justify-center items-center flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </section>
      <section>
        <Routes>
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </section>
      <section>
        <Routes>
          <Route path="/service" element={<Service />} />
        </Routes>
      </section>
      <section>
        <Routes>
          <Route path="/Contact" element={<ContactMe />} />
        </Routes>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default App;
