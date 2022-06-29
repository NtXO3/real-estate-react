import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ScrollToTop from "./components/ScrollToTop";
import AgentListings from "./pages/AgentListings";
import Home from "./pages/Home";
import ListingPage from "./pages/ListingPage";

function App() {
  const [activeAgent, setActiveAgent] = useState('')

  return (
    <Router>
      <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/listings/:id" element={<ListingPage />}/>
          <Route path="/:agent/listings/" element={<AgentListings />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
