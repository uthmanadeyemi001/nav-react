import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import Addmovie from "./components/Addmovie";
import Parent from "./components/Parent";
import Quotes from "./components/Quotes";
import Users from "./pages/Users";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Hero />} />
        <Route path="/stories" element={<Hero />} />
        <Route path="/movies" element={<Addmovie />} />
        <Route path="/user" element={<Users />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </>
  );
};

export default App;
