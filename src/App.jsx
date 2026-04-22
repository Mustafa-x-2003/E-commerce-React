import React from "react";
import Home from "./pages/HomePage";
import { Route, Routes } from "react-router";
import CartPage from "./pages/CartPage";
import AllProductsPage from "./pages/AllProductsPage";

import Header from "./components/Header";
import Footer from "./components/Footer";

import ProductDetals from "./pages/ProductDetalsPage";
import { MyProviderContext } from "./components/contexts/MyContext";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <>
      <MyProviderContext>
        {/* === Header === */}
        <Header />
        <div className="pt-45  ">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<AllProductsPage />} path="/AllProductsPage" />

            <Route element={<ProductDetals />} path={`/ProductDetals/:id`} />
            <Route element={<CartPage />} path={"/CartPage"} />
            <Route element={<Favorite />} path={"/Favorite"} />
          </Routes>
        </div>

        <Footer />
      </MyProviderContext>
    </>
  );
}

export default App;
