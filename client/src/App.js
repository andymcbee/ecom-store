import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./Routes/HomePage.js";
import ProductPage from "./Routes/ProductPage.js";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Store</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
