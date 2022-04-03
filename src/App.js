import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Pending from "./pages/Pending";
import History from "./pages/History";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/pending" element={<Pending />} />
          <Route path="dashboard/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
