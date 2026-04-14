import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {MyProviderContext} from "./components/contexts/Categorys";

function App() {
  return (
    <>
      <MyProviderContext>
        {/* === Header === */}
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<CartPage />} path="/CartPage" />
        </Routes>
        <Footer />
      </MyProviderContext>
    </>
  );
}

export default App;
