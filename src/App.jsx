import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Textform from "./Textform";
import {Routes, Route} from "react-router-dom";


const App = () =>{
    return (
     <>
      <Navbar />
      <Textform />
         <Routes>
         
       <Route  exact path="/" element={<Home />} />
        <Route exact path="about/*" element={<About />} />
        
        
        
       </Routes>
       
        
        </>
    );
};
export default App;