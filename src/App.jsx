/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "./comopnents/NavBar"; 
import Home from "./comopnents/Home";
import SocialLinks from "./comopnents/SocialLinks";
import About from "./comopnents/About";
import Projects from "./comopnents/Projects";
import Technologies from"./comopnents/Technologies"
import Mycertificates from "./comopnents/Mycertificates";
function App() {
  return (
    <div  >
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
       <Projects/>
       <Mycertificates />
<Technologies/>

     
    </div>
  );
}

export default App;
