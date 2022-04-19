import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.js";
import ContactPage from "./pages/ContactPage.js";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/contact" element={<ContactPage />} exact />
        <Route path="/" element={<LandingPage />} exact />
      </Routes>
    </>
  );
}

export default App;
