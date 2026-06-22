import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import Addmovie from "./components/Addmovie";
import Parent from "./components/Parent";
import Quotes from "./components/Quotes";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      {/* <Addmovie/> */}
      {/* <Parent/> */}
      <Routes>
        <Route path="/home" element={<Hero />} />
        <Route path="/user" element={<users />} />
        {/* <Route path='/movies' element={<Addmovie />}/> */}
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </>
  );
};

export default App;
