import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Designs from "./pages/Designs";
import Cursor from "./components/Cursor";
import "./App.css";

export default function App() {
  return (
    <>
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designs" element={<Designs />} />
      </Routes>
    </>
  );
}
