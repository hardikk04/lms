import React from "react";
import Login from "./pages/auth/Login";
import HeroSection from "./pages/student/HeroSection";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Courses from "./pages/student/Courses";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<>
            <HeroSection />
            <Courses/>
            </>}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>
    </main>
  );
};

export default App;
