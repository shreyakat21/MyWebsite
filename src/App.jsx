import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Designs from "./pages/Designs";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/designs" element={<Designs />} />
    </Routes>
  );
}
