import Home from "./pages/Home";
import James from "./pages/James";
import Lars from "./pages/Lars";
import Kirk from "./pages/Kirk";
import Robert from "./pages/Robert";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import NotFound from "./pages/NotFound";

// import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/james" element={<James />} />
        <Route path="/lars" element={<Lars />} />
        <Route path="/kirk" element={<Kirk />} />
        <Route path="/robert" element={<Robert />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
