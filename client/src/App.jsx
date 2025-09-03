import React from "react";
import { Button } from "./components/ui/button";
import Login from "./pages/auth/Login";
import Navbar from "./components/shared/navbar/Navbar";
import HeroSection from "./pages/student/HeroSection";

const App = () => {
  return (
    <main className="">
      <Navbar></Navbar>
      <HeroSection />
      <Login />
    </main>
  );
};

export default App;
