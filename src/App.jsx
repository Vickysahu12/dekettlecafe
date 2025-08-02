import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./pages/Footer";

// Import Pages
import Hero from "./pages/Hero";
import AboutSection from "./pages/AboutSection";
import ProductTabs from "./pages/ProductTabs";
import SpecialOffers from "./pages/SpecialOffer";
import TestimonialsAndProducts from "./pages/Testimonial";
import LatestBlog from "./pages/LatestBlog";

// Individual Route Pages
import AboutUs from "./router/AboutUs";
import Products from "./router/Products";
import Blog from "./router/Blog";
import Contact from "./router/Contact";
import BookATable from "./router/BookaTable";
const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* Home Page (SPA sections) */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AboutSection />
                <ProductTabs />
                <SpecialOffers />
                <TestimonialsAndProducts />
                <LatestBlog />
                <Footer/>
              </>
            }
          />

          {/* Other Pages */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-a-table" element={<BookATable />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
