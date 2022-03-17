import React from "react";
// import { Route, Router } from "react-router-dom";
// import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from "./globalStyles";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import { productData, productDataTwo } from "./Components/Products/data";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />

      {/* <Navbar /> */}
      <Hero />
      <Products heading="The Classics" data={productData} />

      <Feature />

      <Products heading="New Collection" data={productDataTwo} />

      <Footer />

    </Router>
  );
}

export default App;
