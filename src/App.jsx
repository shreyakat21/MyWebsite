import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Designs from "./pages/Designs";
import Cursor from "./components/Cursor";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designs" element={<Designs />} />
      </Routes>
    </>
  );
}
